import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import './index.css'
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=8c564601'

const App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState ('');
  const searchMovies = async (title) => {
  const response = await fetch (`${API_URL}&s=${title}`);
  const data = await response.json();
  
    setMovies(data.Search);
  }

  useEffect(() =>{
    searchMovies('iron man');
  }, []);

  return(
    <div className="app bg-slate-600">
    <div className='main max-w-7xl mx-auto py-8'>
      <h1 className="text-5xl text-white text-center
      mb-10">Movie List</h1>

      <div className='search flex justify-between items-center w-full bg-black rounded-full py-3 px-4 shadow-md mb-10'>
        <input
          className="bg-transparent w-full text-white focus-visible:outline-none"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />

        <img
          src={SearchIcon}
          alt="search"
          width="20px"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      
      {movies?.length > 0
        ? (
          <div className='container grid grid-cols-4 gap-5'>
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies Found</h2>
          </div>
        )
      }

      
    </div>
    </div>
    
  )
}

export default App;