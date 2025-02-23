// IntegrationWithAxios.js
// This component shows how to use Axios to fetch data instead of the Fetch API, configured with React Query.

import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

const IntegrationWithAxios = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
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

export default IntegrationWithAxios;
