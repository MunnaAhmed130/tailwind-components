import { useState, useEffect } from "react";
import { bannerImg } from "../../../utils/Constants";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

// this is the final project for fade and frame animation

const FinalProject = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();
  const fade = true;

  return (
    <div
      className={`${fade && `relative`} h-screen min-w-full w-full bg-[black] `}
    >
      <Carousel
        curr={curr}
        setCurr={setCurr}
        setLast={setLast}
        fade={fade}
        setSlideInterval={4000}
        autoSlide={true}
      >
        {bannerImg.map((banner, i) => (
          <CarouselInfo
            key={banner.src}
            banner={banner}
            i={i}
            curr={curr}
            last={last}
            fade={fade}
          />
        ))}
      </Carousel>
    </div>
  );
};

const Carousel = ({
  children: banner,
  autoSlide = false,
  setSlideInterval,
  curr,
  setCurr,
  fade,
  setLast,
}) => {
  const prev = () => {
    setLast(curr);
    setCurr((curr) => (curr === 0 ? banner.length - 1 : curr - 1));
  };

  const next = () => {
    setLast(curr);
    setCurr((curr) => (curr === banner.length - 1 ? 0 : curr + 1));
  };

  const goToSlide = (i) => {
    setLast(curr);
    setCurr(i);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, setSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="overflow-hidden  h-screen w-full">
      <div
        className={`${
          fade ? "relative " : "flex "
        }  transition-transform ease-out duration-1000 h-screen w-full`}
        style={{ transform: `${!fade && `translateX(-${curr * 100}%)`}` }}
      >
        {banner}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 ">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-20"
        >
          <BsChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-20"
        >
          <BsChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 z-10 hidden">
        <div className="flex items-center justify-center gap-2">
          {banner.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
            transition-all w-3 h-3 bg-white rounded-full
            ${curr === i ? "p-2" : "bg-opacity-50"}
          `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CarouselInfo = ({ banner, i, fade, curr, last, alt }) => {
  return (
    <>
      {fade && (
        <div
          className={`${i == curr ? "animte-fade" : "opacity-0 z-0"}
      }  ${i == last && "animate-fadeOut"} absolute inset-0 w-screen h-screen`}
        >
          <img
            src={banner.src}
            className="absolute min-w-full h-screen object-cover brightness-75 object-center w-full animate-fade transition-all"
            alt={alt}
          />

          <div
            className={`
              flex w-full  h-screen text-center  items-center justify-center  absolute z-20`}
          >
            <div className=" flex flex-col sm:gap-3 gap-2 xl:max-w-5xl lg:max-w-3xl md:max-w-xl sm:max-w-lg max-w-sm px-5 transition-all mt-16">
              <h3 className="text-8xl uppercase font-semibold text-white transition">
                {banner.text.title}
              </h3>

              <p className="lg:text-[22px] lg:leading-[30px] md:text-xl   text-white/95 transition-all  mx-auto">
                {banner.text.description}
              </p>
            </div>
          </div>
        </div>
      )}
      {!fade && (
        <>
          <div
            src={banner.src}
            key={banner.src}
            style={{
              backgroundImage: `url(${banner.src})`,
            }}
            className={` min-w-full h-screen bg-cover bg-center w-full transition `}
          >
            <div
              className={`  absolute  flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center    
                ${i == curr ? "animate-fade" : "opacity-0"}  ${
                i == last && "animate-fadeOut"
              } }`}
            >
              <div className=" flex flex-col gap-3 max-w-2xl mx-auto">
                <h3 className="text-8xl uppercase font-semibold text-white transition">
                  {banner.text.title}
                </h3>
                <p className="text-[22px] text-white/95">
                  {banner.text.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FinalProject;
