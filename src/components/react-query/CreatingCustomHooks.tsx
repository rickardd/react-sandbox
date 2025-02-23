// CreatingCustomHooks.js
// This component demonstrates building a custom hook that encapsulates specific query logic for fetching users.

import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      return response.json();
    },
  });
};

const CreatingCustomHooks = () => {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching users</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default CreatingCustomHooks;
