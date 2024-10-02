"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

function Price() {
  return (
    <div
      className=" relative min-h-screen mt-4 overflow-hidden"
      style={{
        backgroundImage: "url(/images/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src="/images/bg3.svg" className="w-full absolute -top-32 " />
      <section className="mt-24 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 lg:text-right text-textcolor p-8 md:p-20 xl:ml-64">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="z-10 "
        >
          <h2 className="text-3xl font-bold mb-2">BEST PRICE</h2>
          <h3 className="text-5xl font-bold mb-4">Agate Phone Grip</h3>
          <div className="flex lg:justify-end ">
            <p className="text-[#41A0B7] text-xl flex items-center font-semibold text-center line-through mb-2">
              44.50$
            </p>
            <p className="text-5xl font-bold text-[#E35B3E] mb-4">19.50$</p>
          </div>
          <p className="lg:max-w-sm mb-8">
            These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc!
            Just gently squeeze the sides to remove and swap out with another
            color or design!
          </p>
          <button className="bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] text-white px-12 py-3 rounded-2xl font-medium">
            BUY NOW
          </button>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="w-[300px] h-[300px] md:w-[570px] md:h-[570px] bg-white rounded-full shadow-2xl flex items-center justify-center ">
            <div className="w-60 h-60 md:w-96 md:h-96 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <Image
                src="/images/product.png"
                alt="Agate Phone Grip"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>
        </motion.div>
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="/images/circle.svg"
          className="w-[450px] h-[300px] md:w-[900px] md:h-[500px] absolute  md:right-14 lg:-right-16 bottom-4 "
        />
      </section>
    </div>
  );
}

export default Price;
