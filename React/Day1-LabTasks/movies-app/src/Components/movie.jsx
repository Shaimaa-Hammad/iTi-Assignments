// const Movie = ({ id, title, year, genre, director }) => {
//   // console.log(props)
//   // const {name ,id,age}=props;
//   return (
//     <div
//       style={{ backgroundColor: "violet", width: "70%", margin: "10px auto" }}
//     >
//       <div>ID :{id}</div>
//       <div>Title :{title}</div>
//       <div>Year :{year}</div>
//       <div>Category :{genre}</div>
//       <div>Director :{director}</div>
//     </div>
//   );
// };

// export default Movie;


import React from "react";

const Movie = ({ id, title, year, genre, director }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px auto" }}>
      {/* <img
        src="movie-poster.jpg" // Replace with the actual movie poster image source
        className="card-img-top"
        alt="Movie Poster"
      /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Year: {year}</p>
        <p className="card-text">Genre: {genre}</p>
        <p className="card-text">Director: {director}</p>
        <a href="#" className="btn btn-primary">
          More Details
        </a>
      </div>
    </div>
  );
};

export default Movie;
