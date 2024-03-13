import React from "react";
import MainCarosel from "../../component/HomeCarosel/MainCarosel";
import HomeSectionCard from "../../component/HomeSectionCards/HomeSectionCards";
import HomeSectionCarosel from "../../component/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/kurta";

const HomePage = () => {
  return (
    <div className="">
      <MainCarosel></MainCarosel>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} />
        <HomeSectionCarosel data={mens_kurta} />
        <HomeSectionCarosel data={mens_kurta} />
        <HomeSectionCarosel data={mens_kurta} />
      </div>
    </div>
  );
};

export default HomePage;
