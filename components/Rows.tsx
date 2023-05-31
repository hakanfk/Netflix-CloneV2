"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineDownCircle } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../store/modalSlice";
import InfoModal from "./InfoModal";

type Props = {
  title: string;
  apiCall: any;
};

function Rows({ title, apiCall }: Props) {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState({});

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const result = await axios.get(apiCall);
      setData(result?.data);
      setIsLoading(false);
    }
    getData();
  }, [data, apiCall]);

  function handleModal() {
    setVisible(false);
  }

  function handleOpenModal(movie: any) {
    setMovie(movie);
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }

  return (
    <div className="flex flex-col relative px-12">
      {visible && <InfoModal movie={movie} handleModal={handleModal} />}
      <h2 className="text-white  -mb-2 text-2xl font-bold">{title}</h2>
      <div className="flex flex-row overflow-x-scroll scrollbar-hide gap-x-6 py-8 ">
        {data?.results.map((item: any) => {
          return (
            <div
              key={item.id}
              className="flex group relative w-64 flex-shrink-0  hover:translate-x-5 hover:-translate-y-5 hover:scale-125 hover:z-10 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* 
                    -----------BackFace----------
                  */}

              <div className="absolute group-hover:top-16 transition-all duration-500 top-36 bg-zinc-900/90 w-full h-full flex flex-col">
                <div className="flex flex-row px-3 py-2 justify-between">
                  <div className="flex flex-row gap-x-4">
                    <BsPlayCircle className="w-7 h-7 hover:scale-125 transition-all duration-300 text-white" />
                    <AiOutlinePlusCircle className="w-7 h-7 text-white hover:scale-125 transition-all duration-300" />
                    <AiFillLike className="w-7 h-7 hover:scale-125 transition-all duration-300 text-red-700 focus:text-blue-500" />
                  </div>
                  <div>
                    <AiOutlineDownCircle
                      className="w-7 h-7 hover:scale-125 transition-all duration-300 text-white"
                      onClick={() => handleOpenModal(item)}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between px-3">
                  <h2 className="text-white text-xs font-bold tracking-wide pl-1 pt-1 ">
                    {item.original_title}
                  </h2>
                  <h2 className="text-green-500 font-bold flex flex-row justify-center items-center">
                    {item.vote_average}
                  </h2>
                </div>
              </div>
              {/* 
                  --------------
                  */}
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt=""
                className="w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rows;
