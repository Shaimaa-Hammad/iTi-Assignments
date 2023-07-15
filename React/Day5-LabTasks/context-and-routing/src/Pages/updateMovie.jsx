import { useContext } from "react";
import { moviesContext } from "../Contexts/moviesContext";
import { useNavigate } from "react-router-dom";

const UpdateMovie = () => {
  const {
    handleUpdateMovie,
    selectedMovie,
    setSelectedMovie,
  } = useContext(moviesContext);

  const navigate = useNavigate();
  
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
              setSelectedMovie({
                ...selectedMovie,
                title: e.target.value,
              })
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
              setSelectedMovie({
                ...selectedMovie,
                overview: e.target.value,
              })
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
              setSelectedMovie({
                ...selectedMovie,
                poster_path: e.target.value,
              })
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
