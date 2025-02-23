// ErrorHandling.js
// This component handles errors gracefully in both queries and mutations, displaying user-friendly error messages.

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

const createUser = async (newUser) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to create user");
  return response.json();
};

const ErrorHandling = () => {
  const queryClient = useQueryClient();
  const { data: users, isError: isQueryError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries("users"); // Invalidate the "users" query on success
    },
  });

  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(
      { name },
      {
        onError: (err) => {
          setError(err.message);
        },
      }
    );
    setName("");
  };

  return (
    <div>
      <h1>Users</h1>
      {isQueryError && <div>Error fetching users</div>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter user name" />
        <button type="submit">Create User</button>
        {mutation.isError && <div>Error: {mutation.error.message}</div>}
        {error && <div>Error: {error}</div>}
      </form>
    </div>
  );
};

export default ErrorHandling;
