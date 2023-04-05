import { defineStore } from "pinia";
import axios from "axios";

export const useHomePageStore = defineStore("homePageStore", {
  state: () => {
    return {
      background: "https://api.lorem.space/image/movie?w=2000&h=980",
      trending: { data: [], loading: true, firstFetch: false },
      popular: { data: [], loading: true, firstFetch: false },
      topRated: { data: [], loading: true, firstFetch: false },
      vedio: {
        data: [],
        urls: [],
        names: [],
        arr: [],
        loading: true,
        firstFetch: false,
      },
    };
  },
  actions: {
    //GET

    // Fetch Trailers
    async fetchTrailers(type) {
      try {
        this.vedio.loading = true;
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/popular?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US&page=1`
        );
        this.vedio.data = response.data.results.filter(
          (ele) => ele.backdrop_path
        );
        this.vedio.urls = [];
        this.vedio.names = [];
        this.vedio.arr = [];
        setTimeout(() => {
          this.vedio.loading = false;
          this.vedio.firstFetch = true;
        }, `${this.vedio.firstFetch ? 0 : 1000}`);
        for (const key in this.vedio.data) {
          const response = await axios.get(
            `https://api.themoviedb.org/3/${type}/${
              this.vedio.data[key].id
            }/videos?api_key=${
              import.meta.env.VITE_TMDB_KEY_VALUE
            }&language=en-US`
          );
          if (response.data.results.length) {
            if (!this.vedio.data[key].title?.toLowerCase().includes("porn")) {
              this.vedio.urls.push(response.data.results[0].key);
              this.vedio.names.push(response.data.results[0]?.name);
              this.vedio.arr.push(this.vedio.data[key]);
            }
          }
        }
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },

    // Fetch Trending
    async fetchTrending(media_type, time_window) {
      try {
        this.trending.loading = true;
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }`
        );
        this.trending.data = response.data.results;
        setTimeout(() => {
          this.trending.loading = false;
          this.trending.firstFetch = true;
        }, `${this.trending.firstFetch ? 0 : 1000}`);
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },

    // Fetch Popular
    async fetchPopular(type) {
      try {
        this.popular.loading = true;
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/popular?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US&page=1`
        );
        this.popular.data = response.data.results.filter(
          (ele) => !ele.title?.toLowerCase().includes("porn")
        );
        setTimeout(() => {
          this.popular.loading = false;
          this.popular.firstFetch = true;
        }, `${this.popular.firstFetch ? 0 : 1000}`);
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },

    // Fetch Top Rated
    async fetchTopRated(type) {
      try {
        this.topRated.loading = true;
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/top_rated?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US&page=1`
        );
        this.topRated.data = response.data.results;
        setTimeout(() => {
          this.topRated.loading = false;
          this.topRated.firstFetch = true;
        }, `${this.topRated.firstFetch ? 0 : 1000}`);
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },
  },
});
