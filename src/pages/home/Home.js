import React, {useEffect, useState} from "react";
import {genresService, moviesService} from "../../services";
import {MovieList} from "../../components/";
import {Loading} from "../../components/";
import {useHistory} from "react-router-dom";
import {PaginationWrapper} from "../../components";

export const Home = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [genresList, setGenresList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [moviesData, setMoviesData] = useState(null);

    const history = useHistory();

    const fetchMovies = async (moviePage) => {
        try {
            setIsLoading(true)
            const {results, page, total_pages, total_results} = await moviesService.getMovies(moviePage);

            setMoviesData({page, total_pages, total_results});
            return results
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false);
        }
    }

    const fetchGenres = async () => {
        try {
            const {genres} = await genresService.getGenred()
            return genres
        } catch (e) {
            console.error(e)
        }

    }

    const fetchMoviesData = async (moviePage) => {
        const request = genresList.length ? [fetchMovies(moviePage)] : [fetchMovies(), fetchGenres()];
        try {
            const [movies, genres = genresList] = await Promise.all(request);
            const mergedWithMovies = movies.map((movie) => {
                const {genre_ids} = movie;
                const moviesGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId));

                return {
                    ...movie,
                    moviesGenresList
                }
            })

            setMoviesList(mergedWithMovies)
            setGenresList(genres);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchMoviesData()
    }, [])


    const onMovieClick = (movie) => history.push(`/movie/${movie.id}`);


    const handlePageClick = (page) => {
        fetchMoviesData({page})
    };
    return (
        <div>
            {isLoading || isLoading === null ? <Loading/> : (
                <PaginationWrapper
                    totalPages={moviesData.total_pages}
                    currentPage={moviesData.page}
                    onNextClick={handlePageClick}
                    onPrevClick={handlePageClick}
                    onFirstPage={handlePageClick}
                    onLastPage={handlePageClick}
                >
                    <MovieList items={moviesList} onMovieClick={onMovieClick}/>
                </PaginationWrapper>

            )}
        </div>

    );
}

