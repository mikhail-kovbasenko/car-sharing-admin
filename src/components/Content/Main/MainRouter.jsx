import { Route, Switch } from "react-router-dom";
import CarsContainer from "./Cars/CarsContainer";
import OrdersContainer from "./Orders/OrdersContainer";

const MainRouter = () => {
	return (
		<Switch>
			<Route path="/admin/orders" component={OrdersContainer} />
			<Route path="/admin/cars" component={CarsContainer}/>
		</Switch>
	)
}

export default MainRouter;