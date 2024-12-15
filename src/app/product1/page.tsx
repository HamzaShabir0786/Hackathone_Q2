import Header from "../components/Header/Header";

export default function Product1() {
  return (
    <>
      <div className="max-w-[1440px] m-auto a-autoh">
        <Header bgColor="bg-[#23856D]" />
      </div>
      <div className="max-w-[1440px] m-auto   ">
        <div className="px-2">
          <ul className="flex justify-between items-center w-[150px]  py-[20px]">
            <li className="font-bold text-[14px]  text-[#252B42]">Home</li>
            <li>
              <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[30px]"></i>
            </li>
            <li className="font-bold text-[14px]  text-[#737373]">Pricing</li>
          </ul>
        </div>
        <div className="product-1-grid px-2 h-auto">
          <div className="">
            <div className="product-pic-div h-[80%] w-auto "></div>
            <div className="next-img-parent">
              <div className="next-img-div-1"></div>
              <div className="next-img-div-2"></div>
            </div>
          </div>
          <div className=" py-[20px] ">
            <div className="h-[80%] flex flex-col justify-between">
              <h4 className="text-[20px] text-[#252B42]">Floating Phone</h4>
              <div className="flex items-center justify-between w-[215px]    ">
                <div className="flex gap-x-1">
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-regular fa-star text-yellow-500"></i>
                </div>
                <div>
                  <h6 className="font-bold text-[#737373]">10 Reviews</h6>
                </div>
              </div>
              <h3 className="font-bold text-[24px] text-[#252B42]">
                $1,139.33
              </h3>
              <div className="flex gap-x-2 max-w-[180px] ">
                <h6 className="text-[#737373] font-bold text-[14px]">
                  Availability :
                </h6>
                <h6 className="text-[#23A6F0] font-bold text-[14px]">
                  In Stock{" "}
                </h6>
              </div>
              <div className="para-div-prodcut-1">
                <p className="text-[14px] font-bold text-[#858585]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <hr />
              </div>
              <div className="span-roll-div">
                <span className="span-1"></span>
                <span className="span-2"></span>
                <span className="span-3"></span>
                <span className="span-4"></span>
              </div>
              <div className=" flex justify-between items-center max-w-[310px]  mt-4">
                <div className="btn-div max-w-[158px] h-[45px] flex items-center cursor-pointer bg-[#23A6F0] py-[10px] px-[18px] rounded-md">
                  <h6 className="font-bold text-white text-[14px]">
                    select Options
                  </h6>
                </div>
                <div className="buy-heart-eye-icons-div ">
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-solid fa-eye"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
