"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

type Props = {
  title: string;
  apiCall: any;
};

function MovieRows({ title, apiCall }: Props) {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      const result = await axios.get(apiCall);
      setData(result?.data);
    }
    getData();
  }, [data, apiCall]);

  return (
    <div className=" mx-4 mb-8 pt-2 pb-12 bg-zinc-900 relative flex-shrink-0 overflow-x-scroll !overflow-y-visible scrollbar-hide">
      <h2 className="text-2xl pb-2 text-white font-semibold"> {title} </h2>
      <div className="flex flex-row flex-shrink-0 gap-x-8 ">
        {data?.results.map((movie: any) => {
          return (
            <div key={movie.id} className=" flex-shrink-0">
              <Movie movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieRows;
