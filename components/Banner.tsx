"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  apiCall: string;
};

function Banner({ apiCall }: Props) {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const result = await axios.get(apiCall);
      setData(result?.data);
      setIsLoading(false);
    }
    getData();
  }, [data]);

  return (
    <div className="relative h-[50vw] ">
      <div className="absolute top-0 right-0 h-full w-full bg-black/30" />
      <div className="absolute top-[45%] left-[5%]">
        <h2 className="text-6xl tracking-widest text-white shadow-xl font-extrabold">
          {data?.results[9].original_title}
        </h2>
        <div className="w-1/2">
          <h2 className="text-white text-start text-xl font-bold mt-10">
            {data?.results[9].overview}
          </h2>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${data?.results[9].backdrop_path}`}
        alt=""
        className="-mt-48 "
      />
    </div>
  );
}

export default Banner;
