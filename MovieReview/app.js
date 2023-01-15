// import logo from "./logo.svg";
import "./App.css";

import propTypes, { element } from "prop-types";
import Movie from "./files/Movie";
import Header from "./files/header";
import Movies from "./Movies";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        {Movies.map((element) => {

          return (
           <Movie title={element.Title}
           year={element.Year}
          img={element.Poster}
          />)
              }  
          )}

      </div>
    </div>
  );
}

export default App;
