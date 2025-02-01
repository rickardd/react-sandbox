import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// const fetchPosts = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const fetchBrokenUrl = async () => {
  const response = await fetch("https://sdfdsfdsf");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const fetchWithDelay = async (apiFn) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const data = await apiFn();
      resolve(data);
    }, 2000);
  });
};

const getUsers = async () => {
  return await fetchWithDelay(fetchUsers);
};

const getBrokenData = async () => {
  return await fetchWithDelay(fetchBrokenUrl);
};

// In React Query, the useQuery hook automatically runs the query function (queryFn) when the component mounts.
// If you want to control when the query runs (for example, to avoid it running immediately),
// you can use the enabled option. This option allows you to conditionally enable or disable
// the query based on a boolean value.

export const PostList = () => {
  const [fetchEnabled, setFetchEnabled] = useState(false); // State to control fetching

  // This runs straight away
  const { data, error, isLoading, isError, status, fetchStatus } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  // This waits to be enabled before running
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
    isError: isError2,
    status: status2,
  } = useQuery({
    queryKey: ["users-error"],
    queryFn: getBrokenData,
    enabled: fetchEnabled,
  });

  console.log(data2);

  // console.log(status, fetchStatus);

  const handleClick = () => {
    setFetchEnabled(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading2) {
    return <div>Loading2...</div>;
  }

  if (isError2) {
    return <div>Error2: {error2.message}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <h3>Status: {status}</h3>
      <h3>FetchStatus: {fetchStatus}</h3>
      <button onClick={handleClick}>Do failing request</button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Remove vite-plugin-preact and @preact/signals-react-transform
