// DynamicQueries.js
// This component fetches data based on user input, demonstrating dynamic query keys.

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchUserByName = async (name) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?name=${name}`);
  return response.json();
};

const DynamicQueries = () => {
  const [name, setName] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", name],
    queryFn: () => fetchUserByName(name),
    enabled: !!name, // Only run the query if the name is not empty
  });

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Search for a user by name" />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching users</div>}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DynamicQueries;
