import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedMovie } from "../redux/actionTypes";

const MovieDetails = () => {
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const dispatch = useDispatch();

    dispatch(setSelectedMovie(selectedMovie));

    return (
        <div className="container text-white pb-3" style={{paddingTop: "80px"}}>
          <h5 className="card-title my-3">{selectedMovie.title}</h5>
          <p className="card-text">{selectedMovie.overview}</p>
          <p className="card-text">Release Date: {selectedMovie.release_date}</p>
          <button className="btn btn-primary">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Go back
            </Link>
          </button>
        </div>
      );
};

export default MovieDetails;