import {moviedata} from './data'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MovieList from './components/MovieList/MovieList';
import Filter from './components/Filter/Filter';
import AddMovie from './components/AddMovie/AddMovie';

function App() {
  const [MovieListe, setMovieListe] = useState(moviedata);
  const [rate, setRate] = useState(0)
  const [Title, setTitle] = useState("")
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const handleAdd = (newMovie) => {
    setMovieListe([...MovieListe,newMovie])
  }
  return (
    <div className="App">
      <Filter 
      hendelchange={handleChange}
      Title={Title}
      ratingChanged={ratingChanged}
      rate={rate}/>
     <MovieList movielist={MovieListe.filter((movie)=>
     movie.title.toUpperCase().includes(Title.toUpperCase())
      && movie.rate>=rate)}/>
     <AddMovie handleAdd={handleAdd}/>
    </div>
    
  );
}

export default App;
