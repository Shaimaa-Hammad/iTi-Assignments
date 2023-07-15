import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addMovieFailure, addMovieSuccess, setLoading, setMovieAdded, updateNewMovie } from "../redux/actionTypes";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const newMovie = useSelector((state) => state.newMovie);
  const isMovieAdded = useSelector((state) => state.isMovieAdded);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddMovie = () => {
    const movieToAdd = { ...newMovie, id: uuid() };
    axios
      .post("http://localhost:3000/movies", movieToAdd)
      .then(() => {
        dispatch(addMovieSuccess(movieToAdd));
      })
      .catch((error) => {
        dispatch(addMovieFailure(error));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(setLoading(true));
    handleAddMovie();
    dispatch(setMovieAdded(true));
    // dispatch(setLoading(false));

    setTimeout(() => {
      navigate("/");
      dispatch(setMovieAdded(false));
    }, 2000);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
        <div className="container mt-5" style={{paddingTop:"30px"}}>
          <div className="mt-4">
            <h2 className="text-white">Add New Movie</h2>

            {isMovieAdded && (
              <div className="alert alert-success" role="alert">
                Movie added successfully!
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title" className="text-white">
                  Title:
                </label>
                <input
                  id="title"
                  type="text"
                  className="form-control"
                  value={newMovie.title}
                  onChange={(e) =>
                    dispatch(updateNewMovie({ ...newMovie, title: e.target.value }))
                    // console.log(e.target.value)
                  }
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="overview" className="text-white">
                  Overview:
                </label>
                <input
                  id="overview"
                  type="text"
                  className="form-control"
                  value={newMovie.overview}
                  onChange={(e) =>
                    dispatch(updateNewMovie({ ...newMovie, overview: e.target.value }))
                  }
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
                  value={newMovie.poster_path}
                  onChange={(e) =>
                    dispatch(updateNewMovie({ ...newMovie, poster_path: e.target.value }))
                  }
                />
              </div>
              <div className="py-3">
                <button className="btn btn-secondary me-5" type="button" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn btn-success" type="submit"
                // disabled={isLoading}
                >
                  {/* {isLoading ? "Adding Movie..." : "Add Movie"} */}
                  Add Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      );
                }
export default AddMovie;
