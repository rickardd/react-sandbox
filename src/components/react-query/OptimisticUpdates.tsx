// OptimisticUpdates.js
// This component implements optimistic updates when deleting an item and rolls back changes if the mutation fails.

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const deletePost = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
};

const OptimisticUpdates = () => {
  const queryClient = useQueryClient();
  const { data: posts } = useQuery({
    queryKey: ["posts"], // Use an array for the query key
    queryFn: fetchPosts, // Specify the fetch function
  });

  const mutation = useMutation({
    mutationFn: deletePost, // Specify the mutation function
    onMutate: async (id) => {
      await queryClient.cancelQueries("posts");
      const previousPosts = queryClient.getQueryData("posts");
      queryClient.setQueryData("posts", (old) => old.filter((post) => post.id !== id));
      return { previousPosts };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData("posts", context.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <button onClick={() => mutation.mutate(post.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default OptimisticUpdates;
