import React from "react";
import DanhSachBenhNhan from "./components/danh-sach-benh-nhan";
import TimKiem from "./components/tim-kiem";
import HoTen from "./components/ho-ten";

const LeftSidebar = () => {
  return (
    <div className="h-full w-full  border mr-1 rounded-sm">
      <div
        style={{ height: "9%" }}
        className=" border w-full border-cyan-500 rounded-sm bg-cyan-300 "
      >
        <DanhSachBenhNhan />
      </div>
      <div
        style={{ height: "76%" }}
        className=" border mt-0.5 w-full border-cyan-500 rounded-sm "
      >
        <HoTen />
      </div>
      <div
        style={{ height: "14.4%" }}
        className=" w-full border mt-0.5 border-cyan-500 rounded-sm bg-cyan-300 "
      >
        <TimKiem />
      </div>
    </div>
  );
};

export default LeftSidebar;
