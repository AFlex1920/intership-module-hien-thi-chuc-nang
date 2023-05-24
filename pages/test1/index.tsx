import ChucNang from "@/components/chucnang/chucnang";
import { AppShell } from "@mantine/core";

export default function home() {
  return (
    <>
      <div className="border m-2 p-2 relative">
        Main
        <div>main</div>
        <div>main</div> <div>main</div> <div>main</div> <div>main</div>{" "}
        <div>main</div> <div>main</div> <div>main</div> <div>main</div>{" "}
        <div>main</div> <div>main</div>
        <div className="z-100000000 absolute">
          <ChucNang />
        </div>
      </div>
      {/* <div className="h-auto border m-2 p-2">Header</div>
      <div className="border h-auto m-2 p-2">Navbar</div>
      <div className="border m-2 p-2">
        Main
        <ChucNang />
      </div>
      <div className="border h-auto m-2 p-2">Fotter</div> */}
      {/* <AppShell>
        <ChucNang />
      </AppShell> */}
    </>
  );
}
