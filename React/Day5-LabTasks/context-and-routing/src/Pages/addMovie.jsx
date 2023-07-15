// import { useContext } from "react";
// import { moviesContext } from "../Contexts/moviesContext";
// import { useNavigate } from "react-router-dom";

// const AddMovie = () => {
//   const { newMovie, setNewMovie, handleAddMovie, setIsMovieAdded, isMovieAdded, setIsLoading, isLoading } = useContext(moviesContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     setIsLoading(true);
//     await handleAddMovie();
//     setIsMovieAdded(true);
//     setIsLoading(false);
  
//     setTimeout(() => {
//       navigate("/");
//       setIsMovieAdded(false);
//     }, 2000);
//   };
  
//   const handleCancel = () => {
//     navigate("/");
//   };

//   return (
//     <div className="container mt-5" style={{paddingTop:"30px"}}>
//       <div className="mt-4">
//         <h2 className="text-white">Add New Movie</h2>
//         {isMovieAdded && (
//           <div className="alert alert-success" role="alert">
//             Movie added successfully!
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="title" className="text-white">
//               Title:
//             </label>
//             <input
//               id="title"
//               type="text"
//               className="form-control"
//               value={newMovie.title}
//               onChange={(e) =>
//                 setNewMovie({ ...newMovie, title: e.target.value })
//               }
//             />
//           </div>
//           <div className="form-group my-3">
//             <label htmlFor="overview" className="text-white">
//               Overview:
//             </label>
//             <input
//               id="overview"
//               type="text"
//               className="form-control"
//               value={newMovie.overview}
//               onChange={(e) =>
//                 setNewMovie({ ...newMovie, overview: e.target.value })
//               }
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="posterPath" className="text-white">
//               Poster Path:
//             </label>
//             <input
//               id="posterPath"
//               type="text"
//               className="form-control"
//               value={newMovie.poster_path}
//               onChange={(e) =>
//                 setNewMovie({ ...newMovie, poster_path: e.target.value })
//               }
//             />
//           </div>
//           <div className="py-3">
//             <button className="btn btn-secondary me-5" type="button" onClick={handleCancel}>
//               Cancel
//             </button>
//             <button className="btn btn-success" type="submit" disabled={isLoading}>
//               {isLoading ? "Adding Movie..." : "Add Movie"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMovie;


import { useContext, useRef } from "react";
import { moviesContext } from "../Contexts/moviesContext";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const {
    newMovie,
    setNewMovie,
    handleAddMovie,
    setIsMovieAdded,
    isMovieAdded,
    setIsLoading,
    isLoading,
  } = useContext(moviesContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await handleAddMovie();
    setIsMovieAdded(true);
    setIsLoading(false);

    setTimeout(() => {
      navigate("/");
      setIsMovieAdded(false);
    }, 2000);
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setNewMovie({ ...newMovie, poster_path: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageError = () => {
    setNewMovie({ ...newMovie, poster_path: "images/movie.jpg" });
  };

  return (
    <div className="container mt-5" style={{ paddingTop: "30px" }}>
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
                setNewMovie({ ...newMovie, title: e.target.value })
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
                setNewMovie({ ...newMovie, overview: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="posterPath" className="text-white">
              Poster Path:
            </label>
            <div className="input-group">
              <input
                id="posterPath"
                type="text"
                className="form-control"
                value={newMovie.poster_path}
                readOnly
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => fileInputRef.current.click()}
              >
                Browse
              </button>
              <input
                type="file"
                id="fileInput"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="py-3">
            <button
              className="btn btn-secondary me-5"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button className="btn btn-success" type="submit" disabled={isLoading}>
              {isLoading ? "Adding Movie..." : "Add Movie"}
            </button>
          </div>
          {newMovie.poster_path && (
            <img
              src={newMovie.poster_path}
              alt="Poster"
              onError={handleImageError}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
