import Data from "../../../public/feauterProducts.json";
export default function FeaturedProducts() {
  return (
    <>
      <div className="max-w-[1444px] h-[auto]  m-auto">
        <div className="max-w-[1044px] h-[auto]  px-2 m-auto">
          <div className=" text-center py-[80px]">
            <h4 className="font-[400]  text-[20px] text-[#737373] ">
              Featured Products
            </h4>
            <h3 className="font-bold text-[24px] ">BESTSELLER PRODUCTS</h3>
            <p className="text-[14px] font-[400] text-[# title-p737373]">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>

          <div className="feature-grid  pb-[80px] ">
            {Data.map((items, index) => {
              return (
                <>
                  <div className="feature-grid-items f-g-i-1" key={items.id}>
                    <div
                      className="nested-all-feature-1 n-f-1 "
                      style={{ backgroundImage: `url(${items.imageSrc})` }}
                    ></div>
                    <div className="nested-all-feature-2 n-f-2-1">
                      <h5 className="text-[16px] font-bold">{items.h5} </h5>
                      <p className="text-[14px] text-[#737373] text-bold title-p">
                        {items.p}
                      </p>
                      <div className="span-div-price">
                        <div className="price-1">{items.oldPrice}</div>
                        <div className="price-2">{items.oldPrice}</div>
                      </div>
                      <div className="roll-div">
                        <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-1"></div>
                        <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-2"></div>
                        <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-3"></div>
                        <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-4"></div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
