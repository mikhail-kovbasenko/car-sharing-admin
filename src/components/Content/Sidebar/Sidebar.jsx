import './Sidebar.scss';
import logo from './../../../commons/images/login/login-logo.svg'
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = ({items}) => {
	const getSidebarItems = items.map(item => <SidebarItem key={item.id} data={item}/>);

	return (
		<div className="sidebar">
			<div className="sidebar__container">
				<div className="sidebar__title">
					<div className="sidebar__title-logo">
						<img src={logo} alt="sidebar-logo" />
					</div>
					<div className="sidebar__title-text">Need for drive</div>
				</div>
				<div className="sidebar__items">
					{getSidebarItems}
				</div>
			</div>
		</div>
	)
}

export default Sidebar;