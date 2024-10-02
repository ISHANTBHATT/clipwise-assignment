"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "./data";
import HomeCard from "./HomeCard";
import "./carousel.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute  -bottom-16 left-12  z-[1] focus:outline-none  items-center px-2 py-2 border  rounded-md font-semibold text-white hover:bg-[#6a76e3] bg-[#8A93E5]"
      onClick={onClick}
    >
      {/* <span className="absolute inset-y-0 left-4 flex items-center">&lt;</span> */}
      <FaArrowLeft />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute  -bottom-16 right-12  z-[1] focus:outline-none  items-center px-2 py-2 border  rounded-md font-semibold text-white hover:bg-[#6a76e3] bg-[#8A93E5]"
      onClick={onClick}
    >
      {/* <span className="absolute inset-y-0 left-4 flex items-center">&lt;</span> */}
      <FaArrowRight />
    </button>
  );
};
// const CustomDots = ({ dots, data }) => (
//   <div className="custom-dots flex flex-col justify-center space-y-4 absolute right-4 bottom-20">
//     {dots.map((dot, index) => (
//       <a
//         key={index}
//         className={`flex space-x-4 justify-between group relative hover:text-white font-bold ${
//           dot.props.className.includes("slick-active")
//             ? "text-white"
//             : "text-gray-600"
//         }`}
//         onClick={dot.props.children.props.onClick}
//       >
//         <p
//           className={` ${
//             dot.props.className.includes("slick-active")
//               ? "opacity-100"
//               : "opacity-0 group-hover:opacity-100"
//           } transition-opacity duration-300`}
//         >
//           {data[index].name}
//         </p>
//         <p>0{index + 1}</p>
//         <span
//           className={`absolute -left-4 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300 ${
//             dot.props.className.includes("slick-active")
//               ? "scale-x-100"
//               : "scale-x-0 group-hover:scale-x-100"
//           }`}
//         ></span>
//       </a>
//     ))}
//   </div>
// );

function HomeCarousel() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
    // appendDots: (dots) => <CustomDots dots={dots} data={data} />,
    // fade:true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="w-full h-full drop-shadow-xl">
        {data.map((data) => (
          <HomeCard
            key={data.id}
            title={data.title}
            img={data.img}
            price={data.price}
          />
        ))}
      </Slider>
    </div>
  );
}

export default HomeCarousel;
