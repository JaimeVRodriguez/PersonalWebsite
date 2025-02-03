"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles, projectIndex }) => {
  const swiper = useSwiper();
  return (
      <div className={containerStyles}>
          {projectIndex !== "01" && (
              <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                  <PiCaretLeftBold className={iconsStyles} />
              </button>
          )}
          {projectIndex !== "06" && (
              <button className={btnStyles} onClick={() => swiper.slideNext()}>
                  <PiCaretRightBold className={iconsStyles} />
              </button>
          )}
      </div>
  );
};

export default WorkSliderBtns;
