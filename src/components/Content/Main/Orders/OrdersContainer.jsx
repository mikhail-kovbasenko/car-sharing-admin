import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../../../commons/Preloader/Preloader";
import { toggleIsFetchingActionCreator } from "../../../../redux/reducers/app";
import { getOrdersFromServer } from "../../../../redux/reducers/orders";
import Orders from "./Orders"

const OrdersContainer = () => {
	const dispatch = useDispatch();

	const token = useSelector(state => state.auth.access);
	const itemsOnPage = useSelector(state => state.orders.itemsOnPage);
	const currentPage = useSelector(state => state.orders.currentPage);
	const itemsCount = useSelector(state => state.orders.itemsCount);
	const orders = useSelector(state => state.orders.items);
	
	useEffect(() => {
		dispatch(getOrdersFromServer(token, itemsOnPage, currentPage));
	}, [])
	return (
			!orders
			? <Preloader/>
			: <Orders itemsOnPage={itemsOnPage} 
						 currentPage={currentPage}
						 itemsCount={itemsCount}
						 items={orders}
						 token={token}
						 itemsOnPage={itemsOnPage}
					  />
	)
			 
}

export default OrdersContainer;