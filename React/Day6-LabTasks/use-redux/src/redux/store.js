// import {createStore} from 'redux';
// import MoviesReducer from './reducers/moviesReducer';

// export const store = createStore(MoviesReducer)

import { createStore } from "redux";
import MoviesReducer from "./reducers/moviesReducer";

const store = createStore(MoviesReducer);

export default store;
