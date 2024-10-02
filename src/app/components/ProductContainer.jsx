"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import data from "./data";

function ProductContainer() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <section className="mt-24">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="text-3xl font-bold mb-4 text-center text-textcolor"
        >
          All product
        </motion.h2>
        <div className="flex items-center justify-center">
          <hr className="w-10 border-2 rounded-full" />
        </div>

        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="flex flex-col py-6 lg:flex-row gap-4 md:gap-20 mb-8 px-10 font-semibold text-textcolor"
        >
          <div className="flex">
            <p className="text-gray-500 items-center py-2">Filter:</p>
            <select className="bg-white rounded-md px-4 py-2 w-60">
              <option>All Products</option>
              <option>New Arrivals</option>
              <option>In Stock</option>
              <option>On Sale</option>
            </select>
          </div>

          <div className="flex">
            <p className="text-gray-500 items-center py-2">Sort:</p>
            <select className="bg-white rounded-md px-4 py-2 w-60">
              <option>Best Selling</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="flex flex-wrap gap-10 px-10"
        >
          {data.map((e) => (
            <Card key={e.id} img={e.img} title={e.title} price={e.price} />
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <button
            className="relative h-[50px] w-40 rounded-xl overflow-hidden bg-white px-3 text-transparent hover:shadow-2xl hover:shadow-blue-500 transition-all font-semibold"
            style={{
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(to right, #75CCEB, #6FB4FF) border-box",
              border: "2px solid transparent",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              className={`relative z-10 ${
                isHovered
                  ? "text-white"
                  : "bg-clip-text bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF]"
              }`}
            >
              View All
            </span>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] transition-all duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>
      </section>
    </div>
  );
}

const Card = ({ img, title, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white rounded-[40px] p-8 py-10  max-w-sm hover:shadow-2xl hover:border-none m-auto border border-gray-200">
      <img src={img} className="h-40 mx-auto" />

      <div className="flex justify-center my-3">
        <hr className="w-32 border-[1px]" />
      </div>

      <h3 className="text-center text-lg text-gray-500 font-medium">{title}</h3>
      <p className="text-text font-bold text-center text-lg">{price}$</p>
      <div className="w-full flex justify-center mt-4">
        <button
          className="relative h-[50px] w-40 rounded-xl overflow-hidden bg-white px-3 text-transparent hover:shadow-2xl hover:shadow-blue-500 transition-all font-semibold"
          style={{
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(to right, #75CCEB, #6FB4FF) border-box",
            border: "2px solid transparent",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span
            className={`relative z-10 ${
              isHovered
                ? "text-white"
                : "bg-clip-text bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF]"
            }`}
          >
            BUY NOW
          </span>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
export default ProductContainer;
