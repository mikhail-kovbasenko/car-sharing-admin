import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../../../commons/Preloader/Preloader";
import { getOrdersFromServer } from "../../../../redux/reducers/orders";
import Orders from "./Orders"

const OrdersContainer = () => {
	const dispatch = useDispatch();

	const token = useSelector(state => state.auth.access);
	const itemsOnPage = useSelector(state => state.auth.itemsOnPage);
	const currentPage = useSelector(state => state.auth.currentPage);
	const isFetching = useSelector(state => state.app.isFetching);
	const itemsCount = useSelector(state => state.auth.itemsCount);


	useEffect(() => {
		dispatch(getOrdersFromServer(token, itemsOnPage, currentPage));
	}, [])
	return (
			isFetching
			? <Preloader/>
			: <Orders itemsOnPage={itemsOnPage} 
						 currentPage={currentPage}
						 itemsCount={itemsCount}
					  />
	)
			 
}

export default OrdersContainer;