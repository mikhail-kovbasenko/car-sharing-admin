import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const SidebarContainer = ({sidebarTitle, sidebarItem}) => {
	const sidebarItems = useSelector(state => state.sidebar.items);

	return <Sidebar items={sidebarItems} sidebarTitle={sidebarTitle} sidebarItem={sidebarItem}/>
}

export default SidebarContainer;