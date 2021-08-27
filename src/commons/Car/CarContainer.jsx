// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { withRouter } from "react-router-dom";
// import Preloader from "../../../../commons/Preloader/Preloader";
// import { addNewColorItemActionCreator, getCarById, setCarImgActionCreator, setNewCarActionCreator, toggleColorCheckboxActionCreator } from "../../../../redux/reducers/car/action-creators-car";
// import Car from "./Car";
// import { useErrorHandler } from "react-error-boundary";
// import defaultCar from './../../../../commons/images/main/orders/default-cars.jpeg';

import { withRouter } from "react-router-dom";
import Car from "./Car";

const CarContainer = ({match}) => {
	const defaultState = {
		name: '',
		color: '',
		type: '',
		priceMin: '',
		priceMax: '',
		number: '',
	}

	const dispatch = useDispatch();

	const token = useSelector(state => state.auth.access);
	const car = useSelector(state => state.car.item);
	const description = useSelector(state => state.car.description);
	const isFetching = useSelector(state => state.app.isFetchingContent);
	const colorItemCurrentId = useSelector(state => state.car.colorItemCurrentId);
	const colorItems = useSelector(state => state.car.colorItems);
	const img = useSelector(state => state.car.img);

	const defaultStateFilling = [...Object.entries(defaultState), ['description', description], ['img', ''], ['checkedColor', []]];
	const defaultStateFillingConvert = Object.fromEntries(defaultStateFilling);
	delete defaultStateFillingConvert['color'];

	const [formData, setFormData] = useState(defaultState);
	const [fillData, setFillData] = useState(defaultStateFillingConvert);
	const [procent, setProcent] = useState(0);

	const colorRef = useRef();
	const imgRef = useRef();

	const handleError = useErrorHandler();
	const addNewColorItem = prop => {
		dispatch(addNewColorItemActionCreator({
			id: colorItemCurrentId,
			value: prop.color,
			checked: false
		}))
		prop.color = '';
	}
	const calculateFillingProcent = () => {
		const valuesLength = Object.entries(fillData).length;
		const noEmptyValues = Object.values(fillData).filter(item => {
			if(Array.isArray(item) && item.length !== 0) {
				return item;
			}
			if(!Array.isArray(item) && item !== '') return item;
		});
		const procent = Math.trunc((noEmptyValues.length * 100) / valuesLength);

		setProcent(procent);
		
	}	
	const setNewFillDataState = event => {
		if(event.target.name === 'color' || event.target.type === 'checkbox') return;

		setFillData({
			...fillData,
			[event.target.name]: event.target.value
		})

	}
	const changeColorCheckboxValue = value => {
		let checkedColor = fillData.checkedColor.slice();
		
		if(checkedColor.includes(value)) {
			const index = checkedColor.indexOf(value);
			checkedColor.splice(index, 1);
		} else {
			checkedColor.push(value);
		}
		setFillData({
			...fillData,
			checkedColor
		})
		dispatch(toggleColorCheckboxActionCreator(value))
	}
	const changeImg = event => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			imgRef.current.src = reader.result;
		}

		if(file) {
			reader.readAsDataURL(file);
			setFillData({...fillData, img: imgRef.current.src});
			dispatch(setCarImgActionCreator({path: imgRef.current.src}))
		} else {
			imgRef.current.src = defaultCar;
		}
	}
	useEffect(() => {
		calculateFillingProcent()
	}, [fillData])
	useEffect(() => {
		const id = match.params.carId;

		id ? dispatch(getCarById(token, id, handleError)) : dispatch(setNewCarActionCreator());
	}, [])
	useEffect(() => {
		if(car && !Array.isArray(car) && typeof car === 'object') {

			const {name, number, priceMax, priceMin, categoryId} = car;
			const type = categoryId ? categoryId.name : '';

			setFormData({name, number, priceMax, priceMin, color: '', type});
			setFillData({...fillData, ...{name, number, priceMax, priceMin, type}})
			return () => dispatch(setNewCarActionCreator());
		}
	}, [car]);
	useEffect(() => {
		if(description || img) {
			setFillData({...fillData, description, img: img});
		}
	}, [description, img])

	console.log(fillData);
	return !car || isFetching ? <Preloader/> : <Car 
												color={colorRef}
												addColor={addNewColorItem}
												formData={formData}
												procent={procent}
												calculate={setNewFillDataState}
												colorItems={colorItems}
												toggleCheckbox={changeColorCheckboxValue}
												description={description}
												imgRef={imgRef}
												img={img}
												name={fillData.name}
												type={fillData.type}
												changeImg={changeImg}
											/>
}

// export default withRouter(CarContainer);
const CarContainer = ({match}) => {
	return <Car/>
}

export default withRouter(CarContainer);