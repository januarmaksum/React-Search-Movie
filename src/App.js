import React, { useState } from "react"
import Axios from "axios"
import MovieListItem from "./components/MovieListItem"
import MovieDetailModal from "./components/MovieDetailModal"
export const API_KEY = "faf7e5bb"

export default function App() {
    const [searchQuery, updateSearchQuery] = useState("")
    const [movieList, updateMovieList] = useState([])
    const [timeoutId, updateTimeoutId] = useState()
    const [selectedMovie, onMovieSelect] = useState()
    const [isOpen, setIsOpen] = useState(false)

    const fetchData = async (value) => {
        const response = await Axios.get(
            `https://www.omdbapi.com/?s=${value}&apikey=${API_KEY}`,
        )
        updateMovieList(response.data.Search)
    }
    const onTextChange = event => {
        onMovieSelect("")
        clearTimeout(timeoutId)
        updateSearchQuery(event.target.value)
        const timeout = setTimeout(() => fetchData(event.target.value), 500)
        updateTimeoutId(timeout)
    }

    return (
        <>
            <header className="nav-bar">
                <div className="nav-bar-container">
                    <div className="nav-logo">Movie App</div>
                    <div className="nav-search">
                        <img src='https://raw.githubusercontent.com/januarmaksum/januarmaksum.github.io/master/search_icon.svg' alt="icon search" />
                        <input
                            className="nav-search-input"
                            placeholder="Quick search"
                            value={searchQuery}
                            onChange={onTextChange}
                        />
                    </div>
                </div>
            </header>

            <main className="main-content">
                {movieList?.length ? (
                    movieList.map((movie, index) => (
                        <MovieListItem
                            key={index}
                            movie={movie}
                            onMovieSelect={onMovieSelect}
                            open={setIsOpen}
                        />
                    ))
                ) : (
                    <img className="movie-logo" src='https://raw.githubusercontent.com/januarmaksum/januarmaksum.github.io/master/movie_icon.png' alt="movie logo" />
                )}

            </main>

            {selectedMovie && <MovieDetailModal selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} open={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    )
}
