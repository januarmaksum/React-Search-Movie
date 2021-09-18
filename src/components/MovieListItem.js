import React from "react"

const MovieListItem = props => {
    const { Title, Year, Poster, imdbID } = props.movie
    return (
        <div className="movie" onClick={() => { props.onMovieSelect(imdbID); props.open(true) }}>
            <div className="movie-item">
                <img src={Poster} alt={Title} />
            </div>
            <h3 className="movie-item-title">{Title}</h3>
            <div className="movie-item-sub-title">{Year}</div>
        </div>
    )
}

export default MovieListItem