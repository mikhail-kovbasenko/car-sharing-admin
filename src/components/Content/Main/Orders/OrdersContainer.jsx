import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersFromServer } from "../../../../redux/reducers/orders";
import Orders from "./Orders"

const OrdersContainer = () => {
	const dispatch = useDispatch();

	const state = useSelector(state => state.auth);

	console.log(state);

	useEffect(() => {
		dispatch(getOrdersFromServer());
	}, [])
	return <Orders/>
}

export default OrdersContainer;