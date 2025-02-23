// CombiningWithStateManagement.js
// This component illustrates how to use React Query alongside Redux or Context API for managing local and server state together.

import React, { useContext, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";

// Create a simple context for local state
const LocalStateContext = React.createContext();

const localStateReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const CombiningWithStateManagement = () => {
  const [state, dispatch] = useReducer(localStateReducer, { name: "" });
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <LocalStateContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>Users</h1>
        <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
        <input value={state.name} onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} placeholder="Enter your name" />
        <p>Your name: {state.name}</p>
      </div>
    </LocalStateContext.Provider>
  );
};

export default CombiningWithStateManagement;
