export default function Footer() {
  return (
    <>
      <div className="bg-blue-300 max-w-[1440px]  m-auto">
        <div className="bg-purple-300 max-w-[1040px] m-auto px-2 pt-[40px]">
          <div className="py-[40px] flex justify-between bg-slate-400 px-2">
            <div className="bg-emerald-50">
              <h3 className="font-bold text-[24px]">Bandage</h3>
            </div>
            <div className=" flex gap-5 text-[#23A6F0]">
              <i className="fa-brands footer-fa-brands fa-facebook  text-[23px]    "></i>
              <i className="fa-brands footer-fa-brands fa-instagram text-[23px]   "></i>
              <i className="fa-brands footer-fa-brands fa-twitter text-[23px]   "></i>
            </div>
          </div>
          <div className="footer-div bg-green-300 py-[40px]">
            <div className="bg-red-200">
              <h5 className="footer-h5">Company Info</h5>
              <ul className="footer-ul">
                <li>About US</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="bg-red-700">
              <h5 className="footer-h5">Legal</h5>
              <ul className="footer-ul">
                <li>About US</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="bg-red-800">
              <h5 className="footer-h5">Features</h5>
              <ul className="footer-ul">
                <li>About US</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="bg-red-500">
              <h5 className="footer-h5">Resources</h5>
              <ul className="footer-ul">
                <li>About US</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="bg-red-900 get-in-touch">
              <h5 className="footer-h5">Get In Touch</h5>
              <div className="flex mt-4">
                <input
                  type="text py-4"
                  placeholder="Your Email"
                  className="pl-2 footer-input"
                />
                <button className="footer-btn">Subscribe</button>
              </div>
              <span className="text-[#737373] ">Loret imp sum dolor Amit</span>
            </div>
          </div>
          <div>
            <h6 className="text-[#737373] font-bold py-[40px] bg-blue-900 text-center">
              Made With Love By Hamza Shabbir All Right Reserved{" "}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
