import { useRef } from 'react';
import './Content.scss';
import Main from './Main/Main';
import SidebarContainer from './Sidebar/SidebarContainer';

const Content = () => {
	const sidebarTitleRef = useRef();
	const firstSidebarItem = useRef();

	return (
		<div className="content">
			<SidebarContainer sidebarTitle={sidebarTitleRef} sidebarItem={firstSidebarItem}/>
			<Main sidebarTitle={sidebarTitleRef} sidebarItem={firstSidebarItem}/>
		</div>
	)
}

export default Content;