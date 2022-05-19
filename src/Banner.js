import React, { useEffect, useState } from 'react'

import './Banner.css'

import Top10 from "./top10.png"
import Play from "./play.png"
import axios from './axios'
import requests from './Requests'

const Banner = () => {
    const [movie, setMovie] = useState([])
    const [topTranding] = useState(Math.floor(Math.random() * 9))

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str 
    }

    useEffect( () => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchTranding)
            const randomMovie = request.data.results[topTranding]
            const movieDetail = await axios.get(requests.getMovie(randomMovie.id))
            setMovie(movieDetail.data)

            return request
        }
            fetchData()
    }, [topTranding])

    return (
        
        <div 
            className="banner" 
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
            }}
        >
            <div className="banner__contents">
                <div className="banner__title">
                    <img alt="title" className="banner__titleImg" src={`https://image.tmdb.org/t/p/original/${movie?.images?.logos?.[0]?.file_path}`} />
                </div>
                <h1 className="banner__moveToday"><img alt="Top 10 icon" src={Top10} className="banner__top10"/>#{topTranding+1} in Movie Today</h1>
                <p className="banner__description">{truncate(movie?.overview, 150)}</p>
                <div className="banner__buttons">
                    <button className="banner__button"><img alt="Play icon" src={Play} className="banner__play"/>Play</button>
                    <button className="banner__button banner__button--more">More Info</button>
                </div>
            </div>
            <div className="banner--fadeBottom" />

        </div>
    )
}

export default Banner