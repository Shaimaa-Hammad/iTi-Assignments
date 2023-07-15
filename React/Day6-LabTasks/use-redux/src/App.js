import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from './Pages/home';
import { Suspense } from "react";
// import AddMovie from "./Pages/addMovie";
// import UpdateMovie from "./Pages/updateMovie";
import MovieDetails from "./Pages/movieDetails";
// import NotFound from "./Pages/notFound";
import { Provider } from 'react-redux';
import store from './redux/store';
import UpdateMovie from "./Pages/updateMovie";
import NotFound from "./Pages/notFound";
import AddMovie from "./Pages/addMovie";

function App() {
  return (
    <Provider store={store}>
    <Suspense fallback={<div>Loading.....</div>}>
      <div className="App">
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/add" element={<AddMovie></AddMovie>}></Route>
              <Route path="/update" element={<UpdateMovie></UpdateMovie>}></Route>
              <Route path="/details" element={<MovieDetails></MovieDetails>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
          </BrowserRouter>
      </div>
    </Suspense>
    </Provider>
  );
}

export default App;
