import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { useErrorHandler } from "react-error-boundary";
import defaultState from "./../../../../utils/defaultInputState";
import Preloader from "./../../../../commons/Preloader/Preloader";
import { getCarById, setNewCarActionCreator } from "./../../../../redux/reducers/car/action-creators-car";
import Car from "./Car";
import { mainAPI } from "../../../../api/api";

const CarContainer = ({match}) => {
	const dispatch = useDispatch();
	const handleError = useErrorHandler();

	const [formFieldData, setFormFieldData] = useState(defaultState);
	const [procent, setProcent] = useState(0);

	const token = useSelector(state => state.auth.access);
	const car = useSelector(state => state.car.item);
	const isFetching = useSelector(state => state.app.isFetchingContent);
	const description = useSelector(state => state.car.description);
	const img = useSelector(state => state.car.img);

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
		const sendObject = {
			name: 'Теst',
			number: 'Test',
			thumbnail: img,
			description: 'Test',
			categoryId: {
				id: "600598a3ad015e0bb699774c",
			},
			colors: ["Green", "Blue"],
			priceMin: 1000,
			priceMax: 2000
		}
		console.log(sendObject);
		mainAPI.setNewCar(token, sendObject).then(response => console.log(response));
	}

	useEffect(() => {
		const id = match.params.carId;

		id ? dispatch(getCarById(token, id, handleError)) : dispatch(setNewCarActionCreator());

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
	}, [car, description, img])
	useEffect(() => {
		calculateFillingProcent();
	}, [formFieldData])
	useEffect(() => {
		setFormFieldData({...formFieldData, colorItems: null});
	}, [])
	console.log(formFieldData);
	return !car || isFetching 
			 ? <Preloader/>
			 : <Car formFieldData={formFieldData}
			 		  procent={procent}
					  updateForm={updateFormFieldData}
					  setFormFieldData={setFormFieldData}
					  sendData={sendCarDataInServer}
			 	/>
}

export default withRouter(CarContainer)