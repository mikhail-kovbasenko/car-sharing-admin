import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Preloader from "../../../../commons/Preloader/Preloader";
import { getCarsFromServer } from "../../../../redux/reducers/cars";
import Cars from "./Cars";
import { useErrorHandler } from "react-error-boundary";

const CarsContainer = ({history}) => {
	const dispatch = useDispatch();
	const token = useSelector(state => state.auth.access);
	const {items, itemsCount, currentPage, itemsOnPage} = useSelector(state => state.cars);
	const handleError = useErrorHandler();

	const openCarItemById = id => {
		history.push('/admin/car/' + id);
	}
	useEffect(() => {
		dispatch(getCarsFromServer(handleError, token, itemsOnPage, currentPage));
	}, [])
	
	return !items
			 ? <Preloader/>
			 :	<Cars items={items}
						itemsOnPage={itemsOnPage}
						token={token}
						itemsCount={itemsCount}
						openCar={openCarItemById}
						handleError={handleError}
			 	/>
}

export default withRouter(CarsContainer);