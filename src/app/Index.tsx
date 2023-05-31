import React from "react";
import Banner from "../../components/Banner";
import Rows from "../../components/Rows";

type Props = {};

function Index({}: Props) {
  return (
    <>
      <Banner apiCall={process.env.TRENDING_KEY} />

      <Rows apiCall={process.env.TRENDING_KEY} title="Trending" />
      <Rows apiCall={process.env.TOPRATED_KEY} title="Top Rated" />
    </>
  );
}

export default Index;
