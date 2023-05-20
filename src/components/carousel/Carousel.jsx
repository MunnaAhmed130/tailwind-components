import { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

// about project
// this code will give a bootstrap fade style carousel

const Carousel = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();
  const autoSlide = true;

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
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, [curr]);

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
      {bannerImg.map((banner, i) => (
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
        />
      ))}

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

      <div className="flex absolute bottom-4 items-center justify-center py-2 w-full">
        {bannerImg.map((banner, slideIndex) => (
          <div
            key={`banner${slideIndex}`}
            onClick={() => goToSlide(slideIndex)}
            // className="text-2xl cursor-pointer text-white z-10"
            className={`transition-all w-5 h-1 bg-white rounded-full z-10 m-1  ${
              curr === slideIndex ? "bg-white" : "bg-opacity-60"
            }
          `}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
