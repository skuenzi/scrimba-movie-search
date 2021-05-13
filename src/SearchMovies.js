import './style.css';

function SearchMovies() {
const searchMovies = async(e) => {
  e.preventDefault();
  console.log('submitting')

  const query = 'Jurassic Park'

  const url = `https://api.themoviedb.org/3/movie/550?api_key=f64baabf97b3679d9f6b056dcde1c050&language=en-US&${query}&page=1&include_adult=false`

  try {
  const res = await fetch(url);
  const data = await res.json()
  console.log(data)
  }catch(err){
    console.log(err)
  }
}

  return (
    <form className='form' onSubmit={searchMovies}>
      <label className='label' htmlFor='query'>Movie Name: </label>
      <input className='input' type='text' name='query' placeholder='Start your search'/>
      <button className='button' type='submit' >Search</button>

    </form>
  );
}

export default SearchMovies;


// f64baabf97b3679d9f6b056dcde1c050
// https://api.themoviedb.org/3/movie/550?api_key=f64baabf97b3679d9f6b056dcde1c050
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjRiYWFiZjk3YjM2NzlkOWY2YjA1NmRjZGUxYzA1MCIsInN1YiI6IjYwOWQ2YTUyN2VjZDI4MDAyYWZjZDYyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mTZL52d7my1JuX2nuRDILaihQkWJg86N_lFR_Ud5ZEM