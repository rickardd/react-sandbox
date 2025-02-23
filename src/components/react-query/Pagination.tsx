// Pagination.js
// This component fetches paginated data and displays it with pagination controls.

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchPosts = async (page) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
  return response.json();
};

const Pagination = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", page], // Use an array for the query key
    queryFn: () => fetchPosts(page), // Specify the fetch function
    keepPreviousData: true, // Optional: Keep previous data while loading new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching posts</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage((old) => old + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
