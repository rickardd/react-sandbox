// Mutations.js
// This component creates a new user with a form and handles the submission with optimistic updates.

import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createUser = async (newUser) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const Mutations = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createUser, // Specify the mutation function
    onMutate: async (newUser) => {
      await queryClient.cancelQueries("users");
      const previousUsers = queryClient.getQueryData("users");
      queryClient.setQueryData("users", (old) => [...old, newUser]);
      return { previousUsers };
    },
    onError: (err, newUser, context) => {
      queryClient.setQueryData("users", context.previousUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter user name" />
      <button type="submit">Create User</button>
      {mutation.isLoading ? <p>Creating user...</p> : mutation.isError && <p>Error: {mutation.error.message}</p>}
    </form>
  );
};

export default Mutations;
