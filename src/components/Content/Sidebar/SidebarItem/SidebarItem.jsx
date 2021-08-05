import  './../Sidebar.scss';

const SidebarItem = ({data, sidebarRef}) => {
	const {id, title, img} = data;
	const imgPath = require(`./../../../../commons/images/sidebar/${img}.svg`);
	const ref = id === 1 ? sidebarRef : null;
	
	return (
		<div className="sidebar__item" ref={ref}>
			<div className={`sidebar__item-container ${id === 1 && 'first-item'}`}>
				<div className="sidebar__item-logo">
					<img src={imgPath.default} alt={title} />
				</div>
				<div className="sidebar__item-title">{title}</div>
			</div>
		</div>
	)
}

export default SidebarItem;