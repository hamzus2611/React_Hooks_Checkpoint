import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


function MovieCard({ movie }) {

    return (
        <div>
            <div className="flip-card d-flex justify-content-around" style={{ width: "18rem" }} >
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={movie.posterUrl} width="400" height="600" alt=""/>
                    </div>
                    <div className="flip-card-back ">
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                        <h1 className="d-flix align-content-center"><ReactStars
                        count={5}

                        size={24}
                        value={movie.rate}
                        activeColor="#ffd700"
                    /></h1>
                      <Button variant="primary">Go somewhere</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
