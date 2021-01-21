import React from "react";
import {MovieItem} from "../movie-items";
import styles from './MovieList.module.css';

export const MovieList = ({items,onMovieClick}) => {

    return (
        <div className={styles.movieListWrapper}>
            {items.map((item) =>
                <div onClick={()=>onMovieClick(item)}
                    className={styles.movie}>
                    <MovieItem {...item} key={item.id}/>
                </div>)}
        </div>
    );
}

