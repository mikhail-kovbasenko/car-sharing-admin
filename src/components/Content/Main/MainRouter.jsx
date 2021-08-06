import { Route, Switch } from "react-router-dom";
import OrdersContainer from "./Orders/OrdersContainer";

const MainRouter = () => {
	return (
		<Switch>
			<Route path="/admin/orders" component={OrdersContainer} />
		</Switch>
	)
}

export default MainRouter;