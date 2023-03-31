import { defineStore } from "pinia";
import axios from "axios";

export const useMoviePageStore = defineStore("moviePageStore", {
  state: () => {
    return {
      movieDetails: {},
      movieCredits: {},
      username: "",
      loading: true,
    };
  },
  actions: {
    // GET
    async fetchMovieCredits(movieId, type) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${movieId}/credits?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US`
        );
        this.movieCredits = response.data;
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },
    async fetchMovieDetails(movieId, type) {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US`
        );
        this.movieDetails = response.data;
        this.loading = false;
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },
    // async fetchUsername ()
    // {
    //   try
    //   {
    //     const response = await axios.get(
    //       `http://localhost:3000/api/username`, { withCredentials: true }
    //     )
    //     this.username = response.data.username;
    //   } catch ( error )
    //   {
    //     console.log( 'error: ', error.response )
    //     throw error
    //   }
    // }
  },
});
