import React from "react";
import DanhSachBenhNhan from "./components/danh-sach-benh-nhan";
import TimKiem from "./components/tim-kiem";

const leftSidebar = () => {
  return (
    <div>
      <DanhSachBenhNhan />
      <TimKiem />
    </div>
  );
};

export default leftSidebar;
