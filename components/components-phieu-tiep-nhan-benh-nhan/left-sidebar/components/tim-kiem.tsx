import React from "react";
import { IconSearch, IconX } from "@tabler/icons-react";
export default function TimKiem(props) {
  return (
    <div className="h-full w-full">
      <div className="h-fit w-full">
        <div className=" font-bold bg-cyan-500 rounded-t-sm">
          <p className="pl-2 ">Tìm kiếm</p>
        </div>

        <div>
          <div className="border border-cyan-300 rounded-sm">
            <div className="grid-cols-12  grid">
              <label for="khoakham" className="col-span-3">
                Tìm kiếm:
              </label>
              <input
                type="text"
                style={{ outline: 0 }}
                id="khoakham"
                className="col-span-9  border border-cyan-500"
              ></input>
            </div>
            <div className="grid-cols-12 grid">
              <label for="date" className="mt-0.5 col-span-3">
                Tìm theo:
              </label>
              <select
                style={{ outline: 0 }}
                id="khoakham"
                className="col-span-7 mt-0.5  border border-cyan-500"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                {/* <input className="w-full" type="text" name="name" /> */}
              </select>
              <div className="col-span-1 border border-cyan-400 h-4 mt-0.5">
                <IconSearch className="h-3 w-3 pt-0.5 "></IconSearch>
              </div>
              <div className="col-span-1 border border-cyan-400 h-4 mt-0.5">
                <IconX className="h-4 w-4 text-red-500"></IconX>
              </div>
            </div>
            <div className="grid grid-cols-12 my-0.5">
              <button className=" font-semibold col-span-12 border border-cyan-500 rounded-sm p-0.5">
                Tìm kiếm bệnh nhân theo nhiều điều kiện
              </button>
            </div>
            <div className="grid grid-cols-12">
              <button className="col-span-10 font-semibold border rounded-sm border-cyan-500 mr-0.5">
                Xem lịch sử tiếp nhận bệnh
              </button>
              <button className="col-span-2 border border-cyan-500 rounded-sm">
                Barcode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
