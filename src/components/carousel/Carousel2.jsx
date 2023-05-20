import { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { bannerImg } from "../../utils/Constants";

const Carousel2 = (autoSlide) => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () => {
    setCurr((curr) => (curr === 0 ? bannerImg.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurr((curr) => (curr === bannerImg.length - 1 ? 0 : curr + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurr(slideIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="h-screen w-full max-w-full relative group   ">
      {bannerImg.map((banner, i) => (
        <>
          <div
            key={banner.src}
            style={{
              backgroundImage: `url(${banner.src})`,
            }}
            className={` ${i !== curr ? `hidden` : `animate-fade`}
            h-full w-full bg-cover bg-center absolute top-0  `}
          ></div>
          {banner.text && (
            <div
              className={`${
                i !== curr && `hidden`
              } absolute flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center`}
            >
              <h3 className="text-4xl font-semibold">{banner.text.title}</h3>
              <p className="text-xl">{banner.text.description}</p>
            </div>
          )}
        </>
      ))}
      <div
        className=" group-hover:block group-hover:transition group-hover:duration-1000 absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 cursor-pointer transition-all duration-1000 bg-[#ffffff]/10 p-3 rounded-full"
        onClick={prevSlide}
      >
        <BsChevronLeft className="w-5 h-5" />
      </div>

      <div
        className=" group-hover:block group-hover:transition group-hover:duration-1000 ease-in-out absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 cursor-pointer bg-[#ffffff]/10 p-3  rounded-full"
        onClick={nextSlide}
      >
        <BsChevronRight className="w-5 h-5" />
      </div>

      <div className="absolute  w-full flex bottom-4 justify-center py-2">
        {bannerImg.map((banner, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${
              slideIndex === curr ? `text-[#b3b3b3]` : `text-[#979797]`
            }   text-2xl cursor-pointer `}
          >
            <RxDotFilled className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel2;
