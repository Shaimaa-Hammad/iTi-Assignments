import React, { Component } from "react";
import Movie from "./movie";
import { v4 as uuid } from "uuid";
import axios from "axios";

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;
console.log(apiUrl);

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      moviesState: [],
    };
  }

  componentDidMount() {
    // this.fetchMovies();
    axios.get(apiUrl)
      .then((response) => this.setState({ moviesState: response.data.results }))
      .catch((error) => console.log("Error fetching movies:", error));
  }

  // fetchMovies() {
  //   axios
  //     .get(apiUrl)
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log("Error fetching movies:", error));
  // }

  render() {
    
    return (
      <div>
        {this.state.moviesState.map((m) => (
          <Movie
            key={uuid()}
            // id={m.id}
            title={m.title}
            overview={m.overview}
            poster={`${imgPath}${m.poster_path}`}
          />
        ))}
      </div>
    );
  }
}

export default Movies;
