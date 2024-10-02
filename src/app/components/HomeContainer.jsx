"use client";
import Image from "next/image";
import HomeCarousel from "./HomeCarousel";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

export default function HomeContainer() {
  return (
    <div
      className="min-h-screen relative text-white pt-20 overflow-hidden"
      style={{
        backgroundImage: "url(/images/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className=" mx-auto px-4 md:px-16 py-12">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="w-full"
          >
            <h1 className="text-2xl md:text-4xl mb-4">
              Welcome to
              <br />
              <span className="text-5xl md:text-7xl font-bold">
                {" "}
                Pop Rock Crystal Shop!
              </span>
            </h1>
            <p className="text-textcolor mb-8 w-full lg:w-2/5">
              Here you will find unique phone accessories, crystals, jewelry and
              more. Free shipping inside the U.S. and our phone grips come with
              a limited warranty. Enjoy!
            </p>
            <div className="flex gap-10 text-text">
              <button className="bg-white px-8 py-3 rounded-2xl font-semibold">
                SHOP NOW
              </button>
              <p className="flex items-center">about us</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="relative w-full md:w-[50%] lg:w-[40%] xl:w-1/3 z-[1] "
          >
            <HomeCarousel />
          </motion.div>
        </div>
      </main>
      <div>
        <img
          src="/images/bg2.svg"
          className="w-full absolute bottom-0 right-0"
        />
        <div className=" flex items-center justify-center gap-4 pt-10 lg:pt-0">
          <div className="z-10">
            <svg
              width="28"
              height="38"
              viewBox="0 0 28 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7C13.6906 7 13.3938 7.12291 13.175 7.3417C12.9562 7.5605 12.8333 7.85724 12.8333 8.16666V10.5C12.8333 10.8094 12.9562 11.1062 13.175 11.325C13.3938 11.5437 13.6906 11.6667 14 11.6667C14.3094 11.6667 14.6061 11.5437 14.8249 11.325C15.0437 11.1062 15.1666 10.8094 15.1666 10.5V8.16666C15.1666 7.85724 15.0437 7.5605 14.8249 7.3417C14.6061 7.12291 14.3094 7 14 7ZM14 2.33333C11.834 2.33333 9.75682 3.19374 8.22527 4.72529C6.69373 6.25684 5.83331 8.33406 5.83331 10.5V17.5C5.83331 19.6659 6.69373 21.7432 8.22527 23.2747C9.75682 24.8062 11.834 25.6667 14 25.6667C16.1659 25.6667 18.2431 24.8062 19.7747 23.2747C21.3062 21.7432 22.1666 19.6659 22.1666 17.5V10.5C22.1666 8.33406 21.3062 6.25684 19.7747 4.72529C18.2431 3.19374 16.1659 2.33333 14 2.33333ZM19.8333 17.5C19.8333 19.0471 19.2187 20.5308 18.1248 21.6248C17.0308 22.7187 15.5471 23.3333 14 23.3333C12.4529 23.3333 10.9692 22.7187 9.87519 21.6248C8.78123 20.5308 8.16665 19.0471 8.16665 17.5V10.5C8.16665 8.9529 8.78123 7.46917 9.87519 6.37521C10.9692 5.28124 12.4529 4.66666 14 4.66666C15.5471 4.66666 17.0308 5.28124 18.1248 6.37521C19.2187 7.46917 19.8333 8.9529 19.8333 10.5V17.5Z"
                fill="#307189"
              />
              <path
                d="M14.866 36.5C14.4811 37.1667 13.5189 37.1667 13.134 36.5L12.2679 35C11.883 34.3333 12.3642 33.5 13.134 33.5L14.866 33.5C15.6358 33.5 16.117 34.3333 15.7321 35L14.866 36.5Z"
                fill="#307189"
              />
            </svg>
          </div>
          <p className="text-sm text-text font-semibold z-10">scroll down</p>
        </div>
      </div>
    </div>
  );
}
