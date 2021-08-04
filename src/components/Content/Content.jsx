import './Content.scss';
import Main from './Main/Main';
import SidebarContainer from './Sidebar/SidebarContainer';

const Content = () => {
	return (
		<div className="content">
			<SidebarContainer/>
			<Main/>
		</div>
	)
}

export default Content;