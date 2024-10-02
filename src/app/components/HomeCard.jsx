import React from "react";

function HomeCard({ title, price, img }) {
  return (
    <div className="bg-white rounded-[40px]  py-8  w-full">
      <div className="bg-[#8A93E5] text-white text-sm  font-medium px-4 py-2 rounded-e-lg inline-block absolute top-20">
        New lot
      </div>
      {/* <Image
        src="/images/product.png"
        alt="Crystal Agate Phone Grip"
        width={300}
        height={300}
        className="mx-auto mb-4"
      /> */}
      <img src={img} className="h-80 mx-auto" />

      <div className="flex justify-center my-3">
        <hr className="w-32 border-[1px]" />
      </div>

      <h3 className="text-center text-lg text-gray-500 font-medium">
        {title}
        <span className="text-text font-semibold"> - {price}$</span>
      </h3>
      {/* <p className="text-center text-2xl font-bold"></p> */}
    </div>
  );
}

export default HomeCard;
