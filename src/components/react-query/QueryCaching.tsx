// QueryCaching.js
// This component demonstrates how data is cached and retrieved from the cache on subsequent requests.

import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const QueryCaching = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <div>
      <h1>Cached Users</h1>
      {data && data.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};

export default QueryCaching;
