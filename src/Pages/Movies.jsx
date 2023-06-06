import React, { useEffect, useState } from "react";
import Movie from "../Components/Movie";
import { Loader } from "@mantine/core";
import { useSelector } from "react-redux";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const searchMovies = useSelector(state => state.movie.searchTerms)

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const api = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=a91f0a2f2821e89f3a5e06186bae9f23"
    );
    const { results } = await api.json();
    setMovies(results);
    setLoader(false);
  };

  if (loader) {
    return (
      <div className=" h-screen w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }


  const SearchedMovies = movies.filter(movie => movie.original_title.toLowerCase().includes(searchMovies))


  return (
    <div className=" py-7 flex flex-wrap justify-center  gap-7">
      {SearchedMovies?.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
      <div className=" w-screen h-screen"></div>
    </div>
  );
};

export default Movies;
