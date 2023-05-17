import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bannerImg.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === bannerImg.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const bannerImg = [
    {
      src: "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg",
      blurHash:
        "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
      text: {
        title: "Bicycles for Adventures",
        description:
          "We create the best Cycling Experiences of a lifetime.We can fit you with the perfect bike because we carry all sizes and types of bikes",
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
    <div className="h-screen w-full max-w-full relative group transition duration-1000">
      <div
        style={{
          backgroundImage: `url(${bannerImg[currentIndex].src})`,
        }}
        className="h-full w-full bg-cover bg-center absolute  duration-1000"
      ></div>

      <div
        className="hidden group-hover:block group-hover:transition group-hover:duration-1000 absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 cursor-pointer transition-all duration-1000 bg-[#ffffff]/10 p-3 rounded-full"
        onClick={prevSlide}
      >
        <BsChevronLeft className="w-5 h-5" />
      </div>

      <div
        className="hidden group-hover:block group-hover:transition group-hover:duration-1000 ease-in-out absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 cursor-pointer bg-[#ffffff]/10 p-3  rounded-full"
        onClick={nextSlide}
      >
        <BsChevronRight className="w-5 h-5" />
      </div>
      <div className="flex top-4 justify-center py-2">
        {bannerImg.map((banner, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
