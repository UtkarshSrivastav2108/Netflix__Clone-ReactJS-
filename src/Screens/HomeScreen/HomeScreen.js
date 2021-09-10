import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Row from '../../components/Row/Row'
import requests from '../../Request/Request'



function HomeScreen() {

    return (
        <div className="homeScreen">
            <Navbar />
            <Banner />
            {/* Row's */}
            <Row title="NETFLIX ORIGINALS " fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchURL={requests.fetchDocumentries} />
        </div>
    )
}
export default HomeScreen
