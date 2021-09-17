import React from "react"

export default function MovieListItem() {
    return (
        <div className="movie">
            <div className="movie-item">
                <img src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="poster movie" />
            </div>
            <h3 className="movie-item-title">Iron Man</h3>
            <div className="movie-item-sub-title">2021</div>
        </div>
    )
}
