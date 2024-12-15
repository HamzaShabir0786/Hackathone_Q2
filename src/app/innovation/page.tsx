import Nav2 from "../components/nav2/nav2";
export default function Innovation() {
  return (
    <>
      <Nav2 />
      <div className="max-w-[1440px] m-auto bg-[wheat] h-[auto]">
        <div className="max-w-[1040px] m-auto flex flex-col justify-between items-center py-[30px] px-2 ">
          <h5 className="text-[16px] font-bold text-[#737373]">WHAT WE DO</h5>
          <h1 className="inno-h1 text-[58px] font-bold text-[#252B42]">
            Innovation tailored for you
          </h1>

          <div className="px-2">
            <ul className="flex justify-between items-center w-[150px]  py-[20px]">
              <li className="font-bold text-[14px]  text-[#252B42]">Home</li>
              <li>
                <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[30px]"></i>
              </li>
              <li className="font-bold text-[14px]  text-[#737373]">Pricing</li>
            </ul>
          </div>
        </div>
        <div className="innovation-grid max-w-[1440px] m-auto   py-[40px] h-[auto] px-2">
          <div className="innovation-items in-i-1"></div>
          <div className="innovation-items in-i-2flex flex-col gap-4">
            <div className="in-02-1 h-[50%]"></div>
            <div className="in-02-2 h-[50%]"></div>
          </div>
          <div className="innovation-items in-i-3  flex flex-col gap-4">
            <div className="in-03-1 h-[50%]"></div>
            <div className="in-03-2 h-[50%]"></div>
          </div>
          {/* <div className="innovaiton-items in-i-4 bg-purple-300"></div> */}
        </div>
      </div>
    </>
  );
}
