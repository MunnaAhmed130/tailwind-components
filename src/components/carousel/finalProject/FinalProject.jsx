import { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { bannerImg } from "../../../utils/Constants";

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
          <div
            key={banner.src}
            style={{
              backgroundImage: `url(${banner.src})`,
            }}
            // className={`${fade && i !== curr ? `hidden` : `animate-fade `} ${
            //   fade && i == last ? `animate-fadeout` : ``
            // } ${
            //   fade && "absolute"
            // } min-w-full h-screen bg-cover w-full transition `}
            className={`${fade && "absolute"} ${
              fade && `${i == curr ? "animate-fade" : "opacity-0"}`
            }  ${
              fade && `${i == last && "animate-fadeOut"}`
            }  min-w-full h-screen bg-cover bg-center w-full transition `}
          >
            {banner.text && (
              <div
                className={`  absolute flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center`}
              >
                <h3 className="text-4xl font-semibold">{banner.text.title}</h3>
                <p className="text-xl">{banner.text.description}</p>
              </div>
            )}
          </div>
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
  }, [curr, setSlideInterval]);

  return (
    <div className="overflow-hidden relative h-screen w-full">
      <div
        className="flex transition-transform ease-out duration-500 relative"
        // className={`${
        //   fade && banner.id !== curr ? `hidden` : `animate-fade`
        // } min-w-full h-screen object-cover w-full flex transition-transform ease-out duration-500 relative`}
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

      <div className="absolute bottom-4 right-0 left-0">
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
export default FinalProject;

{
  /* <Carousel curr={curr} setCurr={setCurr} fade={fade}>
        {bannerImg.map((banner, i) => (
          <>
            <img
              src={banner.src}
              key={banner.src}
              className={`${
                fade && i !== curr ? `hidden` : `animate-fade`
              } min-w-full h-screen object-cover w-full`}
            />
            {banner.text && (
              <div
                className={`${
                  fade && i !== curr && `hidden`
                }  absolute flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center`}
              >
                <h3 className="text-4xl font-semibold">{banner.text.title}</h3>
                <p className="text-xl">{banner.text.description}</p>
              </div>
            )}
          </>
        ))}
      </Carousel> */
}

{
  /* <div
              src={banner.src}
              key={banner.src}
              style={{
                backgroundImage: `url(${banner.src})`,
              }}
              // style={{
              //   background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${banner.src}) no-repeat center cover`,
              // }}
              className={`${fade && "absolute"} ${
                fade && `${i == curr ? "animate-fade" : "opacity-0"}`
              }  ${
                fade && `${i == last && "animate-fadeOut"}`
              }  min-w-full h-screen bg-cover bg-no-repeat bg-center w-full  `}
            >
              {banner.text && (
                <div
                  className={`  relative flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center text-white`}
                >
                  <h3 className="text-4xl font-semibold ">
                    {banner.text.title}
                  </h3>
                  <p className="text-xl">{banner.text.description}</p>
                </div>
              )}
            </div> */
}
