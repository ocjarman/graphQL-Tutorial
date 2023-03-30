const UserList = [
  {
    id: 1,
    name: "Evelyn O'brien",
    username: "nibh.quisque.nonummy@protonmail.edu",
    nationality: "CANADA",
    age: 1,
    friends: [
      {
        id: 2,
        name: "Denton Edwards",
        username: "amet.lorem@yahoo.couk",
        nationality: "CHILE",
        age: 24,
      },
      {
        id: 3,
        name: "Allegra Bradley",
        username: "elit.sed@google.edu",
        nationality: "BRAZIL",
        age: 4,
      },
    ],
  },
  {
    id: 2,
    name: "Denton Edwards",
    username: "amet.lorem@yahoo.couk",
    nationality: "CHILE",
    age: 24,
  },
  {
    id: 3,
    name: "Allegra Bradley",
    username: "elit.sed@google.edu",
    nationality: "BRAZIL",
    age: 4,
  },
  {
    id: 4,
    name: "Elton Holcomb",
    username: "mauris@hotmail.ca",
    nationality: "GERMANY",
    age: 27,
    friends: [
      {
        id: 5,
        name: "Reece Haney",
        username: "morbi.sit@aol.ca",
        nationality: "INDIA",
        age: 11,
      },
    ],
  },
  {
    id: 5,
    name: "Reece Haney",
    username: "morbi.sit@aol.ca",
    nationality: "INDIA",
    age: 11,
  },
];

const MovieList = [
  {
    id: 1,
    name: "Titanic",
    year: 2007,
    isInTheaters: false,
  },
  {
    id: 2,
    name: "Finding Nemo",
    year: 2018,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Little Mermaid",
    year: 2016,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "Peter Pan",
    year: 2005,
    isInTheaters: false,
  },
  {
    id: 5,
    name: "Elmo's World",
    year: 2001,
    isInTheaters: true,
  },
];

module.exports = { UserList, MovieList };
