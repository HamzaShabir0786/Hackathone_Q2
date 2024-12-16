import Link from "next/link";
import ResponsiveNav from "../responsive-nav/responsiveNav";
export default function Header({ bgColor = "bg-[#252B42]" }) {
  return (
    <>
      <nav className="nav-con  max-w-[1440px] m-auto   sticky top-0 z-50">
        <div
          className={`child-nav-1    h-[3rem]  flex items-center justify-between px-4 text-white ${bgColor}`}
        >
          <div className="flex justify-between ">
            <div className=" flex items-center gap-6 h-[46px] font-bold text-[14px] px-2">
              <div className="number-nav flex gap-6 items-center">
                <i className="fa-solid fa-solid-home-nav fa-phone text-white"></i>
                <h6>(225)555-0118</h6>
              </div>
              <div className="email-nav  flex gap-6 items-center">
                <i className="fa-solid fa-solid-home-nav fa-message text-white"></i>
                <h6>hamzii2205@gmail.com</h6>
              </div>
            </div>
          </div>
          <div className="follow-us-nav  h-[46px] flex items-center ">
            <h6 className="text-[14px] font-bold ">
              Follow US and get a chance to Win 80% Off
            </h6>
          </div>
          <div className="follow-us-icons-nav w-[auto]   h-[46px] p-[10px] gap-[10px] flex ">
            <h6 className=" font-[700] text-[14px] leading-[24px] text-white">
              Follow US:
            </h6>
            <div className="w-[120px] h-[26px]">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="child-nav-2 bg-white px-4 h-[4rem] flex items-center justify-between">
          <div>
            <h3 className="font-bold text-[24px]">Bandage</h3>
          </div>
          <div className="li-div-nav flex list-none font-bold gap-[15px] text-[#737373] text-[13px]">
            <li>
              <Link href={"/"} target={"_blank"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/shop"} target={"_blank"}>
                Shop
              </Link>
            </li>
            <li>
              <Link href={"/about"} target={"_blank"}>
                About
              </Link>
            </li>
            <li>
              <Link href={"/innovation"} target={"_blank"}>
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/contact"} target={"_blank"}>
                Contact
              </Link>
            </li>
            <li>Pages</li>
          </div>

          <div className=" login-nav  flex items-center gap-5 text-[#23a6f0] h-[46px] p-4">
            <div className="flex items-center  h-9">
              <div className="flex items-center  ">
                <i className="fa-solid fa-solid-home-nav fa-user pr-2 "></i>
                <div>
                  <a href="#">Login</a> / <a href="#">Register</a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-[120px] px-4 h-9">
              <i className="fa-solid fa-solid-home-nav fa-magnifying-glass h-[46px] "></i>
              <i className="fa-solid fa-solid-home-nav fa-cart-shopping h-[46px] ">
                1{" "}
              </i>
              <i className="fa-regular fa-solid fa-solid-home-nav fa-heart h-[46px]">
                1
              </i>
            </div>
          </div>
        </div>
        <ResponsiveNav />
      </nav>
    </>
  );
}
