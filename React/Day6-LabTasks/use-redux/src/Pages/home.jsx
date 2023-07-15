import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  deleteMovieSuccess,
  deleteMovieFailure,
  setSelectedMovie,
  setModalOpen,
  setLoading,
  setDeletingMovieId,
} from "../redux/actionTypes";

const MoviesComponent = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const deletingMovieId = useSelector((state) => state.deletingMovieId);

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        dispatch(fetchMoviesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  const handleDeleteMovie = (id) => {
    dispatch(setDeletingMovieId(id));
    dispatch(setModalOpen(true));
  };

  const confirmDeleteMovie = () => {
    axios
      .delete(`http://localhost:3000/movies/${deletingMovieId}`)
      .then(() => {
        dispatch(deleteMovieSuccess(deletingMovieId));
      })
      .catch((error) => {
        dispatch(deleteMovieFailure(error));
      });
  };

  const handleOpenUpdateForm = (id) => {
    const movieToUpdate = movies.find((movie) => movie.id === id);
    dispatch(setSelectedMovie(movieToUpdate));
  };

  const imgPath = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="container">
      <h1 className="mt-5 mb-4 text-warning" style={{ padding: "50px 0 10px" }}>
        Movies
      </h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img
                src={`${imgPath}${movie.poster_path}`?`${imgPath}${movie.poster_path}`:'/images/movie.jpg'}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <div
                  style={{
                    height: 100,
                  }}
                  className="overflow-hidden"
                >
                  <h5 className="card-title">{movie.title}</h5>
                  <p
                    className="card-text"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }}
                  >
                    Overview: {movie.overview}
                  </p>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOpenUpdateForm(movie.id)}
                  >
                    <Link
                      to="/details"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      More...
                    </Link>
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleOpenUpdateForm(movie.id)}
                  >
                    <Link
                      to="/update"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Update
                    </Link>
                  </button>
                  {/* Delete button */}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteMovie(movie.id)}
                  >
                    Delete
                  </button>

                  {/* Modal component */}
                  {modalIsOpen && (
                    <div
                      className={`modal ${
                        deletingMovieId === movie.id ? "show" : ""
                      }`}
                      tabIndex="-1"
                      role="dialog"
                      style={{
                        display:
                          deletingMovieId === movie.id ? "block" : "none",
                      }}
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Confirm Deletion</h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              onClick={() => dispatch(setModalOpen(false))}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>Are you sure you want to delete this movie?</p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                              onClick={() => dispatch(setModalOpen(false))}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={confirmDeleteMovie}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesComponent;
