import React from "react";

const Sidebar = () => {
  return (
    <div className=" w-1/6 bg-[#FFFFFF] h-screen p-5">
      <div className="flex gap-2">
        {" "}
        <img className="w-10 h-10" src="/images/foodlogo.png" />
        <div>
          <div className="text-[18px] font-semibold">NomNom</div>
          <div className="text-[#71717A] text-[12px]">Swift delivery</div>
        </div>
      </div>
      <div className="w-[165px] h-10 bg-black rounded-xl flex mt-10">
        <img className="p-[9px] ml-5" src="/images/Vectord.svg" />
        <p className="text-white m-auto mr-8 text-[14px]">Foot menu</p>
      </div>
      <div className="flex gap-3 mt-6 pl-10">
        <img src="/images/VectorCar.svg" />
        <p>Orders</p>
      </div>
    </div>
  );
};

export default Sidebar;
