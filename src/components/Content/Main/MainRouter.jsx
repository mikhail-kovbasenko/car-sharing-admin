import { Route, Switch } from "react-router-dom";
import CarContainer from "./Car/CarContainer";
import CarsContainer from "./Cars/CarsContainer";
import OrdersContainer from "./Orders/OrdersContainer";

const MainRouter = () => {
	return (
		<Switch>
			<Route path="/admin/orders" component={OrdersContainer} />
			<Route path="/admin/cars" component={CarsContainer}/>
			<Route path="/admin/car/:carId?" component={CarContainer}/>
		</Switch>
	)
}

export default MainRouter;