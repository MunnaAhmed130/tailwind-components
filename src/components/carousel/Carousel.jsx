import { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { bannerImg } from "../../utils/Constants";

// about project
// this code will give a bootstrap fade style carousel

const Carousel = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();

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
    <div className="h-screen w-full max-w-full relative  transition duration-1000">
      {bannerImg.map((banner, i) => (
        <BannerInfo
          key={banner.src}
          banner={banner}
          i={i}
          curr={curr}
          last={last}
        />
      ))}

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
        {bannerImg.map((banner, slideIndex) => (
          <div
            key={`banner${slideIndex}`}
            onClick={() => goToSlide(slideIndex)}
            className={`transition-all w-5 h-1 bg-white rounded-full z-10 m-1 cursor-pointer ${
              curr === slideIndex ? "bg-white" : "bg-opacity-60"
            }
          `}
          />
        ))}
      </div>
    </div>
  );
};

const BannerInfo = ({ banner, i, curr, last }) => {
  return (
    <div
      key={banner.src}
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
      className={` absolute ${
        i == curr ? "animate-fade opacity-100" : "opacity-0"
      }
    }  ${i == last && "animate-fadeOut opacity-0"}
    }  min-w-full h-screen bg-cover bg-center w-full transition `}
    >
      {banner.text && (
        <div
          className={`${
            i == curr ? "animate-fade" : "opacity-0"
          } flex w-full  h-screen text-center  items-center justify-center  absolute z-10`}
        >
          <div className="flex flex-col gap-3 w-3/4 max-w-2xl mx-auto transition-all">
            <h3 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl uppercase sm:font-semibold font-extrabold text-white transition-all">
              {banner.text.title}
            </h3>
            <p className="lg:text-[22px] text  text-white/95 transition-all">
              {banner.text.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Carousel;
