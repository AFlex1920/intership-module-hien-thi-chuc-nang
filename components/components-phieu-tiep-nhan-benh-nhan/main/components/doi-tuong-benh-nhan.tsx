import { IconSearch } from "@tabler/icons-react";

const DoiTuongBenhNhan = () => {
  return (
    <div>
      <div className=" font-bold bg-cyan-500 rounded-t-sm">
        <p className="pl-2 ">Đối tượng bệnh nhân</p>
      </div>
      <div className="grid grid-cols-12 my-0.5">
        <div className="col-span-1 mx-1 mt-0.5">Đối tượng</div>
        <div className="col-span-4 bg-white p-0.5 border border-cyan-400">
          <div className="grid grid-cols-2 ml-2">
            <div className="grid grid-cols-12 ">
              <input className="col-span-1 " type="radio" />
              <p className="col-span-11 ml-2">Bảo hiểm y tế</p>
            </div>
            <div className="grid grid-cols-12 ">
              <input className="col-span-1 " type="radio" />
              <p className="col-span-11 ml-2">Thu phí</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 mx-1 mt-0.5">Đối tượng</div>
        <div className="col-span-4 bg-white p-0.5 border border-cyan-400">
          <div className="grid grid-cols-2 ml-2">
            <div className="grid grid-cols-12 ">
              <input className="col-span-1 " type="radio" />
              <p className="col-span-11 ml-2">Đúng tuyến</p>
            </div>
            <div className="grid grid-cols-12 ">
              <input className="col-span-1 " type="radio" />
              <p className="col-span-11 ml-2">Trái tuyến</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-0.5 mx-1">
          <div className="grid grid-cols-2">
            <div>% Thanh toán</div>
            <input
              style={{ outline: 0 }}
              className="border border-cyan-600"
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 my-0.5">
        <p className="col-span-1 mx-1">Số thẻ BHYT </p>
        <div className="col-span-4">
          <div className="grid grid-cols-6">
            <div className="col-span-5">
              <div className="grid grid-cols-12">
                <input className="col-span-3 mr-0.5 border border-cyan-400 bg-white"></input>
                <input className="col-span-1 mr-0.5"></input>
                <input className="col-span-1 mr-0.5 border border-cyan-400 bg-white"></input>
                <input className="col-span-2 mr-0.5 border border-cyan-400 bg-white"></input>
                <input className="col-span-3 mr-0.5 border border-cyan-400 bg-white"></input>
                <div className="col-span-1 border border-cyan-300 w-4 h-4">
                  <IconSearch className="w-4 h-4 px-0.5"></IconSearch>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <p className="hidden"></p>
        </div>
        <button className="col-span-2 border border-cyan-200">
          Cập nhật giấy tờ &#91;Ctrl+C&#93;
        </button>
      </div>
      <div className="grid grid-cols-12 my-0.5">
        <div className="col-span-1 mx-1 mt-0.5">Ngày hiệu lực</div>
        <select
          style={{ outline: "0" }}
          className="col-span-4 bg-white p-0.5 border border-cyan-400"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <div className="col-span-2 mx-1 mt-0.5">Ngày hết hạn</div>
        <select
          style={{ outline: "0" }}
          className="col-span-5 bg-white p-0.5 border border-cyan-400"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="grid grid-cols-12 my-0.5">
        <div className="col-span-1 mx-1 mt-0.5">Nơi cấp</div>
        <select
          style={{ outline: "0" }}
          className="col-span-4 bg-white p-0.5 border border-cyan-400"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <div className="col-span-2 mx-1 mt-0.5">Nơi đăng ký</div>
        <div className="col-span-5">
          <div className="grid grid-cols-12">
            <select
              style={{ outline: "0" }}
              className="col-span-5 bg-white p-0.5 border border-cyan-400"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select
              style={{ outline: "0" }}
              className="col-span-7 bg-white p-0.5 border border-cyan-400"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 my-0.5">
        <div className="col-span-1 mx-1 mt-0.5">Mã khu vực</div>
        <select
          style={{ outline: "0" }}
          className="col-span-4 bg-white p-0.5 border border-cyan-400"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <div className="col-span-2 mx-1 mt-0.5">Ngày đủ 5 năm</div>
        <select
          style={{ outline: "0" }}
          className="col-span-5 bg-white p-0.5 border border-cyan-400"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
};

export default DoiTuongBenhNhan;
