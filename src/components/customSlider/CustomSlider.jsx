import { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { products } from "../../utils/Constants";
import "./custom.module.css";
// auto-cols-[calc((100%_-_calc(1.5rem_*_2))_/_3)
const CustomSlider = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();
  const fade = true;

  const prevSlide = () => {
    setLast(curr);
    const newIndex = curr === 0 ? products.length - perView : curr - 1;
    setCurr(newIndex);
  };

  const nextSlide = () => {
    setLast(curr);
    const newIndex = curr === products.length - perView ? 0 : curr + 1;
    setCurr(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setLast(curr);
    setCurr(slideIndex);
  };

  const root = () => {
    return `100%`;
  };

  useEffect(() => {
    // if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [curr]);

  const gap = `1.5rem`;
  const perView = 1;
  const move = 100 / perView;

  // const grid = () => {};
  // auto-cols-[calc((100%_-_3rem)_/_3)]
  return (
    <div className="overflow-hidden relative max-w-5xl mx-auto">
      <div
        className={`grid grid-flow-col  left-0 transition-all gap-6 `}
        style={{
          // --calc: calc(),
          transform: `translateX(-${curr * 102.4}%)`,
          // transform: `translateX(calc(100%))`,
          gridAutoColumns: `calc((100% - (${gap} * (${perView} - 1))) / ${perView})`,
          gap: `${gap}`,
          // gridAutoColumns: `calc((100% - 3rem) / 3)`,
        }}
        // style={{ transform: `translateX( calc(${curr}% - 3rem) / 3))` }}
      >
        {products.map((product) => (
          <div
            key={product.src}
            className="z-10 h-auto  w-full   object-cover object-center  mr-5  bg-[#3a3a3a] rounded-sm overflow-hidden "
          >
            {/* min-w-[calc(33.34%_-_15px)] */}
            <div className="bg-white ">
              <img
                src={product.url}
                alt={product.name}
                className="w-full h-60 object-cover object-center "
              />
            </div>

            <div className="px-3 py-5 ">
              <h5 className="lg:text-[17px] text-base pb-1 font-semibold text-white">
                {product.name}
              </h5>
              <p className="text-[#d8d8d8] text-sm">
                {product.description.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute h-full top-0 flex w-full justify-between items-center z-20 cursor-pointer">
        <div
          className="bg-black/40 p-3 rounded-full border ml-5"
          onClick={prevSlide}
        >
          <BsChevronLeft className="w-5 h-5" />
        </div>

        <div
          className="bg-black/40 p-3 rounded-full mr-5 border"
          onClick={nextSlide}
        >
          <BsChevronRight className="w-5 h-5" />
        </div>
      </div>
      <div className="flex absolute bottom-4 items-center justify-center py-2 w-full">
        {/* {products.map((_, slideIndex) => (
          <div
            key={`banner${slideIndex}`}
            onClick={() => goToSlide(slideIndex)}
            className={`transition-all w-7 h-2 bg-white border rounded-full z-20 m-1 cursor-pointer ${
              curr === slideIndex ? "bg-white" : "bg-opacity-50"
            }
          `}
          />
        ))} */}
      </div>
    </div>
  );
};

export default CustomSlider;
