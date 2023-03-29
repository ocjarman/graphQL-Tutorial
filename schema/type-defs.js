const { gql } = require("apollo-server");

const typeDefs = gql`
  # will hold the queries we want to make inside our api
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
  }

  type Query {
    # should return a list of users, list nor user can be null
    users: [User!]!
    user(id: ID!): User!
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;

module.exports = { typeDefs };
