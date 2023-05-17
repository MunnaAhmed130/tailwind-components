import { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel3 = (autoSlide = false) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? bannerImg.length - 1 : currentIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === bannerImg.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, [autoSlide, currentIndex]);

  const bannerImg = [
    {
      id: 0,
      src: "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg",
      blurHash:
        "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
      text: {
        title: "Bicycles for Adventures",
        description:
          "We create the best Cycling Experiences of a lifetime. We can fit you with the perfect bike because we carry all sizes and types of bikes",
      },
    },
    {
      id: 1,
      src: "https://i.ibb.co/hK5zTvv/background.png",
      blurHash:
        "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
      text: {
        title: "Bicycles for Adventures",
        description:
          "We create the best Cycling Experiences of a lifetime.We can fit you with the perfect bike because we carry all sizes and types of bikes",
      },
    },
  ];

  const value = `translate-X-[-${currentIndex * 100}%]`;
  console.log(value);

  const fade = false;

  return (
    <div className="w-full max-w-full h-screen overflow-hidden ">
      {fade && (
        <div
          className={`
      flex transition-transform ease-out duration-500   w-full max-w-full h-screen`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bannerImg.map((banner) => (
            <Banner key={banner.src} banner={banner} />
          ))}
        </div>
      )}

      {bannerImg.map((banner, i) => (
        <Banner
          key={banner.src}
          banner={banner}
          currentIndex={currentIndex}
          i={i}
          fade={fade}
        />
      ))}
      {/* {bannerImg.map((banner, i) => (
        <>
          <img
            key={banner.src}
            src={banner.src}
            className={` ${i !== currentIndex ? `hidden` : `animate-fade`}
            h-full w-full object-cover bg-center absolute top-0  `}
          ></img>
          {banner.text && (
            <div
              className={`${
                i !== currentIndex && `hidden`
              } absolute flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center`}
            >
              <h3 className="text-4xl font-semibold">{banner.text.title}</h3>
              <p className="text-xl">{banner.text.description}</p>
            </div>
          )}
        </>
      ))} */}
      {/* carousel left indicators */}
      <div
        className=" group-hover:block group-hover:transition group-hover:duration-1000 absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 cursor-pointer transition-all duration-1000 bg-[#ffffff]/10 p-3 rounded-full"
        onClick={prev}
      >
        <BsChevronLeft className="w-5 h-5" />
      </div>

      {/* carousel right indicators */}
      <div
        className=" group-hover:block group-hover:transition group-hover:duration-1000 ease-in-out absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 cursor-pointer bg-[#ffffff]/10 p-3  rounded-full"
        onClick={next}
      >
        <BsChevronRight className="w-5 h-5" />
      </div>

      {/* carousel  button  */}
      <div className="absolute  w-full flex bottom-4 justify-center py-2">
        {bannerImg.map((banner, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${
              slideIndex === currentIndex ? `text-[#b3b3b3]` : `text-[#979797]`
            }   text-2xl cursor-pointer `}
          >
            <RxDotFilled className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Banner = ({ banner, currentIndex, i, fade }) => {
  console.log(i, currentIndex);
  return (
    <div className="h-screen w-full min-w-full relative">
      <img
        //    className={` ${i !== currentIndex ? `hidden` : `animate-fade`}
        //    h-full w-full object-cover bg-center absolute top-0  `}
        className={`${
          banner.id == currentIndex ? `hidden` : `animate-fade`
        } object-cover object-center h-full min-w-full absolute top-0`}
        src={banner.src}
      />
      {banner.text && (
        <div
          className={` absolute flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center`}
        >
          <h3 className="text-4xl font-semibold">{banner.text.title}</h3>
          <p className="text-xl">{banner.text.description}</p>
        </div>
      )}
    </div>
  );
};

export default Carousel3;
