import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie, updateMovieFailure, updateMovieSuccess } from "../redux/actionTypes";
import { useNavigate } from "react-router-dom";

const UpdateMovie = () => {
const selectedMovie = useSelector((state) => state.selectedMovie);
const dispatch = useDispatch();
const navigate = useNavigate();

    const handleUpdateMovie = () => {
            axios
              .put(`http://localhost:3000/movies/${selectedMovie.id}`, selectedMovie)
              .then(() => {
                dispatch(updateMovieSuccess(selectedMovie));
              })
              .catch((error) => {
                dispatch(updateMovieFailure(error));
              });
          };

          const handleSubmit = () => {
            handleUpdateMovie();
            navigate("/");
          };

          return (
            <div className="mt-4 container pb-4" style={{paddingTop:"70px"}}>
              <h2 className="text-white">Update Movie</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title" className="text-white">
                    Title:
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="form-control"
                    value={selectedMovie.title}
                    onChange={(e) =>
                      dispatch(setSelectedMovie({
                        ...selectedMovie,
                        title: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="form-group my-4">
                  <label htmlFor="overview" className="text-white">
                    Overview:
                  </label>
                  <input
                    id="overview"
                    type="text"
                    className="form-control"
                    value={selectedMovie.overview}
                    onChange={(e) =>
                      dispatch(setSelectedMovie({
                        ...selectedMovie,
                        overview: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="posterPath" className="text-white">
                    Poster Path:
                  </label>
                  <input
                    id="posterPath"
                    type="text"
                    className="form-control"
                    value={selectedMovie.poster_path}
                    onChange={(e) =>
                      dispatch(setSelectedMovie({
                        ...selectedMovie,
                        poster_path: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="mt-3">
                <button type="submit" className="btn btn-success me-5">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-2"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                </div>
              </form>
            </div>
          );
};

export default UpdateMovie;