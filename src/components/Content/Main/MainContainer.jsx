import { withRouter } from 'react-router-dom';
import './Main.scss';
import MainHeaderContainer from './MainHeader/MainHeaderContainer';
import { useEffect } from 'react';
import MainFooter from './MainFooter/MainFooter';
import { useSelector } from 'react-redux';
import MainRouter from './MainRouter';



const MainContainer = ({sidebarTitle, sidebarItem, history}) => {
	const getMainContentHeaderTitle = () => {
		const path = history.location.pathname;

		switch(path) {
			case '/admin/orders': return 'Заказы';
			case '/admin/cars': return 'Автомобили';
			default: return '';
		}
	}
	useEffect(() => {
		const path = history.location.pathname;
		if(path === '/admin') {
			history.push('/admin/orders');
		}
	}, []);
	return (
		<div className="main">
			<div className="main__container">
				<MainHeaderContainer sidebarTitle={sidebarTitle} sidebarItem={sidebarItem}/>
				<div className="main__content">
					<div className="main__content-header">{getMainContentHeaderTitle()}</div>
					<MainRouter/>			
				</div>
				<MainFooter/>
			</div>
		</div>
	)
}


export default withRouter(MainContainer);