import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { useErrorHandler } from "react-error-boundary";
import defaultState from "./../../../../utils/defaultInputState";
import Preloader from "./../../../../commons/Preloader/Preloader";
import { deleteCarById, getCarById, getCarCategories, setNewCarActionCreator, setNewCarInDatabase, updateCarById } from "./../../../../redux/reducers/car/action-creators-car";
import Car from "./Car";

const CarContainer = ({match, history}) => {
	const dispatch = useDispatch();
	const handleError = useErrorHandler();

	const [formFieldData, setFormFieldData] = useState(defaultState);
	const [procent, setProcent] = useState(0);

	const token = useSelector(state => state.auth.access);
	const car = useSelector(state => state.car.item);
	const isFetching = useSelector(state => state.app.isFetchingContent);
	const description = useSelector(state => state.car.description);
	const img = useSelector(state => state.car.img);
	const categoriesList = useSelector(state => state.car.categoriesList);
	const colorItems = useSelector(state => state.car.colorItems);
	const savedCarId = useSelector(state => state.car.savedCarId);

	const calculateFillingProcent = () => {
		const data = {...formFieldData};
		delete data['color'];

		const valuesLength = Object.entries(data).length;
		const noEmptyValues = Object.values(data).filter(item => item !== '' && item !== null);

		const procent = Math.trunc((noEmptyValues.length * 100) / valuesLength);
		setProcent(procent);
	}
	const updateFormFieldData = event => {
		if(event.target.name === 'color' || event.target.type === 'checkbox') return;

		setFormFieldData({
			...formFieldData,
			[event.target.name]: event.target.value
		})
	}
	const sendCarDataInServer = data => {
		const id = match.params.carId;

		const colors = colorItems.filter(item => {
			if(item.checked) return item;
		}).map(item => item.name);
		const categoryId = categoriesList.find(item => item.name === data.type);

		const object = {
			name: data.name,
			number: data.number,
			thumbnail: img,
			description,
			categoryId,
			colors,
			priceMin: data.priceMin,
			priceMax: data.priceMax
		}
	
		id ? dispatch(updateCarById(token, id, object)) : dispatch(setNewCarInDatabase(token, object));
	}
	const deleteCar = () => {
		const id = match.params.carId;

		if(!id) return;

		Promise.all([dispatch(deleteCarById(token, id))]).then(() => history.push('/admin/cars'))
	}

	useEffect(() => {
		const id = match.params.carId;

		id ? dispatch(getCarById(token, id, handleError)) : dispatch(setNewCarActionCreator());
		
		if(categoriesList.length < 1) dispatch(getCarCategories(token));

		return () => dispatch(setNewCarActionCreator());
	}, [])
	useEffect(() => {
		if(car && !Array.isArray(car) && typeof car === 'object') {
			const {name = '', number = '', priceMax = '', priceMin = '', categoryId} = car;
			const type = categoryId ? categoryId.name : '';
			
			setFormFieldData({...formFieldData, name, number, priceMax, priceMin, color: '', type, description, img});
		} else if(car && Array.isArray(car)) {
			setFormFieldData({...formFieldData, description, img});
		} 
	}, [car])
	useEffect(() => {
		setFormFieldData({...formFieldData, description, img});
	}, [description, img])
	useEffect(() => {
		calculateFillingProcent();
	}, [formFieldData])
	useEffect(() => {
		if(savedCarId) {
			history.push('/admin/car/' + savedCarId);
		}
	}, [savedCarId])
	
	return !car || isFetching 
			 ? <Preloader/>
			 : <Car formFieldData={formFieldData}
			 		  procent={procent}
					  updateForm={updateFormFieldData}
					  setFormFieldData={setFormFieldData}
					  sendData={sendCarDataInServer}
					  categoriesList={categoriesList}
					  deleteCar={deleteCar}
			 	/>
}

export default withRouter(CarContainer)