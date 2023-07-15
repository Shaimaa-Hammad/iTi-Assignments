import React from "react";

const Movie = ({ title, overview, poster }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px auto" }}>
      <img
        src={poster} // Replace with the actual movie poster image source
        className="card-img-top"
        alt="Movie Poster"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Overview: {overview}</p>
        <a href="#" className="btn btn-primary">
          More Details
        </a>
      </div>
    </div>
  );
};

export default Movie;
