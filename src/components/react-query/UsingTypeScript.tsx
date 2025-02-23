// UsingTypeScript.tsx
// This component demonstrates how to set up a React Query project with TypeScript, defining types for queries and mutations.

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const createUser = async (newUser: Omit<User, "id">): Promise<User> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
};

const UsingTypeScript = () => {
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: createUser, // Specify the mutation function
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // Invalidate the "users" query on success
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, email });
    setName("");
    setEmail("");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching users</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter user name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter user email" />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UsingTypeScript;
