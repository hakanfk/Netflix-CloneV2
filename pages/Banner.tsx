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
    <div className="z-0 relative">
      <div className="absolute top-[40%] left-[5%]">
        <h2 className="text-6xl tracking-widest text-gray-900 font-extrabold">
          {data?.results[8].original_title}
        </h2>
        <div className="w-1/2">
          <h2 className="text-white text-start text-2xl font-bold mt-10">
            {data?.results[8].overview}
          </h2>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${data?.results[8].backdrop_path}`}
        alt=""
        className="-mt-48 "
      />
    </div>
  );
}

export default Banner;
