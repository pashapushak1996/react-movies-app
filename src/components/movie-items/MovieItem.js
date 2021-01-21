import React from "react";
import styles from './MovieItem.module.css';

export const imgBuilder = (posterPath, size = 200) => `https://image.tmdb.org/t/p/w${size}${posterPath}`

export const MovieItem = (props) => {

    // adult: false
    // backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
    // genre_ids: (3) [14, 28, 12]
    // id: 464052
    // original_language: "en"
    // original_title: "Wonder Woman 1984"
    // overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
    // popularity: 4160.738
    // poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
    // release_date: "2020-12-16"
    // title: "Wonder Woman 1984"
    // video: false
    // vote_average: 7.1
    // vote_count: 2781
    const {title, poster_path, vote_average, vote_count, overview, moviesGenresList, release_date} = props;

    return (
        <div className={styles.movieItem}>
            <div>
                <img src={imgBuilder(poster_path)} alt={title}/>
            </div>
            <div>
                <h2>{title}</h2>
                <h3>{moviesGenresList.map(({name, id}, i) => (
                    <span key={id}>{name} {i < moviesGenresList.length - 1 && `-`}</span>
                ))}</h3>
                <p>{overview}</p>
                <span>Rate:{vote_average} Total votes:{vote_count}</span>
                <span>Release date:{release_date}</span>
            </div>
        </div>
    );
}

