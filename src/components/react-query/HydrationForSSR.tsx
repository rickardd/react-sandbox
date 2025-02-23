// HydrationForSSR.js
// This component demonstrates how to hydrate data fetched on the server in a Next.js application.

// import { QueryClient, QueryClientProvider, Hydrate, dehydrate } from "@tanstack/react-query";

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json();
// };

// const Users = () => {
//   const { data: users } = useQuery({
//   queryKey: 'users',
//   queryFn: fetchUsers,
// });

//   return <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
// };

const HydrationForSSR = ({ dehydratedState }) => {
  // const queryClient = new QueryClient();
  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <Hydrate state={dehydratedState}>
  //       <Users />
  //     </Hydrate>
  //   </QueryClientProvider>
  // );
};

// This function would be used in a Next.js page to fetch data on the server
// export async function getServerSideProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery("users", fetchUsers);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default HydrationForSSR;
