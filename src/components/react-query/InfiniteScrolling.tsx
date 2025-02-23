// InfiniteScrolling.js
// This component implements infinite scrolling for a list of posts.

import { useInfiniteQuery } from "@tanstack/react-query";

const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=5`);
  return response.json();
};

const InfiniteScrolling = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery({
    queryKey: ["posts"], // Use an array for the query key
    queryFn: fetchPosts, // Specify the fetch function
    getNextPageParam: (lastPage, pages) => (lastPage.length ? pages.length + 1 : undefined),
    initialPageParam: undefined, // Set initialPageParam to undefined
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching posts</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>{data.pages.map((page) => page.map((post) => <li key={post.id}>{post.title}</li>))}</ul>
      {hasNextPage && <button onClick={fetchNextPage}>Load More</button>}
    </div>
  );
};

export default InfiniteScrolling;
