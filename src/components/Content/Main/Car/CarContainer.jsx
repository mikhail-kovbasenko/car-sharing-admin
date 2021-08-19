import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Preloader from "../../../../commons/Preloader/Preloader";
import { toggleIsErrorActionCreator } from "../../../../redux/reducers/app";
import { getCarById, setNewCarActionCreator } from "../../../../redux/reducers/car";
import Car from "./Car";
import { useErrorHandler } from "react-error-boundary";

const CarContainer = ({match}) => {
	const token = useSelector(state => state.auth.access);
	const car = useSelector(state => state.car.item);
	const handleError = useErrorHandler();
	const dispatch = useDispatch();

	useEffect(() => {
		
			const id = match.params.carId;

			id ? dispatch(getCarById(token, id, handleError)) : dispatch(setNewCarActionCreator());
	}, [])

	return !car ? <Preloader/> : <Car item={car}/>
}

export default withRouter(CarContainer);