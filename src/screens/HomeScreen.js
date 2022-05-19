import React from 'react'
import './HomeScreen.css'

import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import Footer from '../Footer'

import requests from '../Requests'

const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            <Nav />

            <Banner />

            <Row title="Trening Now" fetchUrl={requests.fetchTranding} isLargeRow={true}/>
            <Row title="Popular on Netflix" fetchUrl={requests.fetchNetflixOrginals}/>
            <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

            <Footer />
        </div>
    )
}

export default HomeScreen