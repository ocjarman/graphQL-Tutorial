const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

//will contain all resolvers for API
const resolvers = {
  Query: {
    //USER RESOLVERS
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    //MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) => movie.year >= 2000 && movie.year <= 2010
      );
    },
  },

  //all fxns related to mutating data
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      console.log(user);
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      console.log(user);
      return user;
    },
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      console.log(args.input);
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          console.log(args.input);
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
