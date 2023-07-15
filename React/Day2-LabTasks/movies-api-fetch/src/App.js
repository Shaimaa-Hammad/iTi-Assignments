import logo from './logo.svg';
import './App.css';
import Movies from './Components/movies';
import 'bootstrap/dist/css/bootstrap.css';
import Gallery from './Components/gallery';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Movies></Movies>
      <Gallery></Gallery>    
    </Fragment>
    
  );
}

export default App;
