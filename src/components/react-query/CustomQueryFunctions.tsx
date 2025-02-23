// CustomQueryFunctions.js
// This component shows how to create a custom query function to fetch data from a specific API endpoint.

import { useQuery } from "@tanstack/react-query";

const fetchUserById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) throw new Error("User not found");
  return response.json();
};

const CustomQueryFunctions = ({ userId }) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ["user", userId], queryFn: () => fetchUserById(userId) });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching user</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};

export default CustomQueryFunctions;
