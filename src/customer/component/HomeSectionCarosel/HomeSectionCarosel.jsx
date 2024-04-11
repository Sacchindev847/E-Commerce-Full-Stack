import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCards/HomeSectionCards";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarosel = ({sectionName, data}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
                        console.log("prevoius method call");
                        setActiveIndex(activeIndex - 1);
                        console.log(activeIndex);
  }

  const slideNext = () => {
                            console.log("next method call");
                            setActiveIndex(activeIndex + 1);
                            console.log(activeIndex);
                            }

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  /*  const items = data
    .slice(1, 10)
    .map((item) => <HomeSectionCard product={item} />); */

   const responsive = {
      0: {
        items: 2,
        itemsFit: "contain",
      },
      568: {
        items: 3,
        itemsFit: "contain",
      },
      1024: {
        items: 5.5,
        itemsFit: "contain",
      },
    };

 const items = data?.slice(0, 10).map((item) => (
        <div className="">
          {" "}
          <HomeSectionCard product={item} />
        </div>
      ));

/*   const items = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item)=> <HomeSectionCard/>) */

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">
        {sectionName}
      </h2>
      <div className="relative border p-5">
        <AliceCarousel
                    items={items}
                    disableButtonsControls
                    activeIndex={activeIndex}
                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
        />
        {activeIndex !== items.length - 5 &&(<Button
          onClick={slideNext}
          variant="contained"
          className="z-50 bg-[]"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>)}

        {activeIndex !== 0 &&(<Button
          onClick={slidePrev}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>)}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
