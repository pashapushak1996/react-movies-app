import {AXIOS} from "./axiosConfig";

class MoviesService {
   async getMovies(params){
       const {data} = await AXIOS.get(`/discover/movie`,{
           params
           }
       );
       console.log(data)
       return data
   }
   async getMoviesById(movieId){
       const {data} = await AXIOS.get(`/movie/${movieId}`)
       return data
   }
}

export const moviesService = new MoviesService();