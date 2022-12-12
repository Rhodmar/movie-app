const MovieList = (props) => {
    return <movie>
        <div className="title1">
               <h1 className='col1'>Weekly Top 10</h1>
        </div>
        <div className = "movie-list">
            {props.movies.map((movie,index) => <div><img src={movie.Poster} className = 'row_poster'alt = 'movie'></img> <text className="movie-title">{movie.Title}</text></div>)}
        </div>
        <div className="title2">
               <h1 className='col2'>Watch Again</h1>
        </div>
    </movie>
}

export default  MovieList;