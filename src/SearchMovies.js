import React, {useState} from 'react'
import MovieCard from './MovieCard'
import './style.css';

export default function SearchMovies() {


  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault();


    const url = `https://api.themoviedb.org/3/search/movie?api_key=f64baabf97b3679d9f6b056dcde1c050&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url);
      const data = await res.json()
      setMovies(data.results)
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  const movieCards = movies.filter(movie => movie.poster_path).map(movie => <MovieCard key={movie.id} poster={movie.poster_path} title={movie.title} releaseDate={movie.release_date} rating={movie.vote_average} description={movie.overview} />)


  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label 
          className='label' 
          htmlFor='query'>
            Movie Name: 
        </label>
        <input 
          className='input' 
          type='text' 
          name='query' 
          placeholder='Start your search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          className='button' 
          type='submit' >
            Search
        </button>
      </form>
      <div className='card-list'>
        {movieCards}
      </div>
    </>
  );
}


// f64baabf97b3679d9f6b056dcde1c050
// https://api.themoviedb.org/3/movie/550?api_key=f64baabf97b3679d9f6b056dcde1c050
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjRiYWFiZjk3YjM2NzlkOWY2YjA1NmRjZGUxYzA1MCIsInN1YiI6IjYwOWQ2YTUyN2VjZDI4MDAyYWZjZDYyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mTZL52d7my1JuX2nuRDILaihQkWJg86N_lFR_Ud5ZEM