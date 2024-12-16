"use client";

import { useState } from "react";
import Link from "next/link";
export default function ResponsiveNav() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const onHandlernav = () => {
    setNavBarOpen(!navBarOpen);

    console.log(navBarOpen);
  };
  return (
    <>
      <div className=" responsive-div-icons flex w-[auto] py-4 px-2 pr-8 justify-between  items-center text-[24px] text-[#737373]   fixed top-0 z-50 bg-white">
        <div>
          <h3 className="text-[24px] font-bold text-[#252B42]">Banadage</h3>
        </div>
        <div className="flex-icons-div flex justify-between  w-[8rem]">
          <div>
            <i className="fa-solid-responsive-icons fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <i className="fa-solid-responsive-icons fa-solid fa-cart-shopping"></i>
          </div>
          <div>
            <i
              onClick={onHandlernav}
              className="fa-solid-responsive-icons fa-solid fa-bars cursor-pointer"
            ></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-2">
        <div
          className={`special-nav-for-mobile  max-w-[10rem] h-[24rem]     mt-24  tablet:hidden  ${
            navBarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="leading-[80px]">
            <li className=" text-[#737373] text-[30px] ">
              <Link href="/"> Home</Link>
            </li>
            <li className=" text-[#737373] text-[30px] ">
              <Link href="/product1"> Product</Link>
            </li>
            <li className=" text-[#737373] text-[30px] ">
              <Link href="/pricing"> Pricing</Link>
            </li>
            <li className=" text-[#737373] text-[30px] ">
              <Link href="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
