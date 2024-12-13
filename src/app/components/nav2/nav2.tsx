import Link from "next/link";
import ResponsiveNav from "../responsive-nav/responsiveNav";
export default function Nav2() {
  return (
    <>
      <div className="max-w-[1440px] h-auto  m-auto">
        <nav className="contact-nav max-w-[1440px]  ">
          <h3 className="contact-nav-h3">Bandage</h3>
          <div className="ul-div">
            <ul>
              <li>
                <Link href="/" target="_blank">
                  <li>Home</li>
                </Link>
              </li>
              <li>Product</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="contact-btns-div">
            <button className="login-btn">Login</button>
            <button className="member-btn">
              Become a member{" "}
              <i className="fa-solid fa-solid-contact-nav fa-arrow-right"></i>
            </button>
          </div>
          <ResponsiveNav />
        </nav>
      </div>
    </>
  );
}
