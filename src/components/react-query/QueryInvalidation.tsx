// QueryInvalidation.js
// This component updates a user and invalidates the query to refetch the updated data.

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const updateUser = async ({ id, name }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  return response.json();
};

const QueryInvalidation = () => {
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: updateUser, // Specify the mutation function
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // Invalidate the "users" query on success
    },
  });

  const handleUpdate = (id) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      mutation.mutate({ id, name: newName });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching users</div>;

  return (
    <div>
      <h1>Users</h1>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            {user.name} <button onClick={() => handleUpdate(user.id)}>Update</button>
          </div>
        ))}
    </div>
  );
};

export default QueryInvalidation;
