import Image from "next/image";
import Header from "../../pages/Header";
import Popular from "../../pages/Popular";
import Rows from "../../pages/Rows";
import axios from "axios";
import Banner from "../../pages/Banner";
import Entrance from "../../pages/Entrance";

export default function Home() {
  return (
    <div className="h-full bg-[#171616]">
      {/* <Entrance /> */}
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <Banner apiCall={process.env.TRENDING_KEY} />
      <div className="-mt-36 z-30">
        <Rows title="Trending" apiCall={process.env.TRENDING_KEY} />
        <Rows title="Trending" apiCall={process.env.TRENDING_KEY} />
        <Rows title="Trending" apiCall={process.env.TRENDING_KEY} />
        <Rows title="Trending" apiCall={process.env.TRENDING_KEY} />
        <Rows title="Trending" apiCall={process.env.TRENDING_KEY} />
      </div>
    </div>
  );
}
/* 
flex min-h-screen  flex-col bg-black/80 */
