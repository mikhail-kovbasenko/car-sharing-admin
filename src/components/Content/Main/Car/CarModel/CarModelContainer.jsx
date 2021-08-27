import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCorrectImgSrc } from "./../../../../../utils/secondaryFunctions";
import { setCarImgActionCreator } from "./../../../../../redux/reducers/car/action-creators-car";
import defaultCar from "./../../../../../commons/images/main/orders/default-cars.jpeg";
import CarModel from "./CarModel";

const CarModelContainer = props => {
	const dispatch = useDispatch();

	const textareaRef = useRef(null);
	const imgRef = useRef(null)
	
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
	const changeDescription = value => {
		dispatch((value));
	}
	const changeImg = event => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			imgRef.current.src = reader.result;
			

			dispatch(setCarImgActionCreator({
				path: reader.result,
				size: file.size,
				mimetype: file.type,
				originalname: file.name
			}))
		}

		reader.readAsDataURL(file);
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
						  imgRef={imgRef}
						  changeImg={changeImg}
						  defaultCar={defaultCar}
						/>
}

export default CarModelContainer;