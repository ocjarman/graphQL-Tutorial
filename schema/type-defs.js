const { gql } = require("apollo-server");

const typeDefs = gql`
  # will hold the queries we want to make inside our api
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    # should return a list of users, list nor user can be null
    users: [User!]!
  }
`;
