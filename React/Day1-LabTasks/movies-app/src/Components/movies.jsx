import { Component } from "react";
import { v4 as uuid } from "uuid";
import Movie from "./movie";

// let m;

class Movies extends Component {
  constructor() {
    super();
    let m = [
      {
        id: uuid(),
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        director: "Frank Darabont",
      },
      {
        id: uuid(),
        title: "The Godfather",
        year: 1972,
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
      },
      {
        id: uuid(),
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime, Drama",
        director: "Quentin Tarantino",
      },
      {
        id: uuid(),
        title: "The Dark Knight",
        year: 2008,
        genre: "Action, Crime, Drama",
        director: "Christopher Nolan",
      },
      {
        id: uuid(),
        title: "Fight Club",
        year: 1999,
        genre: "Drama",
        director: "David Fincher",
      },
      {
        id: uuid(),
        title: "Inception",
        year: 2010,
        genre: "Action, Adventure, Sci-Fi",
        director: "Christopher Nolan",
      },
      {
        id: uuid(),
        title: "The Matrix",
        year: 1999,
        genre: "Action, Sci-Fi",
        director: "Lana Wachowski, Lilly Wachowski",
      },
      {
        id: uuid(),
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama, Romance",
        director: "Robert Zemeckis",
      },
      {
        id: uuid(),
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genre: "Adventure, Drama, Fantasy",
        director: "Peter Jackson",
      },
      {
        id: uuid(),
        title: "Interstellar",
        year: 2014,
        genre: "Adventure, Drama, Sci-Fi",
        director: "Christopher Nolan",
      },
    ];
    this.state = { moviesState: m };
  }

  render() {
    return (
      <div>
        {this.state.moviesState.map((m) => (
          <Movie key={uuid()} {...m}></Movie>
        ))}
      </div>
    );
  }
}

export default Movies;


