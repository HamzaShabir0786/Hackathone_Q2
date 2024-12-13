import Nav2 from "../components/nav2/nav2";

export default function About() {
  return (
    <>
      <div className="max-w-[1440px] h-auto bg-gray-500 m-auto">
        <Nav2 />

        <div className="about-grid bg-pink-300 py-[40px]">
          <div className="about-grid-1 bg-red-700  flex flex-col justify-center items-start gap-10 w-[100%]">
            <h5 className="text-[#252B42] text-[24px] font-bold">
              ABOUT COMPANY
            </h5>
            <h1 className="text-[#252B42] text-[58px] font-bold">ABOUT US</h1>
            <h4 className="text-[20px] text-[#737373] font-[400]">
              We know how large objects will act, <br /> but things on a small
              scale
            </h4>
            <button className="px-[40px] py-[15px] bg-[#23A6F0] rounded-md font-bold">
              Get Quote Now
            </button>
          </div>
          <div className="about-grid-2 bg-blue-500"></div>
        </div>
        <div className="max-w-[1040px] m-auto h-[auto] py-[20px] bg-purple-400">
          <div className="flex-about-problems py-[40px]">
            <div className="flex-p-1 h-[200px] py-[40px] bg-cyan-400">
              <p className="text-[#E74040] text-[14px] font-[400]">
                Problems trying
              </p>
              <h3 className="text-[24px] text-[#252B42]  font-bold ">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h3>
            </div>
            <div className="flex-p-2 h-[200px] py-[40px] bg-green-300">
              <p className="text-[14px] font-[400] text-[#737373]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>

          <div className="progress-div py-[80px]">
            <div className="bg-green-300">
              <h1 className="text-[#252B42] font-bold text-[58px]">15K</h1>
              <h5 className="text-[#737373] font-bold text-[16px]">
                Happy Coustomers
              </h5>
            </div>
            <div className="bg-green-800">
              <h1 className="text-[#252B42] font-bold text-[58px]">150K</h1>
              <h5 className="text-[#737373] font-bold text-[16px]">
                Monthly Visitors
              </h5>
            </div>
            <div className="bg-green-600">
              <h1 className="text-[#252B42] font-bold text-[58px]">15</h1>
              <h5 className="text-[#737373] font-bold text-[16px]">
                Countries Worldwide
              </h5>
            </div>
            <div className="bg-green-900">
              <h1 className="text-[#252B42] font-bold text-[58px]">100K+</h1>
              <h5 className="text-[#737373] font-bold text-[16px]">
                Top Partners
              </h5>
            </div>
          </div>

          <div className="about-video py-[80px] bg-amber-500 h-[750px] ">
            <video src=""></video>
          </div>
        </div>
      </div>
    </>
  );
}
