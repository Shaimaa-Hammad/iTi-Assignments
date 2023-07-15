import { createContext } from "react";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

export const moviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const [newMovie, setNewMovie] = useState({
    title: "",
    overview: "",
    poster_path: "",
  });
  const [selectedMovie, setSelectedMovie] = useState({});

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deletingMovieId, setDeletingMovieId] = useState(null);

  const [isMovieAdded, setIsMovieAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("Error fetching movies:", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddMovie = () => {
    const movieToAdd = { ...newMovie, id: uuid() };
    axios
      .post("http://localhost:3000/movies", movieToAdd)
      .then(() => {
        setMovies((prevMovies) => [...prevMovies, movieToAdd]);
        setNewMovie({ title: "", overview: "", poster_path: "" });
      })
      .catch((error) => {
        console.log("Error adding movie:", error);
      });
    // navigate("/");
  };

  // Function to handle delete movie
  const handleDeleteMovie = (id) => {
    setDeletingMovieId(id);
    setModalIsOpen(true); // Open the modal to confirm deletion
  };

  const confirmDeleteMovie = () => {
    axios
      .delete(`http://localhost:3000/movies/${deletingMovieId}`)
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== deletingMovieId)
        );
        setModalIsOpen(false); // Close the modal after successful deletion
      })
      .catch((error) => {
        console.log("Error deleting movie:", error);
      });
  };

  const handleOpenUpdateForm = (id) => {
    const movieToUpdate = movies.find((movie) => movie.id === id);
    setSelectedMovie(movieToUpdate);
  };

  const handleUpdateMovie = () => {
    axios
      .put(`http://localhost:3000/movies/${selectedMovie.id}`, selectedMovie)
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.map((movie) =>
            movie.id === selectedMovie.id ? selectedMovie : movie
          )
        );
        // setSelectedMovie(null);
      })
      .catch((error) => {
        console.log("Error updating movie:", error);
      });
  };

  // const handleCloseUpdateForm = () => {
  //   setSelectedMovie(null);
  // };

  const imgPath = "https://image.tmdb.org/t/p/w500/";

  return (
    <moviesContext.Provider
      value={{
        movies,
        newMovie,
        setNewMovie,
        selectedMovie,
        setSelectedMovie,
        imgPath,
        handleAddMovie,
        handleDeleteMovie,
        confirmDeleteMovie,
        handleUpdateMovie,
        handleOpenUpdateForm,
        modalIsOpen,
        setModalIsOpen,
        setIsMovieAdded,
        isMovieAdded,
        isLoading,
        setIsLoading,
        deletingMovieId,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesContextProvider;
