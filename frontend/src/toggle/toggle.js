import { ref } from "vue";

export const trendingToggle = ref([
  {
    name: "Today",
    type: {
      media_type: "all",
      time_window: "day",
    },
    clicked: true,
  },
  {
    name: "This Week",
    type: {
      media_type: "all",
      time_window: "week",
    },
    clicked: false,
  },
]);

export const popularToggle = ref([
  {
    name: "Streaming",
    type: "movie",
    clicked: true,
  },
  {
    name: "On TV",
    type: "tv",
    clicked: false,
  },
  {
    name: "For Rent",
    type: "movie",
    clicked: false,
  },
  {
    name: "In Theaters",
    type: "tv",
    clicked: false,
  },
]);

export const topRatedToggle = ref([
  {
    name: "Movies",
    type: "movie",
    clicked: true,
  },
  {
    name: "TV",
    type: "tv",
    clicked: false,
  },
]);

export const vedioToggle = ref([
  {
    name: "Streaming",
    clicked: true,
  },
  {
    name: "On TV",
    clicked: false,
  },
  {
    name: "For Rent",
    clicked: false,
  },
  {
    name: "In Theaters",
    clicked: false,
  },
]);
