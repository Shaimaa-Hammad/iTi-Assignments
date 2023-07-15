// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

// const WatchingLocalApi = () => {
//   const [movies, setMovies] = useState([]);
//   const [newMovie, setNewMovie] = useState({
//     title: '',
//     overview: '',
//     poster_path: ''
//   });
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:3000/movies')
//       .then(response => {const moviesWithUUID = response.data.map(movie => ({ ...movie, uuid: uuidv4() }));
//       setMovies(moviesWithUUID);
//     })
//       .catch(error => {
//         console.log('Error fetching movies:', error);
//       });
//   }, []);

//   const handleAddMovie = () => {
//     const ID = uuidv4();
//     const movieToAdd = { ...newMovie, uuid: ID };
//     setMovies(prevMovies => [...prevMovies, movieToAdd]);
//     setNewMovie({ title: '', overview: '', poster_path: '' });
//   };

//   const handleDeleteMovie = (uuid) => {
//     setMovies(prevMovies => prevMovies.filter(movie => movie.uuid !== uuid));
//   };

//   const handleOpenUpdateForm = (uuid) => {
//     const movieToUpdate = movies.find(movie => movie.uuid === uuid);
//     setSelectedMovie(movieToUpdate);
//   };

//   const handleUpdateMovie = (e) => {
//     e.preventDefault();

//     // Get the updated values from the form
//     const updatedTitle = e.target.title.value;
//     const updatedOverview = e.target.overview.value;
//     const updatedPosterPath = e.target.posterPath.value;

//     // Update the selected movie object with the new values
//     const updatedMovie = { ...selectedMovie, title: updatedTitle, overview: updatedOverview, poster_path: updatedPosterPath };

//     // Update the movies array with the updated movie
//     setMovies(prevMovies =>
//       prevMovies.map(movie => (movie.uuid === selectedMovie.uuid ? updatedMovie : movie))
//     );

//     // Clear the selectedMovie state
//     setSelectedMovie(null);
//   };

//   const handleCloseUpdateForm = () => {
//     setSelectedMovie(null);
//   };

//   const imgPath = "https://image.tmdb.org/t/p/w500/";

//   return (
//     <div className="container">
//       <h1 className="mt-4 mb-4 text-white">Movies</h1>
//       <div className="row">
//         {movies.map(movie => (
//           <div key={movie.uuid} className="col-md-4">
//             <div className="card" style={{ width: '18rem' }}>
//               <img src={`${imgPath}${movie.poster_path}`} className="card-img-top" alt={movie.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{movie.title}</h5>
//                 <p className="card-text">Overview: {movie.overview}</p>
//                 <div className="d-flex justify-content-between">
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => handleDeleteMovie(movie.uuid)}
//                   >
//                     Delete
//                   </button>
//                   <button
//                   className="btn btn-primary"
//                   onClick={() => handleOpenUpdateForm(movie.uuid)}
//                 >
//                   Update
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//     {selectedMovie && (
//       <div className="mt-4">
//         <h2 className='text-white'>Update Movie</h2>
//         <form onSubmit={handleUpdateMovie}>
//           <div className="form-group">
//             <label htmlFor="title" className='text-white'>Title:</label>
//             <input
//               id="title"
//               type="text"
//               className="form-control"
//               defaultValue={selectedMovie.title}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="overview" className='text-white'>Overview:</label>
//             <input
//               id="overview"
//               type="text"
//               className="form-control"
//               defaultValue={selectedMovie.overview}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="posterPath" className='text-white'>Poster Path:</label>
//             <input
//               id="posterPath"
//               type="text"
//               className="form-control"
//               defaultValue={selectedMovie.poster_path}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-success">Update</button>
//           <button type="button" className="btn btn-secondary ml-2" onClick={handleCloseUpdateForm}>Cancel</button>
//         </form>
//       </div>
//     )}

//       <div className="mt-4">
//         <h2 className='text-white'>Add New Movie</h2>
//         <div className="form-group">
//           <label htmlFor="title" className='text-white'>Title:</label>
//           <input
//             id="title"
//             type="text"
//             className="form-control"
//             value={newMovie.title}
//             onChange={e => setNewMovie({ ...newMovie, title: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="overview" className='text-white'>Overview:</label>
//           <input
//             id="overview"
//             type="text"
//             className="form-control"
//             value={newMovie.overview}
//             onChange={e => setNewMovie({ ...newMovie, overview: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="posterPath" className='text-white'>Poster Path:</label>
//           <input
//             id="posterPath"
//             type="text"
//             className="form-control"
//             value={newMovie.poster_path}
//             onChange={e => setNewMovie({ ...newMovie, poster_path: e.target.value })}
//           />
//         </div>
//         <button className="btn btn-success" onClick={handleAddMovie}>
//           Add Movie
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WatchingLocalApi;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const WatchingLocalApi = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    overview: "",
    poster_path: "",
  });
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("Error fetching movies:", error);
      });
  }, []);

  const handleAddMovie = (e) => {
    e.preventDefault();
    const movieToAdd = { ...newMovie, id: uuidv4() };
    axios
      .post("http://localhost:3000/movies", movieToAdd)
      .then(() => {
        setMovies((prevMovies) => [...prevMovies, movieToAdd]);
        setNewMovie({ title: "", overview: "", poster_path: "" });
      })
      .catch((error) => {
        console.log("Error adding movie:", error);
      });
  };

  const handleDeleteMovie = (id) => {
    axios
      .delete(`http://localhost:3000/movies/${id}`)
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== id)
        );
      })
      .catch((error) => {
        console.log("Error deleting movie:", error);
      });
  };

  const handleOpenUpdateForm = (id) => {
    const movieToUpdate = movies.find((movie) => movie.id === id);
    setSelectedMovie(movieToUpdate);
  };

  const handleUpdateMovie = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/movies/${selectedMovie.id}`, selectedMovie)
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.map((movie) =>
            movie.id === selectedMovie.id ? selectedMovie : movie
          )
        );
        setSelectedMovie(null);
      })
      .catch((error) => {
        console.log("Error updating movie:", error);
      });
  };

  const handleCloseUpdateForm = () => {
    setSelectedMovie(null);
  };

  const imgPath = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="container">
      <h1 className="pt-4 mb-4 text-white">Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={`${imgPath}${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
              <div style={{height: 150}} className="overflow-auto">
                <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">Overview: {movie.overview}</p>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteMovie(movie.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOpenUpdateForm(movie.id)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="mt-4">
          <h2 className="text-white">Update Movie</h2>
          <form onSubmit={handleUpdateMovie}>
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
            <div className="form-group">
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
            <button type="submit" className="btn btn-success">
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary ml-2"
              onClick={handleCloseUpdateForm}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <div className="mt-4">
        <h2 className="text-white">Add New Movie</h2>
        <form onSubmit={handleAddMovie}>
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
                setNewMovie({ ...newMovie, title: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="overview" className="text-white">
              Overview:
            </label>
            <input
              id="overview"
              type="text"
              className="form-control"
              value={newMovie.overview}
              onChange={(e) =>
                setNewMovie({ ...newMovie, overview: e.target.value })
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
                setNewMovie({ ...newMovie, poster_path: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success" type="submit">
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default WatchingLocalApi;
