"use client";
import React, { useEffect, useState } from "react";
import { BsFillPlayFill, BsPlus } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { getFilmCredits, getFilmDetails } from "../api/filmApi";

type Props = {
  movie: any;
  handleModal: any;
};

function InfoModal({ movie, handleModal }: Props) {
  const [movieData, setMovieData] = useState<any>();
  const [movieActors, setMovieActors] = useState<any>();

  useEffect(() => {
    async function getDetails() {
      try {
        const movieData = await getFilmDetails(movie.id);
        setMovieData(movieData);
      } catch (error) {
        console.log("Olmadı amk");
      }
    }
    getDetails();
  }, []);

  useEffect(() => {
    async function getActors() {
      const result = await getFilmCredits(movie.id);
      //const arr = result.cast.slice(0, 4);
      setMovieActors(result);
    }
    getActors();
  }, []);

  return (
    <div
      className="fixed h-[100vh] w-[100vw] inset-0 bg-black/80 z-50 flex flex-col justify-center items-center "
      onClick={handleModal}
    >
      <div className="bg-zinc-900 w-[55vw] pb-12 rounded-xl">
        <div className="relative">
          <div
            className="absolute top-4 right-4 w-8 h-8 flex justify-center items-center bg-black/70 hover:bg-black/90 cursor-pointer rounded-full z-30"
            onClick={handleModal}
          >
            <AiOutlineClose className=" text-white" />
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt=""
            className="w-[55vw] relative rounded-md"
          />
          <div className="w-full h-48 bg-gradient-to-b from-transparent to-zinc-900 absolute bottom-0" />
          <h2 className="absolute bottom-[30%] left-[7%] text-white tracking-widest w-1/2 text-4xl font-extrabold shadow-2xl">
            {movie.original_title}
          </h2>
          <div className="absolute bottom-11 gap-x-4 left-[8%] text-white flex flex-row items-center">
            <div
              className="w-32 rounded-md bg-white flex flex-row  items-center cursor-pointer
                        hover:bg-gray-200
            "
            >
              <BsFillPlayFill className="w-8 h-8 text-black ml-3" />{" "}
              <span className="text-black font-semibold">Oynat</span>
            </div>
            <div className="bg-neutral-500 p-1 hover:bg-neutral-600 rounded-full cursor-pointer">
              <BsPlus className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-2 justify-between px-4 py-2">
          <div className="w-[66%] flex flex-col">
            <div className="  flex flex-row gap-x-4">
              <h2 className="text-green-500 font-semibold ">
                IMDB {movie.vote_average}{" "}
              </h2>
              <h2 className="text-white "> {movie.release_date} </h2>
            </div>

            <div className=" pb-2 flex flex-row gap-x-2">
              {movieData?.genres.map((item: any) => {
                return (
                  <h2
                    key={item.id}
                    className="text-xs text-neutral-400 font-semibold"
                  >
                    {item.name}
                  </h2>
                );
              })}
            </div>
            <h2 className="text-xs   text-white w-[100%]">{movie.overview}</h2>
          </div>
          <div className="w-[33%] lg:ml-4 md:ml-2 ml-1">
            <div className="text-neutral-400 text-sm flex flex-row flex-wrap">
              Actors:
              {movieActors?.cast.slice(0, 5).map((item: any) => {
                //console.log(movieActors);

                return (
                  <h2 key={item.id} className="ml-1 text-white">
                    {item.name}
                  </h2>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
