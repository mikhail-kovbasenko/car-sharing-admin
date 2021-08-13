import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Preloader from "../../../../commons/Preloader/Preloader";
import { getCarById, setNewCarActionCreator } from "../../../../redux/reducers/car";
import Car from "./Car";

const CarContainer = ({match}) => {
	const token = useSelector(state => state.auth.access);
	const car = useSelector(state => state.car.item);

	const dispatch = useDispatch();

	useEffect(() => {
		const id = match.params.carId;

		id ? dispatch(getCarById(token, id)) : dispatch(setNewCarActionCreator());

	}, [])

	return !car ? <Preloader/> : <Car item={car}/>
}

export default withRouter(CarContainer);