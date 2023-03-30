import React from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
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

const DisplayData = () => {
  const [movieSearched, setMovieSearched] = useState("");
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);

  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  if (loading) {
    return <h1>Data is loading...</h1>;
  }
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  if (movieError) {
    console.log(movieError);
  }
  return (
    <div>
      <h1>List of Users</h1>
      {data.users &&
        data.users.map((user) => {
          return (
            <div>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Age: {user.age}</p>
              <p>Nationality: {user.nationality}</p>
            </div>
          );
        })}
      <h1>List of Movies</h1>
      {movieData &&
        movieData.movies.map((movie) => {
          return (
            <div>
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
