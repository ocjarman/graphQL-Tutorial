import React from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";
const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      nationality
    }
  }
`;
const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
      year
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      year
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      id
    }
  }
`;
const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

const DisplayData = () => {
  const [movieSearched, setMovieSearched] = useState("");

  //create user states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  const { data, loading, refetch } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [deleteUser] = useMutation(DELETE_USER_MUTATION);

  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  if (loading) {
    return <h1>Data is loading...</h1>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(event) => setAge(Number(event.target.value))}
        />
        <input
          type="text"
          placeholder="nationality"
          onChange={(event) => setNationality(event.target.value.toUpperCase())}
        />
        <button
          onClick={() => {
            createUser({
              variables: { input: { name, username, age: 21, nationality } },
            });
            refetch();
          }}
        >
          Create User
        </button>
      </div>
      <h1>List of Users</h1>
      {data.users &&
        data.users.map((user) => {
          return (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Age: {user.age}</p>
              <p>Nationality: {user.nationality}</p>
              <button
                onClick={() => {
                  deleteUser({
                    variables: { id: user.id },
                  });
                  refetch();
                }}
              >
                Delete this user
              </button>
            </div>
          );
        })}
      <h1>List of Movies</h1>
      {movieData &&
        movieData.movies.map((movie) => {
          return (
            <div key={movie.id}>
              <p>Name: {movie.name}</p>
              <p>Year: {movie.year}</p>
            </div>
          );
        })}

      <div>
        <input
          type="text"
          placeholder="Titanic"
          onChange={(event) => setMovieSearched(event.target.value)}
        />
        <button
          onClick={() => {
            fetchMovie({ variables: { name: movieSearched } });
          }}
        >
          Fetch Data
        </button>
        <div>
          {movieSearchedData && (
            <div>
              <p>Movie Name: {movieSearchedData.movie.name}</p>
              <p>Movie Year: {movieSearchedData.movie.year}</p>
            </div>
          )}
          {movieError && <h1>MOVIE ERROR!</h1>}
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
