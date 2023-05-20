import { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { bannerImg } from "../../utils/Constants";
import BannerInfo from "./BannerInfo";

// about project
// this code will give a bootstrap fade style carousel

const Carousel = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();
  const fade = false;

  const prevSlide = () => {
    setLast(curr);
    const newIndex = curr === 0 ? bannerImg.length - 1 : curr - 1;
    setCurr(newIndex);
  };

  const nextSlide = () => {
    setLast(curr);
    const newIndex = curr === bannerImg.length - 1 ? 0 : curr + 1;
    setCurr(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setLast(curr);
    setCurr(slideIndex);
  };

  useEffect(() => {
    // if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div
      className={`h-screen w-full max-w-full ${
        fade && "relative"
      } overflow-hidden  `}
    >
      <div
        className={`transition-transform ease-out duration-1000 h-screen w-full ${
          fade && "absolute"
        }  flex `}
        style={{ transform: `${!fade && `translateX(-${curr * 100}%)`}` }}
      >
        {bannerImg.map((banner, i) => (
          <BannerInfo
            key={banner.src}
            banner={banner}
            i={i}
            curr={curr}
            last={last}
            fade={fade}
          />
        ))}
      </div>

      <div className="absolute top-0 flex w-full justify-between items-center h-screen z-20 cursor-pointer">
        <div
          className="bg-black/40 p-3 rounded-full border ml-5"
          onClick={prevSlide}
        >
          <BsChevronLeft className="w-5 h-5" />
        </div>

        <div
          className="bg-black/40 p-3 rounded-full mr-5 border"
          onClick={nextSlide}
        >
          <BsChevronRight className="w-5 h-5" />
        </div>
      </div>

      {/* <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 cursor-pointer transition-all duration-1000 bg-[#ffffff]/10 p-3 rounded-full"
        onClick={prevSlide}
      >
        <BsChevronLeft className="w-5 h-5" />
      </div>

      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 cursor-pointer bg-[#ffffff]/10 p-3  rounded-full"
        onClick={nextSlide}
      >
        <BsChevronRight className="w-5 h-5" />
      </div> */}

      <div className="flex absolute bottom-4 items-center justify-center py-2 w-full">
        {bannerImg.map((_, slideIndex) => (
          <div
            key={`banner${slideIndex}`}
            onClick={() => goToSlide(slideIndex)}
            className={`transition-all w-7 h-2 bg-white border rounded-full z-20 m-1 cursor-pointer ${
              curr === slideIndex ? "bg-white" : "bg-opacity-50"
            }
          `}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
