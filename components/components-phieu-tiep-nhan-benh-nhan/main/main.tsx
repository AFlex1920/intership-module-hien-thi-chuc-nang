import DoiTuongBenhNhan from "./components/doi-tuong-benh-nhan";
import ThongTinBenhNhan from "./components/thong-tin-benh-nhan";
import ThongTinChung from "./components/thong-tin-chung";
import ThongTinChuyenVien from "./components/thong-tin-chuyen-vien";
import ThongTinSinhHieu from "./components/thong-tin-sinh-hieu";

const MainContent = () => {
  return (
    <div className="h-full w-full border mr-1 p-0.5 border-cyan-500 rounded-sm">
      <div
        // style={{ height: "9%" }}
        className=" border w-full border-cyan-500 rounded-sm bg-cyan-100 "
      >
        <DoiTuongBenhNhan />
      </div>
      <div
        // style={{ height: "76%" }}
        className=" border mt-0.5 w-full border-cyan-500 rounded-sm "
      >
        <ThongTinChuyenVien />
      </div>
      <div
        // style={{ height: "14.4%" }}
        className=" w-full border mt-0.5 border-cyan-500 rounded-sm bg-cyan-300 "
      >
        <ThongTinSinhHieu />
      </div>
      <div
        // style={{ height: "14.4%" }}
        className=" w-full border mt-0.5 border-cyan-500 rounded-sm bg-cyan-300 "
      >
        <ThongTinChung />
      </div>
      <div
        // style={{ height: "14.4%" }}
        className=" w-full border mt-0.5 border-cyan-500 rounded-sm bg-cyan-300 "
      >
        <ThongTinBenhNhan />
      </div>
    </div>
  );
};

export default MainContent;
