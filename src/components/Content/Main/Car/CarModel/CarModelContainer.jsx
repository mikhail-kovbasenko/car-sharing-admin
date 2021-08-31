import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCorrectImgSrc } from "./../../../../../utils/secondaryFunctions";
import { setCarDescriptionActionCreator, setCarImgActionCreator } from "./../../../../../redux/reducers/car/action-creators-car";
import defaultCar from "./../../../../../commons/images/main/orders/default-cars.jpeg";
import CarModel from "./CarModel";

const CarModelContainer = props => {
	const dispatch = useDispatch();

	const textareaRef = useRef(null);
	
	const [loaded, setLoaded] = useState(false);
	const [isTextarea, setTextarea] = useState(false);

	const onLoadImg = () => setLoaded(true);
	const getSrcForImg = img => {
		try {
			return getCorrectImgSrc(img.path);
		} catch(e) {
			return defaultCar;
		}
	}
	const changeDescription = event => {
		dispatch(setCarDescriptionActionCreator(event.target.value));
	}

	useEffect(() => {
		if(textareaRef.current) {
			textareaRef.current.focus();
		}
	})
	return <CarModel {...props}
						  loaded={loaded}
						  setLoaded={setLoaded}
						  onLoadImg={onLoadImg}
						  isTextarea={isTextarea}
						  setTextarea={setTextarea}
						  textareaRef={textareaRef}
						  getSrcForImg={getSrcForImg}
						  changeDescription={changeDescription}
						  defaultCar={defaultCar}
						/>
}

export default CarModelContainer;