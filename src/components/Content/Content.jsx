import { useRef } from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import './Content.scss';
import MainContainer from './Main/MainContainer';
import SidebarContainer from './Sidebar/SidebarContainer';

const Content = () => {
	const sidebarTitleRef = useRef();
	const firstSidebarItem = useRef();

	return (
		<div className="content">
			<SidebarContainer sidebarTitle={sidebarTitleRef} sidebarItem={firstSidebarItem}/>
			<MainContainer sidebarTitle={sidebarTitleRef} sidebarItem={firstSidebarItem}/>
		</div>
	)
}

export default withAuthRedirect(Content);