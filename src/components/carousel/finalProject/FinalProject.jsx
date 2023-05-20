import { useState } from "react";
import { bannerImg } from "../../../utils/Constants";
import BannerInfo from "../BannerInfo";
import Carousel from "./Carousel";

const FinalProject = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();
  const fade = false;

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
          <BannerInfo
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

{
  /* <div
            key={banner.src}
            style={{
              backgroundImage: `url(${banner.src})`,
            }}
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
          </div> */
}
