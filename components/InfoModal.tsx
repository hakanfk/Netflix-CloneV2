import React from "react";
import { BsFillPlayFill, BsPlus } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  movie: any;
  handleModal: any;
};

function InfoModal({ movie, handleModal }: Props) {
  return (
    <div
      className="fixed h-[100vh] w-[100vw] inset-0 bg-black/80 z-50 flex flex-col justify-center items-center "
      onClick={handleModal}
    >
      <div className="bg-zinc-900 w-[45vw] pb-12 rounded-xl">
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
            className="w-[45vw] relative rounded-md"
          />
          <div className="w-full h-24 bg-gradient-to-b from-transparent to-zinc-900 absolute bottom-0" />
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
        <div className="py-2 px-4 flex flex-row gap-x-4">
          <h2 className="text-green-500 font-semibold ">
            IMDB {movie.vote_average}{" "}
          </h2>
          <h2 className="text-white "> {movie.release_date} </h2>
        </div>
        <h2 className="text-xs px-4 py-1 text-white w-3/5">{movie.overview}</h2>
      </div>
    </div>
  );
}

export default InfoModal;
