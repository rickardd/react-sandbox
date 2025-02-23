// PerformanceOptimization.js
// This component demonstrates techniques to optimize performance, such as using staleTime and cacheTime.

import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const PerformanceOptimization = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 10000, // Data is fresh for 10 seconds
    cacheTime: 300000, // Cache data for 5 minutes
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching users</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default PerformanceOptimization;
