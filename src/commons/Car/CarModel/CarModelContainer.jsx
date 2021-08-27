// import { useEffect } from "react";
// import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCarDescriptionActionCreator } from "../../../../../redux/reducers/car/action-creators-car";
// import { getCorrectImgSrc } from "../../../../../utils/secondaryFunctions";
// import defaultCar from './../../../../../commons/images/main/orders/default-cars.jpeg';
// import CarModel from "./CarModel";

// const CarModelContainer = props => {
// 	const [loaded, setLoaded] = useState(false);
// 	const [isTextarea, setTextarea] = useState(false);
// 	const dispatch = useDispatch();

// 	const textareaRef = useRef();

// 	const onLoadImg = () => setLoaded(true);
// 	const getSrcForImg = (img) => {
// 		try {
// 			const path = img.path;
// 			return getCorrectImgSrc(path);
// 		} catch(e) {
// 			return defaultCar;
// 		}
// 	}
// 	const changeDescription = value => {
// 		dispatch(setCarDescriptionActionCreator(value))
// 	}
// 	const showTextareaOnDescription = () => {
// 		setTextarea(true);
// 	}
// 	useEffect(() => {
// 		if(textareaRef.current) {
// 			textareaRef.current.focus();
// 		}
// 	})
// 	return <CarModel {...props} 
// 						  loaded={loaded} 
// 						  setLoaded={setLoaded}
// 						  isTextarea={isTextarea}
// 						  setTextarea={setTextarea} 
// 						  onLoadImg={onLoadImg} 
// 						  getSrcForImg={getSrcForImg}
// 						  textareaRef={textareaRef}
// 						  defaultCar={defaultCar}
// 						  changeDescription={changeDescription}
// 						  showTextarea={showTextareaOnDescription}
// 						/>
// }	

// export default CarModelContainer;

const CarModelContainer = () => {
	return 
}