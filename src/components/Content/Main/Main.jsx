import { Route, Switch, withRouter } from 'react-router-dom';
import './Main.scss';
import OrdersContainer from './Orders/OrdersContainer';
import MainHeaderContainer from './MainHeader/MainHeaderContainer';
import { useEffect } from 'react';

const Main = ({sidebarTitle, sidebarItem, history}) => {
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
					<div className="main__content-header">Заказы</div>
					<div className="main__content-content">
						<Switch>
							<Route path="/admin/orders" component={OrdersContainer}/>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Main);