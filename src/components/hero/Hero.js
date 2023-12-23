import Carousel from "react-material-ui-carousel"
import { Paper } from "@mui/material"
import "../hero/Hero.css"
import { Button } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
const Hero = ({ movies }) => {
    const navigate = useNavigate()
    function reviews(movieId) {

        navigate(`/reviews/${movieId}`)
    }
    return (

        <div className="movie-carousel-container">
            <Carousel>
                {movies?.map((movie) => {

                    return (<Paper>
                        <div className="movie-card-container">
                            <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />

                                    </div>
                                    <div className="movie-title"><h4>{movie.title}</h4></div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-buttton-icon-container"><FontAwesomeIcon className="play-button-icon" icon={faCirclePlay} />

                                            </div>
                                        </Link>
                                        <div className="movie-review-button-container"><Button variant='info' onClick={() => reviews(movie.imdbId)}  >Reviews</Button></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Paper>)
                })}
            </Carousel>

        </div>
    )
}
export default Hero;