// "use client";
// import React, { useState, useEffect } from "react";
// import { MdShoppingBasket } from "react-icons/md";
// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <header
//       className={`w-full fixed z-20   ${
//         isScrolled ? "bg-white text-text" : "bg-transparent text-white"
//       }`}
//     >
//       <div className="mx-auto py-2 px-16 flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           {isScrolled ? (
//             <svg
//               width="37"
//               height="64"
//               viewBox="0 0 37 64"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clip-path="url(#clip0_1_54)">
//                 <path
//                   d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z"
//                   fill="#317189"
//                 />
//                 <path
//                   d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z"
//                   fill="#317189"
//                 />
//                 <path
//                   d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z"
//                   fill="#317189"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_1_54">
//                   <rect width="37" height="64" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           ) : (
//             <svg
//               width="37"
//               height="64"
//               viewBox="0 0 37 64"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clip-path="url(#clip0_1_54)">
//                 <path
//                   d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z"
//                   fill="white"
//                 />
//                 <path
//                   d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z"
//                   fill="white"
//                 />
//                 <path
//                   d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z"
//                   fill="white"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_1_54">
//                   <rect width="37" height="64" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           )}
//           {/* <svg
//             width="37"
//             height="64"
//             viewBox="0 0 37 64"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g clip-path="url(#clip0_1_54)">
//               <path
//                 d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z"
//                 fill="white"
//               />
//               <path
//                 d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z"
//                 fill="white"
//               />
//               <path
//                 d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z"
//                 fill="white"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_1_54">
//                 <rect width="37" height="64" fill="white" />
//               </clipPath>
//             </defs>
//           </svg> */}
//           <span className=" text-xl">Pop Rock Crystal</span>
//         </div>
//         <nav className="flex space-x-44">
//           <ul className="flex space-x-6">
//             <li>
//               <a href="#" className="text-sm font-medium">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-sm font-medium">
//                 Shop
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-sm font-medium">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-sm font-medium">
//                 Help
//               </a>
//             </li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             {/* <button> */}
//             <MdShoppingBasket size={20} />
//             {/* </button> */}
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full fixed z-20 transition-colors duration-300 ${
        isScrolled ? "bg-white text-text" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto py-2 px-4 md:px-16 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {isScrolled ? (
            <svg
              width="37"
              height="64"
              viewBox="0 0 37 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_54)">
                <path
                  d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z"
                  fill="#317189"
                />
                <path
                  d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z"
                  fill="#317189"
                />
                <path
                  d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z"
                  fill="#317189"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_54">
                  <rect width="37" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="37"
              height="64"
              viewBox="0 0 37 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_54)">
                <path
                  d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z"
                  fill="white"
                />
                <path
                  d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z"
                  fill="white"
                />
                <path
                  d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_54">
                  <rect width="37" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
          <span className="text-xl">Pop Rock Crystal</span>
        </div>
        <nav className="hidden md:flex space-x-44">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-sm font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium">
                Help
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-[#FF2B77] w-6 h-6 text-center flex justify-center">
              00
            </div>
            <MdShoppingBasket size={20} />
          </div>
        </nav>
        <div className="md:hidden flex items-center gap-10">
          <div className="rounded-full bg-[#FF2B77] w-6 h-6 text-center flex justify-center">
            00
          </div>
          <MdShoppingBasket size={20} />
          <button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <RxCross2 className="h-6 w-6" />
            ) : (
              <IoMdMenu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav
            className={`px-4 pt-2 pb-4 shadow-lg  ${
              isScrolled ? "bg-white text-text" : "bg-transparent text-black"
            }`}
          >
            <ul className="space-y-4">
              <li>
                <a href="#" className="block text-sm font-medium ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm font-medium ">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm font-medium ">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm font-medium ">
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
