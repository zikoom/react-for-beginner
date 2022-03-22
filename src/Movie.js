import PropTypes from 'prop-types';


function Movie({movieList}){
  console.log('movieList in Movie Component: ', movieList)
  return (
    <div className="movieCon">
      <div>~무비 컴포넌트~</div>
      <div>
        {movieList.map((movie) => {
          return (
          <div key={movie.id}>
            
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <h4>{movie.genres.map((genre) => <p key={genre}>{genre}</p>)}</h4>
            <p>{movie.summary}</p>
          </div>
        )})}
      </div>
    </div>

  )
}

Movie.propTypes = {
  movieList: PropTypes.array.isRequired,
}

export default Movie;