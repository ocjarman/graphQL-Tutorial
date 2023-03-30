import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
    }
  }
`;
const DisplayData = () => {
  const { data } = useQuery(QUERY_ALL_USERS);

  if (data) {
    console.log(data);
  }
  return (
    <div>
      <h1>List of Users</h1>
    </div>
  );
};

export default DisplayData;
