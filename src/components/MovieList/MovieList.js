import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

function MovieList({ movielist }) {
    return (
        <div className="container">
            <div className="row ml-10 d-flex justify-content-between">
                {movielist.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default MovieList

