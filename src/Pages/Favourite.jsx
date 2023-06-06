import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";
import { removeFavorite } from "../Redux/Services/MoviesSlice";


const Favourite = () => {
  const { favoriteMovies } = useSelector((state) => state.movie);
const dispatch = useDispatch()

  if (favoriteMovies?.length === 0) {
    return (
      <Link to={"/"}>
        <div className=" flex flex-col h-screen w-screen justify-center items-center gap-3">
          <h1 className=" text-3xl font-semibold text-cyan-500 tracking-wider">
            You haven't add favorite yet.
          </h1>
          <button className=" px-5 py-1 rounded text-white bg-fuchsia-500 hover:bg-fuchsia-700">
            Add favorite
          </button>
        </div>
      </Link>
    );
  }

  return (
    <div className=" py-7 flex flex-wrap justify-center gap-7">
      {favoriteMovies?.map((movie) => {
        return (
          <div key={movie.id} className=" flex rounded flex-col gap-3 w-72">
            <div className=" relative">
              <img
                className=" rounded"
                src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                alt=""
              />
              <div >
              <ActionIcon
            onClick={() => dispatch(removeFavorite( movie ))}
            className=" absolute top-0 left-0 bg-cyan-500 hover:bg-cyan-600"
          >
            <AiFillStar className=" text-white" />
          </ActionIcon>
          </div>
            </div>
            <p className=" text-white">{movie.original_title}</p>
          </div>
        );
      })}
      <div className=" w-screen h-screen"></div>
    </div>
  );
};

export default Favourite;
