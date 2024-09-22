import TopSideBar from "../components/top.sidebar"
import { FunctionComponent } from "react";
import { TopSideBarProps } from "../models";

const SideBarLayout: FunctionComponent<TopSideBarProps> = ({sideBarChildren}) => {
    return <div>
        <TopSideBar sideBarChildren={sideBarChildren}/>
    </div>
}
export default SideBarLayout;