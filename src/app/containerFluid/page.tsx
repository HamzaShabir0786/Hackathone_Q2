export default function Fluid() {
  return (
    <>
      <div className="w-[1439px] h-[716px] m-auto bg-gray-600">
        <div className="w-[1044px] h-[651px] mt-[48px] absolute ml-[197.5px] gap-[80px]  flex items-center bg-green-300">
          <div className="h-[427px] w-[509px]  py-[48px]  gap-[30px] bg-red-800  fluid-landing"></div>

          <div className=" h-[427px] w-[509px] bg-yellow-900">
            <div className="max-w-[599px] h-[427px] gap-[35px]  flex flex-col justify-between bg-red-300">
              <h5 className="text-[#BDBDBD] font-bold text-[16px]">
                Summer 2024
              </h5>
              <h1 className="font-weight text-[58px] font-bold text-black">
                New Collection
              </h1>
              <div className="w-[376px] h-[60px] ">
                <h4 className=" font-[700px]  text-[20px] leading-[30px] text-[#737373]">
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
              </div>
              <div className=" py-[15px] px-[40px] gap-[10px]  flex">
                <button className="w-[156px] h-[58px] text-white font-bold rounded-[5px] bg-[#2DC071]">
                  BUY NOW
                </button>
                <button className="w-[156px] h-[58px] text-[#2DC071] border border-[#2DC071] font-bold rounded-[5px] bg-none">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
