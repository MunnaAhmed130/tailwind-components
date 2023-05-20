const BannerInfo = ({ banner, i, curr, last, fade }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
      className={` ${fade && "absolute"} ${
        fade && `${i == curr ? "animate-fade opacity-100" : "opacity-0"}`
      }
      } ${fade && `${i == last && "animate-fadeOut opacity-0"}`}
      min-w-full h-screen bg-cover bg-center w-full transition `}
    >
      {banner.text && (
        <div
          className={` flex w-full  h-screen text-center  items-center justify-center  absolute z-10 `}
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

export default BannerInfo;

{
  /* content outside div for fade effect without blinking */
}
{
  /* {fade && banner.text && (
        <div
          className={`${i == curr ? "animate-fade" : "opacity-0"} ${
            i == last && "animate-fadeOut opacity-0"
          } flex w-full  h-screen text-center  items-center justify-center  absolute z-10 animate-fade`}
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
      )} */
}
