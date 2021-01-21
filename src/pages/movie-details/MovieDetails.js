import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {moviesService} from "../../services";
import {imgBuilder} from "../../components/movie-items";
import styles from './MovieDetails.module.css';
import {Loading} from "../../components/loading";
import {toast} from "react-toastify";


// adult: false
// backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
// belongs_to_collection: {id: 468552, name: "Wonder Woman Collection", poster_path: "/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg", backdrop_path: "/n9KlvCOBFDmSyw3BgNrkUkxMFva.jpg"}
// budget: 200000000
// genres: (3) [{…}, {…}, {…}]
// homepage: "https://www.warnerbros.com/movies/wonder-woman-1984"
// id: 464052
// imdb_id: "tt7126948"
// original_language: "en"
// original_title: "Wonder Woman 1984"
// overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
// popularity: 4160.738
// poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
// production_companies: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// production_countries: [{…}]
// release_date: "2020-12-16"
// revenue: 131400000
// runtime: 151
// spoken_languages: [{…}]
// status: "Released"
// tagline: "A new era of wonder begins."
// title: "Wonder Woman 1984"
// video: false
// vote_average: 7.1
// vote_count: 2798


export const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(null);



    const {id} = useParams();
    const getMovieDetails = async () => {
        try {
            setIsLoading(true)
            const data = await moviesService.getMoviesById(id);
            setMovieDetails(data)
            toast.success('hello')
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getMovieDetails()
    }, [])

    if (isLoading || !movieDetails || isLoading === null) {
        return <Loading/>
    }


    return (
        <div>
            <div>
                <img src={imgBuilder(movieDetails.poster_path, 400)} alt={`${movieDetails.title} poster`}/>
            </div>

            <h1>{movieDetails.title}</h1>
            <>
                {movieDetails.genres.map((el) => (
                    <span key={el.id}>{el.name}{`  `}</span>))}
            </>
            <p>{movieDetails.overview}</p>
            <p> Rate:{movieDetails.vote_average} (Total votes:{movieDetails.vote_count})</p>

                <a href={movieDetails.homepage} className={styles.btnWatch}>
                    Watch film</a>
        </div>
    );
}

