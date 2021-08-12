import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import './../Sidebar.scss';

const SidebarItem = ({ data, sidebarRef }) => {
	const { id, title, img, to } = data;
	const imgPath = require(`./../../../../commons/images/sidebar/${img}.svg`);
	const linkRef = useRef();
	const ref = id === 1 ? sidebarRef : null;

	return (
		<NavLink to={`/admin/${to}`} activeClassName="active" style={{color: '#3D5170'}} ref={linkRef}>
			<div className="sidebar__item" ref={ref}>
				<div className={`sidebar__item-container`}>
					<div className="sidebar__item-logo">
						<ReactSVG 
							src={imgPath.default}
							beforeInjection={svg => {
								const path = svg.children[0];

								if(linkRef.current.classList.contains('active')) {
									path.style.fill = '#007BFF'
								} else  {
									path.style.fill = '#CACEDB';
								}
							}}
						/>
					</div>
					<div className="sidebar__item-title">{title}</div>
				</div>
			</div>
		</NavLink>
	)
}

export default SidebarItem;