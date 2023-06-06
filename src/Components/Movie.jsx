import React from "react";
import { ActionIcon } from "@mantine/core";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BiBookmarkMinus, BiBookmarkPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  addWatchLater,
  removeFavorite,
  removeWatchLater,
} from "../Redux/Services/MoviesSlice";

const Movie = ({ movie }) => {
  const { favoriteMovies } = useSelector((state) => state.movie);
  const { watchLater } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  const isExisted = favoriteMovies.find((fvMovie) => fvMovie.id === movie.id);

  const isExist = watchLater.find(
    (watchLaterMovie) => watchLaterMovie.id === movie.id
  );

  return (
    <div className=" flex rounded flex-col gap-3 w-72">
      <div className=" relative">
        <img
          className=" rounded"
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt=""
        />
        {isExisted ? (
          <ActionIcon
            onClick={() => dispatch(removeFavorite(movie))}
            className=" absolute top-0 left-0 bg-cyan-500 hover:bg-cyan-600"
          >
            <AiFillStar className=" text-white" />
          </ActionIcon>
        ) : (
          <ActionIcon
            onClick={() => dispatch(addFavorite(movie))}
            className=" absolute top-0 left-0 bg-cyan-500 hover:bg-cyan-600"
          >
            <AiOutlineStar className=" text-white" />
          </ActionIcon>
        )}
        <div>
          {isExist ? (
            <ActionIcon
              onClick={() => dispatch(removeWatchLater(movie))}
              className=" absolute top-0 right-0 bg-fuchsia-500 hover:bg-fuchsia-600"
            >
              <BiBookmarkMinus className=" text-white" />
            </ActionIcon>
          ) : (
            <ActionIcon
              onClick={() => dispatch(addWatchLater(movie))}
              className=" absolute top-0 right-0 bg-fuchsia-500 hover:bg-fuchsia-600"
            >
              <BiBookmarkPlus className=" text-white" />
            </ActionIcon>
          )}
        </div>
      </div>
      <p className=" text-white">{movie.original_title}</p>
    </div>
  );
};

export default Movie;
