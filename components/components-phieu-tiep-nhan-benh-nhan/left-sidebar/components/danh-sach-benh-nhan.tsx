import React from "react";
export default function DanhSachBenhNhan() {
  return (
    <div className="h-full w-full">
      <div className="h-fit w-full">
        <div className=" font-bold bg-cyan-500 rounded-t-sm">
          <p className="pl-2 ">Danh sách bệnh nhân</p>
        </div>
        <div className=" grid grid-cols-12 ">
          <div className="col-span-10 ">
            <div className="border border-cyan-300 rounded-sm">
              <div className="grid-cols-12  grid">
                <label for="khoakham" className="col-span-5">
                  Khoa khám:
                </label>
                <select
                  style={{ outline: 0 }}
                  id="khoakham"
                  className="col-span-7  border border-cyan-500"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  {/* <input className="w-full" type="text" name="name" /> */}
                </select>
              </div>
              <div className="grid-cols-12 grid">
                <label for="date" className="col-span-5">
                  Ngay:
                </label>
                <input
                  style={{ outline: 0 }}
                  className="col-span-7 border mt-0.5 border-cyan-500"
                  type="date"
                  id="birthday"
                  name="birthday"
                />
              </div>
            </div>
          </div>
          <div style={{ margin: "1px 1px 0 0 " }} className="col-span-2 ">
            <button className="border border-cyan-400 w-full h-full rounded-sm">
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
