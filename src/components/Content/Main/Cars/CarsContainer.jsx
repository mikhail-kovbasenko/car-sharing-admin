import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Preloader from "../../../../commons/Preloader/Preloader";
import { getCarsFromServer } from "../../../../redux/reducers/cars";
import Cars from "./Cars";

const CarsContainer = ({history}) => {
	const dispatch = useDispatch();

	const token = useSelector(state => state.auth.access);
	const {items, itemsCount, currentPage, itemsOnPage} = useSelector(state => state.cars);

	const openCarItemById = id => {
		history.push('/admin/car/' + id);
	}

	useEffect(() => {
		dispatch(getCarsFromServer(token, itemsOnPage, currentPage));
	}, [])
	
	return !items
			 ? <Preloader/>
			 :	<Cars items={items}
						itemsOnPage={itemsOnPage}
						token={token}
						itemsCount={itemsCount}
						openCar={openCarItemById}
			 	/>
}

export default withRouter(CarsContainer);