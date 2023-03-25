import { defineStore } from "pinia";
import axios from "axios";

export const useHomePageStore = defineStore("homePageStore", {
  state: () => {
    return {
      background: "https://api.lorem.space/image/movie?w=2000&h=980",
      trending: { data: [], loading: true },
      popular: { data: [], loading: true },
      topRated: { data: [], loading: true },
      vedio: { data: [], urls: [], loading: true },
    };
  },
  actions: {
    //GET
    fetchVedio(id) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US`
        )
        .then((res) => {
          if (res.data.results.length) {
            // this.vedio.urls.push(`${import.meta.env.VITE_TMDB_YOUTUBE_PATH}${res.data.results[0]?.key}`)
            this.vedio.urls.push(`${res.data.results[0]?.key}`);
            // console.log('urls: ', this.vedio.urls);
          } else
            this.vedio.data = this.vedio.data.filter((ele) => ele.id !== id);
        });
    },
    fetchTrending(media_type, time_window) {
      this.trending.loading = true;
      axios
        .get(
          `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }`
        )
        .then((res) => {
          this.trending.data = res.data.results;
        })
        .catch((err) => {
          console.log("error: ", err);
        })
        .finally(() => {
          this.trending.loading = false;
        });
    },
    fetchPopular(type) {
      this.popular.loading = true;
      axios
        .get(
          `https://api.themoviedb.org/3/${type}/popular?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US&page=1`
        )
        .then((res) => {
          this.popular.data = res.data.results;
          if (type === "tv") {
            this.vedio.data = res.data.results.filter(
              (ele) => ele.backdrop_path
            );
            for (const key in this.vedio.data) {
              this.fetchVedio(this.vedio.data[key].id);
            }
            // console.log('data: ', this.vedio.data);
          }
        })
        .catch((err) => {
          console.log("error: ", err);
        })
        .finally(() => {
          this.popular.loading = false;
          this.vedio.loading = false;
        });
    },
    fetchTopRated(type) {
      this.topRated.loading = true;
      axios
        .get(
          `https://api.themoviedb.org/3/${type}/top_rated?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US&page=1`
        )
        .then((res) => {
          this.topRated.data = res.data.results;
        })
        .catch((err) => {
          console.log("error: ", err);
        })
        .finally(() => {
          this.topRated.loading = false;
        });
    },
  },
});
