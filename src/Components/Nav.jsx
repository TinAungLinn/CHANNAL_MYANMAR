import React, { useState } from "react";
import { Input } from "@mantine/core";
import { MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../Redux/Services/MoviesSlice";


const Nav = () => {

  const searchTerms = useSelector(state =>state.movie.searchTerms)
  const dispatch = useDispatch();

  return (
    <div className=" flex justify-between px-5 z-50 py-5 shadow-lg items-center bg-slate-800 sticky top-0">
      <Link to={"/"}>
        <h1 className=" text-cyan-500 cursor-pointer text-xl font-semibold ">
          Channal Myanmar
        </h1>
      </Link>
      <div className=" flex gap-5 items-center">
        <Link to={"/favourite"}>
          <button className=" px-4 bg-fuchsia-500 hover:bg-fuchsia-700 rounded text-white">
            Favourite
          </button>
        </Link>
        <Link to={"/watchLater"}>
          <button className=" px-4 bg-fuchsia-500 hover:bg-fuchsia-700 rounded text-white">
            Watch Later
          </button>
        </Link>

          <Input
            value={searchTerms}
            onChange={(e) => {
              dispatch(search(e.target.value));
            }}
            icon={<MdSearch />}
            placeholder="Search Movies"
          />
      </div>
    </div>
  );
};

export default Nav;
