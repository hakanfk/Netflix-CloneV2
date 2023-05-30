import React from "react";

type Props = {
  movie: any;
};

function Movie({ movie }: Props) {
  return (
    <div className="h-[10vw] group cursor-pointer relative  w-full">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=""
        className=" object-contain h-full w-full
                transition-all duration
                group-hover:invisible
                opacity-90
                group-hover:opacity-0
                shadow-xl delay-200
              "
      />
      <div
        className="absolute z-40 -top-12 scale-0 group-hover:scale-105 transition-all duration-500 
        group-hover:-translate-y-[1vw] group-hover:translate-x-[1vw] 
      "
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
          className="w-full h-full z-40"
        />
        <div className="bg-zinc-800 z-10 p-4 absolute w-full transition duration">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            vero illo enim aliquid vel sequi cupiditate iste possimus esse
            libero ratione atque dolore fugiat labore, eos ex repudiandae harum
            sint!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
