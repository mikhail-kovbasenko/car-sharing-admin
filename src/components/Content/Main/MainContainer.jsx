import { withRouter } from 'react-router-dom';
import './Main.scss';
import { useEffect } from 'react';
import Main from './Main';



const MainContainer = ({sidebarTitle, sidebarItem, history}) => {
	const getMainContentHeaderTitle = () => {
		const path = history.location.pathname;
		const type = (path => {
			if(path.split('/').length > 3) return path.slice(0, path.lastIndexOf('/'));

			return path;
		})(path);

		switch(type) {
			case '/admin/orders': return 'Заказы';
			case '/admin/cars': return 'Автомобили';
			case '/admin/car': return 'Карточка автомобиля';
			default: return '';
		}
	}
	useEffect(() => {
		const path = history.location.pathname;
		if(path === '/admin') {
			history.push('/admin/orders');
		}
	}, []);
	return <Main sidebarItem={sidebarItem} sidebarTitle={sidebarTitle} getMainContentHeaderTitle={getMainContentHeaderTitle}/>
		
	
}


export default withRouter(MainContainer);