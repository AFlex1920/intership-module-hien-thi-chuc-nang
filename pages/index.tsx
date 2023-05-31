import Split from "react-split";
import LeftSidebar from "@/components/components-phieu-tiep-nhan-benh-nhan/left-sidebar/left-sidebar";
import RightSidebar from "@/components/components-phieu-tiep-nhan-benh-nhan/right-sidebar/right-sidebar";
import MainContent from "@/components/components-phieu-tiep-nhan-benh-nhan/main/main";

const home = () => {
  return (
    <>
      <Split className="split">
        <div className="w-fit">
          <LeftSidebar />
        </div>
        <div className="w-fit">
          <MainContent />
        </div>
        <div className="w-fit">
          {/* <RightSidebar /> */}
          <LeftSidebar />
        </div>
      </Split>
    </>
  );
};

export default home;
