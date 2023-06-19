import Carousel from "./Carousel";

// it is a infinite loop of 4 cards

const Loop = () => {
  return (
    <div className="p-10">
      <div className="flex justify-center items-center gap-2 ">
        <Carousel />
      </div>
    </div>
  );
};

export default Loop;
