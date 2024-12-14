export default function ResponsiveNav() {
  return (
    <>
      <div className=" responsive-div-icons flex w-[auto] py-4 px-2 justify-between  items-center text-[24px] text-[#737373]">
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
            <i className="fa-solid-responsive-icons fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </>
  );
}
