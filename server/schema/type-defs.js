const { gql } = require("apollo-server");

//SCHEMA

const typeDefs = gql`
  # will hold the queries we want to make inside our api
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    isInTheaters: Boolean!
  }

  # allows us to query users and movies
  type Query {
    # should return a list of users, list nor user can be null
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    # setting default value below if not given by user
    nationality: Nationality = BRAZIL
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
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
