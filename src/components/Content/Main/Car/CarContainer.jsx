import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Preloader from "../../../../commons/Preloader/Preloader";
import { addNewColorItemActionCreator, getCarById, setNewCarActionCreator } from "../../../../redux/reducers/car";
import Car from "./Car";
import { useErrorHandler } from "react-error-boundary";

const CarContainer = ({match}) => {
	const defaultState = {
		name: '',
		color: '',
		type: '',
		priceMin: '',
		priceMax: '',
		number: '',
	}
	const [formData, setFormData] = useState(defaultState);
	const dispatch = useDispatch();

	const token = useSelector(state => state.auth.access);
	const car = useSelector(state => state.car.item);
	const isFetching = useSelector(state => state.app.isFetchingContent);
	const colorItemCurrentId = useSelector(state => state.car.colorItemCurrentId);

	const colorRef = useRef(null);

	const handleError = useErrorHandler();

	const addNewColorItem = value => {
		dispatch(addNewColorItemActionCreator({
			id: colorItemCurrentId,
			value,
			checked: false
		}))
	}
	useEffect(() => {
		
			const id = match.params.carId;

			id ? dispatch(getCarById(token, id, handleError)) : dispatch(setNewCarActionCreator());
	}, [])
	useEffect(() => {
		if(car && !Array.isArray(car) && typeof car === 'object') {

			const {name, number, priceMax, priceMin, categoryId} = car;
			const type = categoryId ? categoryId.name : '';

			setFormData({name, number, priceMax, priceMin, color: '', type});

			return () => dispatch(setNewCarActionCreator());
		}
	}, [car]);
	
	return !car || isFetching ? <Preloader/> : <Car 
												color={colorRef}
												addColor={addNewColorItem}
												formData={formData}
											/>
}

export default withRouter(CarContainer);