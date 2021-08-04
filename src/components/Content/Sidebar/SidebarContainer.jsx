import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const SidebarContainer = () => {
	const sidebarItems = useSelector(state => state.sidebar.items);

	return <Sidebar items={sidebarItems}/>
}

export default SidebarContainer;