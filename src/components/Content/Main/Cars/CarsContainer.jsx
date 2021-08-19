import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../../../commons/Preloader/Preloader";
import { getCarsFromServer } from "../../../../redux/reducers/cars";
import Cars from "./Cars";

const CarsContainer = () => {
	const dispatch = useDispatch();

	const token = useSelector(state => state.auth.access);
	const {items, itemsCount, currentPage, itemsOnPage} = useSelector(state => state.cars);

	useEffect(() => {
		dispatch(getCarsFromServer(token, itemsOnPage, currentPage));
	}, [])
	
	return !items
			 ? <Preloader/>
			 :	<Cars items={items}
						itemsOnPage={itemsOnPage}
						token={token}
						itemsCount={itemsCount}
			 	/>
}

export default CarsContainer;