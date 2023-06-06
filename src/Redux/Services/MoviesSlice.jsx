import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  favoriteMovies: [],
  watchLater: [],
  searchTerms: "",
};


const STORAGE_KEY = "FavoriteMovies"
const STORAGE_NAME = "WatchLater"
const storedWatchLater = Cookies.get(STORAGE_NAME)
const storedMovies = Cookies.get(STORAGE_KEY)

if(storedWatchLater){
  initialState.watchLater = JSON.parse(storedWatchLater)
}

if(storedMovies){
  initialState.favoriteMovies = JSON.parse(storedMovies)
}

console.log(initialState.favoriteMovies)

console.log(typeof(initialState.favoriteMovies))

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    search: (state, { payload }) => {
      state.searchTerms = payload;
    },
    addFavorite: (state, { payload }) => {
      const isExist = state.favoriteMovies.find(
        (movie) => movie.id === payload.id
      );
      if (isExist) {
        return state;
      } else {
        state.favoriteMovies = [...state.favoriteMovies, {...payload}];
        Cookies.set(STORAGE_KEY ,JSON.stringify(state.favoriteMovies))
      }
    },
    removeFavorite: (state, { payload }) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (favMovie) => favMovie.id != payload.id
      );
      Cookies.set(STORAGE_KEY, JSON.stringify(state.favoriteMovies))
    },
    addWatchLater: (state, {payload}) => {
      const isExisted = state.watchLater.find(movie => movie.id === payload.id)
      if(isExisted){
        return state;
      }else {
        state.watchLater = [...state.watchLater, {...payload}]
        Cookies.set(STORAGE_NAME,JSON.stringify(state.watchLater))
      }
    },
    removeWatchLater: (state, {payload}) => {
      state.watchLater = state.watchLater.filter(movie => movie.id != payload.id)
      Cookies.set(STORAGE_NAME, JSON.stringify(state.watchLater))
    }
  },
});

export const { search, addFavorite, removeFavorite, addWatchLater, removeWatchLater } = movieSlice.actions;
export default movieSlice.reducer;
