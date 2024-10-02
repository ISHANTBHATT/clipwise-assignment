import Image from "next/image";
import Navbar from "./Navbar";
import HomeCarousel from "./HomeCarousel";
import HomeContainer from "./HomeContainer";
import ProductContainer from "./ProductContainer";
import Price from "./Price";

export default function Homepage() {
  return (
    <div className="">
      <HomeContainer />
      <ProductContainer />
      <Price />
      <div className="p-20 bg-[#0A294DCC]"></div>
    </div>
  );
}
