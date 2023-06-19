import { products } from "../../utils/Constants";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* {products.map((product) => (
          <SwiperSlide key={product.name}>
            <div className="z-10 h-auto  w-full  mr-5  bg-[#3a3a3a] rounded-sm overflow-hidden ">
              <div className="bg-white ">
                <img
                  src={product.url}
                  alt={product.name}
                  className="w-full h-60 object-contain object-center "
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
          </SwiperSlide>
        ))} */}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
