import Link from "next/link";
import ResponsiveNav from "../responsive-nav/responsiveNav";
export default function Nav2() {
  return (
    <>
      <div className="max-w-[1440px] h-auto  m-auto  sticky top-0 z-50 bg-purple-900 ">
        <nav className="contact-nav max-w-[1440px] ">
          <h3 className="contact-nav-h3">Bandage</h3>
          <div className="ul-div">
            <ul>
              <Link href="/" target="_blank">
                Home
              </Link>

              <Link href="/product1">Product</Link>

              <Link href="/pricing" target="_blank">
                Pricing
              </Link>
              <Link href="/contact" target="_blank">
                Contact
              </Link>
            </ul>
          </div>
          <div className="contact-btns-div">
            <button className="login-btn">Login</button>
            <button className="member-btn">
              Become a member
              <i className="fa-solid fa-solid-contact-nav fa-arrow-right"></i>
            </button>
          </div>
          <ResponsiveNav />
        </nav>
      </div>
    </>
  );
}
