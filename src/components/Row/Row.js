import React, { useState, useEffect } from 'react'
import "./Row.css"
import axios from 'axios';
import instance from '../../axios/axios';
import MovieModal from "../MovieModal/MovieModal"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// --------------------------------------------------

function Row({ title, fetchURL, isLargeRow = false, id }) {

    const [movies, setMovies] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [movieSelected, setMovieSelection] = useState({});

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);


    const handleClick = (movie) => {
        setModalVisibility(true);
        setMovieSelection(movie);

    }
    return (
        <div className="row">
            <h2 style={{ padding: "10px 0" }}>{title}</h2>

            {/* movies  row  banner */}

            <div className="row__posters">

                {movies.map((movie) =>

                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        < img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} loading="lazy" alt={movie.name} />
                    )
                )}
            </div>


            <div className="slider__arrow-right" ><span className="arrow" onClick={() => { document.getElementById(id).scrollLeft += (window.innerWidth - 80) }}></span></div>
            {modalVisibility && <MovieModal {...movieSelected} setModalVisibility={setModalVisibility} />}
        </div >

    )
}

export default Row
