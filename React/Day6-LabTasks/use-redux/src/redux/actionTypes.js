// export const Get_Movies = "Get_Movies";
// export const Delete_Movie = "Delete_Movie";
// export const Set_Modal_Is_Open = "Set_Modal_Is_Open";

export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_FAILURE = "ADD_MOVIE_FAILURE";
export const SET_DELETING_MOVIE_ID = "SET_DELETING_MOVIE_ID";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const DELETE_MOVIE_FAILURE = "DELETE_MOVIE_FAILURE";
export const UPDATE_MOVIE_SUCCESS = "UPDATE_MOVIE_SUCCESS";
export const UPDATE_MOVIE_FAILURE = "UPDATE_MOVIE_FAILURE";
export const SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE";
export const SET_MODAL_OPEN = "SET_MODAL_OPEN";
export const SET_MOVIE_ADDED = "SET_MOVIE_ADDED";
export const SET_LOADING = "SET_LOADING";
export const UPDATE_NEW_MOVIE = "UPDATE_NEW_MOVIE";

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const updateNewMovie = (updatedProperty) => ({
  type: UPDATE_NEW_MOVIE,
  payload: updatedProperty
})

export const addMovieSuccess = (movie) => ({
  type: ADD_MOVIE_SUCCESS,
  payload: movie,
});

export const addMovieFailure = (error) => ({
  type: ADD_MOVIE_FAILURE,
  payload: error,
});

export const setDeletingMovieId = (id) => ({
    type: SET_DELETING_MOVIE_ID,
    payload: id,
  });

export const deleteMovieSuccess = (id) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: id,
});

export const deleteMovieFailure = (error) => ({
  type: DELETE_MOVIE_FAILURE,
  payload: error,
});

export const updateMovieSuccess = (movie) => ({
  type: UPDATE_MOVIE_SUCCESS,
  payload: movie,
});

export const updateMovieFailure = (error) => ({
  type: UPDATE_MOVIE_FAILURE,
  payload: error,
});

export const setSelectedMovie = (movie) => ({
  type: SET_SELECTED_MOVIE,
  payload: movie,
});

export const setModalOpen = (isOpen) => ({
  type: SET_MODAL_OPEN,
  payload: isOpen,
});

export const setMovieAdded = (isAdded) => ({
  type: SET_MOVIE_ADDED,
  payload: isAdded,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});
