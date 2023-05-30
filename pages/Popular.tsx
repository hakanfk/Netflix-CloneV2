"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../api/filmApi";
type Props = {
  title: string;
  apiCall: string;
};

export default function Popular({}: Props) {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const lol = "trending";

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const result = await axios.get(requests.trending);
      setData(result?.data);
      setIsLoading(false);
    }
    getData();
  }, [data]);

  return (
    <div>
      <h2>Trending</h2>
      <div className="flex flex-row  gap-x-4 overflow-y-visible overflow-x-scroll px-6 scrollbar-hide  pb-8">
        {data?.results.map((item: any) => {
          return (
            <div
              key={item.id}
              className="w-64 flex flex-col flex-shrink-0 hover:scale-125 overflow-y-visible hover:z-20 cursor-pointer transition-all duration-300 py-2 "
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt=""
                className="w-full h-full "
              />
              <h2> {item.original_title} </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
