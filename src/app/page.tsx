//"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import MovieRows from "../../components/MovieRows";
import Rows from "../../components/Rows";
import InfoModal from "../../components/InfoModal";
import Index from "./Index";

export default function Home() {
  return (
    <>
      {/* {visibility && <InfoModal />} */}
      <div className="flex md:hidden justify-center items-center text-white h-screen w-full bg-black">
        Please Switch to a Computer. Mobil is still under development
      </div>
      <div className="md:flex flex-col hidden">
        <Header />
        <Index />
      </div>
    </>
  );
}
