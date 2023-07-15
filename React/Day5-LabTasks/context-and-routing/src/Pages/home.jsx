// import { useContext } from "react";
// import { moviesContext } from "../Contexts/moviesContext";
// import { Link } from "react-router-dom";
// import ReactModal from "react-modal";

// ReactModal.setAppElement('#root');

// const Home = () => {
//   const {
//     movies,
//     imgPath,
//     handleDeleteMovie,
//     handleOpenUpdateForm,
//     modalIsOpen,
//     setModalIsOpen,
//     confirmDeleteMovie,
//   } = useContext(moviesContext);

//   return (
//     <div className="container">
//       <h1 className="mt-5 mb-4 text-warning" style={{padding:"50px 0 10px"}}>Movies</h1>
//       <div className="row">
//         {movies.map((movie) => (
//           <div key={movie.id} className="col-lg-4 col-md-6 col-sm-12 mb-5">
//             <div className="card mx-auto" style={{ width: "18rem" }}>
//               <img
//                 src={`${imgPath}${movie.poster_path}`}
//                 className="card-img-top"
//                 alt={movie.title}
//               />
//               <div className="card-body">
//                 <div style={{ height: 150 }} className="overflow-auto">
//                   <h5 className="card-title">{movie.title}</h5>
//                   <p className="card-text">Overview: {movie.overview}</p>
//                 </div>

//                 <div className="d-flex justify-content-between mt-3">
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleOpenUpdateForm(movie.id)}
//                   >
//                     <Link
//                       to="/details"
//                       style={{ textDecoration: "none", color: "inherit" }}
//                     >
//                       Details
//                     </Link>
//                   </button>
//                   <button
//                     className="btn btn-warning"
//                     onClick={() => handleOpenUpdateForm(movie.id)}
//                   >
//                     <Link
//                       to="/update"
//                       style={{ textDecoration: "none", color: "inherit" }}
//                     >
//                       Update
//                     </Link>
//                   </button>
//                   {/* Delete button */}
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => handleDeleteMovie(movie.id)}
//                   >
//                     Delete
//                   </button>

//                   {/* Modal component */}z
//                   <ReactModal
//                     isOpen={modalIsOpen}
//                     onRequestClose={() => setModalIsOpen(false)}
//                     contentLabel="Confirmation Modal"
//                   >
//                     <div className="modal-dialog border border-danger p-5" style={{width: "50%"}}>
//                       <div className="modal-content">
//                         <div className="modal-header mt-5">
//                           <h5 className="modal-title">Confirm Deletion</h5>
//                           <button
//                             type="button"
//                             className="btn-close"
//                             onClick={() => setModalIsOpen(false)}
//                             aria-label="Close"
//                           ></button>
//                         </div>
//                         <div className="modal-body my-3">
//                           <p>Are you sure you want to delete this movie?</p>
//                         </div>
//                         <div className="modal-footer mt-3">
//                           <button
//                             type="button"
//                             className="btn btn-secondary me-5"
//                             onClick={() => setModalIsOpen(false)}
//                           >
//                             Cancel
//                           </button>
//                           <button
//                             type="button"
//                             className="btn btn-danger"
//                             onClick={confirmDeleteMovie}
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </ReactModal>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useContext } from "react";
import { moviesContext } from "../Contexts/moviesContext";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    movies,
    imgPath,
    handleDeleteMovie,
    handleOpenUpdateForm,
    setModalIsOpen,
    modalIsOpen,
    deletingMovieId,
    confirmDeleteMovie,
  } = useContext(moviesContext);

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
                src={`${imgPath}${movie.poster_path}`}
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
                              onClick={() => setModalIsOpen(false)}
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
                              onClick={() => setModalIsOpen(false)}
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

export default Home;
