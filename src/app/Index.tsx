import React from "react";
import Banner from "../../components/Banner";
import Rows from "../../components/Rows";

type Props = {};

function Index({}: Props) {
  return (
    <>
      <Banner apiCall={process.env.TRENDING_KEY} />
      <div className="pb-60">
        <Rows apiCall={process.env.TRENDING_KEY} title="Trending" />
      </div>
    </>
  );
}

export default Index;
