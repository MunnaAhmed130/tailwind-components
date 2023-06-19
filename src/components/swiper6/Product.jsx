const Product = ({ product }) => {
  // lg:min-w-[calc(33%_-_10px)] sm:min-w-[50%] min-w-[calc(33.34%_-_15px)]
  return (
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
  );
};

export default Product;
