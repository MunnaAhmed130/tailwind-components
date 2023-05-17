import { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const CarouselFrame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const prev = () => {
    // setAutoSlide(false);
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? bannerImg.length - 1 : currentIndex - 1
    );
    // setAutoSlide(true);
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
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const bannerImg = [
    {
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

  return (
    <div className=" h-screen group  overflow-hidden  relative">
      {/* <div className=""> */}
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerImg.map((banner) => (
          <img className="object-cover" src={banner.src} key={banner.src} />
        ))}
      </div>

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

export default CarouselFrame;
