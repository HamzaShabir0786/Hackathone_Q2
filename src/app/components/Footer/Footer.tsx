export default function Footer() {
  return (
    <>
      <div className=" max-w-[1440px]  m-auto">
        <div className=" max-w-[1040px] m-auto px-2  pt-[40px]">
          <div className="py-[40px] footer-heading flex justify-between  bg-slate-50 px-2">
            <div>
              <h3 className="font-bold text-[24px]">Bandage</h3>
            </div>
            <div className="  flex gap-5 text-[#23A6F0]">
              <i className="fa-brands footer-fa-brands fa-facebook  text-[23px]    "></i>
              <i className="fa-brands footer-fa-brands fa-instagram text-[23px]   "></i>
              <i className="fa-brands footer-fa-brands fa-twitter text-[23px]   "></i>
            </div>
          </div>
          <div className="footer-div  py-[40px]">
            <div className="">
              <h5 className="footer-h5">Company Info</h5>
              <ul className="footer-ul">
                <li>About US</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="">
              <h5 className="footer-h5">Legal</h5>
              <ul className="footer-ul">
                <li>About US</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="">
              <h5 className="footer-h5">Features</h5>
              <ul className="footer-ul">
                <li>About US</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="">
              <h5 className="footer-h5">Resources</h5>
              <ul className="footer-ul">
                <li>About US</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className=" get-in-touch ">
              <h5 className="footer-h5">Get In Touch</h5>
              <div className="flex mt-4">
                <input
                  type="text py-4"
                  placeholder="Your Email"
                  className="pl-2 bg-[#F9F9F9] footer-input"
                />
                <button className="footer-btn">Subscribe</button>
              </div>
              <p className="text-[#737373] font-bold pt-4">
                Loret imp sum dolor Amit
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-[#737373] font-bold py-[40px]  text-center">
              Made With Love By Hamza Shabbir All Right Reserved{" "}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
