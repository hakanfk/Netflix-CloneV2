//"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import MovieRows from "../../components/MovieRows";
import Rows from "../../components/Rows";
import InfoModal from "../../components/InfoModal";
import Index from ".";

export default function Home() {
  return (
    <>
      {/* {visibility && <InfoModal />} */}
      <Header />
      <Index />
      {/* <Banner apiCall={process.env.TRENDING_KEY} />
      <div className="pb-60">
        <Rows apiCall={process.env.TRENDING_KEY} title="Trending" />
      </div> */}
    </>
  );
}
