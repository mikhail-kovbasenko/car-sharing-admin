import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useErrorHandler } from "react-error-boundary"
import { withRouter } from "react-router-dom"
import { defaultState } from "../../../../utils/defaultInputState"
import Car from "./Car"
import { getCarById, setNewCarActionCreator } from "./../../../../redux/reducers/car/action-creators-car";
import Preloader from "../../../../commons/Preloader/Preloader";


const CarContainer = ({match}) => {
	const dispatch = useDispatch();

	const [fillData, setFillData] = useState(false);
	const [procent, setProcent] = useState(0);

	const handleError = useErrorHandler();

	const token = useSelector(state => state.auth.access); 
	const car = useSelector(state => state.car.item);
	const description = useSelector(state => state.car.description);
	const isFetching = useSelector(state => state.app.isFetchingContent);
	const colorItemCurrentId = useSelector(state => state.car.colorItemCurrentId);
	const colorItems = useSelector(state => state.car.colorItems);
	const img = useSelector(state => state.car.img);

<<<<<<< HEAD
	const colorRef = useRef(null);

	const handleError = useErrorHandler();

	const addNewColorItem = value => {
		dispatch(addNewColorItemActionCreator({
			id: colorItemCurrentId,
			value,
			checked: false
		}))
	}
=======
>>>>>>> 6be43b48f018e6a9967969af031c29cbdc45c605
	useEffect(() => {
		const id = match.params.carId;

		id ? dispatch(getCarById(token, id, handleError)) : dispatch(setNewCarActionCreator());
	}, [])
	useEffect(() => {
		if(!fillData) {
			const defaultFillState = [...Object.entries(defaultState), ['description', description], ['img', ''], ['checkedColor', []]];
			const defaultFillStateConvert = Object.fromEntries(defaultFillState);
			
			delete defaultFillStateConvert['color'];

			setFillData(defaultFillStateConvert);
		}
		if(car && !Array.isArray(car) && typeof car === 'object') {
			const {name, number, priceMax, priceMin, categoryId, description} = car;
			const type = categoryId ? categoryId.name : '';
			setFillData({...fillData, ...{name, number, priceMax, priceMin, type, description}})

			return () => dispatch(setNewCarActionCreator());
		}

	}, [car])
	console.log(fillData);
	return !car || isFetching 
			 ? <Preloader/> 
			 : <Car defaultState={defaultState}
					  fillData={fillData}
					  procent={procent}
			      />
}

export default withRouter(CarContainer)