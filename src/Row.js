import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './Row.css'

import axios from './axios'

const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const [movies, setMovies] = useState([])
    const [position, setPosition] = useState(0);
    const [showArrow, setShowArrow] = useState(false)

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }

        fetchData();
    }, [fetchUrl])

    return (
        <div 
            className={`row ${isLargeRow && "row__Large"}`}
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
        >
            <h2>{title}</h2>
            {position > 0 && <div className="row__arrow row__left" style={{zIndex: 10}} onClick={() => {setPosition(position-1)}}>{showArrow && <FontAwesomeIcon icon={faChevronLeft} size="2x"/>}</div>}
            {position < (movies.length / 6)-1 &&<div className="row__arrow row__right" style={{zIndex: 10}} onClick={() => {setPosition(position+1)}}>{showArrow && <FontAwesomeIcon icon={faChevronRight} size="2x"/>}</div>}
            <div className="row__posters">
                <div className='row__allPosters' style={{transform: `translateX(-${position * 100}%)`}}>
                    {movies.map( (movie, index) => (
                        <div className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} >
                        {isLargeRow && <div className="row__topNumber">{index+1}</div>}
                            <img 
                                className="row__posterImg"
                                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Row