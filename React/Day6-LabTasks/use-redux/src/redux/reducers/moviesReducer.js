// import { Delete_Movie, Get_Movies, Set_Modal_Is_Open } from "../actionTypes";

// const initialMoviesState = [];

// const MoviesReducer = (moviesState = initialMoviesState, { type, payload }) => {
//   //   console.log(type, payload);
//   switch (type) {
//     case Get_Movies:
//       return [...payload];

//       case Set_Modal_Is_Open:
//       return moviesState.map((movie) =>
//         movie.id === payload
//           ? { ...movie, modalIsOpen: true, deletingMovieId: payload }
//           : { ...movie }
//       );

//     case Delete_Movie:
//       return moviesState.filter((movie) => movie.id !== payload);

//     default:
//       return moviesState;
//   }
// };
// export default MoviesReducer;

import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  UPDATE_NEW_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILURE,
  SET_SELECTED_MOVIE,
  SET_MODAL_OPEN,
  SET_MOVIE_ADDED,
  // SET_LOADING,
  SET_DELETING_MOVIE_ID,
} from "../actionTypes";

const initialState = {
  movies: [],
  newMovie: {
    title: "",
    overview: "",
    poster_path: "",
  },
  selectedMovie: {},
  modalIsOpen: false,
  deletingMovieId: null,
  isMovieAdded: false,
  isLoading: false,
};

const MoviesReducer = (state = initialState, action) => {
// console.log(action.payload);

  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };

    case FETCH_MOVIES_FAILURE:
      console.log("Error fetching movies:", action.payload);
      return state;

      case UPDATE_NEW_MOVIE:
        return {
          ...state,
          newMovie: {
            ...state.newMovie,
            ...action.payload,
          },
        };

    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.payload],
        newMovie: {
          title: "",
          overview: "",
          poster_path: "",
        },
      };

    case ADD_MOVIE_FAILURE:
      console.log("Error adding movie:", action.payload);
      return state;
      
    case SET_DELETING_MOVIE_ID:
      return {
        ...state,
        deletingMovieId: action.payload,
      };

    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
        modalIsOpen: false,
      };

    case DELETE_MOVIE_FAILURE:
      console.log("Error deleting movie:", action.payload);
      return state;

    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };

    case UPDATE_MOVIE_FAILURE:
      console.log("Error updating movie:", action.payload);
      return state;

    case SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };

    case SET_MODAL_OPEN:
      return {
        ...state,
        modalIsOpen: action.payload,
      };

    case SET_MOVIE_ADDED:
      return {
        ...state,
        isMovieAdded: action.payload,
      };

    // case SET_LOADING:
    //   return {
    //     ...state,
    //     isLoading: action.payload,
    //   };

    default:
      return state;
  }
};

export default MoviesReducer;
