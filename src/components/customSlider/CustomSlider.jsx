import { products } from "../../utils/Constants";
import "./custom.module.css";
// auto-cols-[calc((100%_-_calc(1.5rem_*_2))_/_3)
const CustomSlider = () => {
  const grid = () => {};
  return (
    <div className="overflow-x-hidden max-w-5xl mx-auto">
      <div className="grid grid-flow-col auto-cols-[calc((100%_-_3rem)_/_3) auto-cols-auto relative left-0 transition-all">
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
    </div>
  );
};

export default CustomSlider;
