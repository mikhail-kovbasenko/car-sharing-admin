import { getCorrectImgSrc, getCorrectPriceFormat } from "../../utils/secondaryFunctions";
import CustomTable from "./CustomTable";
import defaultCar from './../../commons/images/main/orders/default-cars.jpeg';
import { withRouter } from "react-router-dom";

const CustomTableContainer = ({items, list, handleClick}) => {
	if(items.length < 1) return null;

	const checkProp = (data, listItem) => {
		const props = listItem.src.split('.');
		const value = (function(arr) {
			let result = data;

			for(let item of arr) {
				if(!result[item]) {
					result = null;
					break;
				}

				result = result[item];
			}

			return result;
		})(props);

		if(!value) return '---';

		return formateDataByType(value, listItem);
	}
	const formateDataByType = (value, listItem) => {
		switch(listItem.formmating) {
			case 'date': {
				return new Intl.DateTimeFormat('ru', {
					day: 'numeric',
					month: 'numeric',
					year: 'numeric',
				}).format(new Date(value));
			}
			case 'price': {
				return getCorrectPriceFormat(value) + ' ₽';
			}
			case 'join': {
				if(value.length < 1) return '---';

				return value.join(', ');
			}
			case 'img': {
				return (
					<img src={getCorrectImgSrc(value)} 
					     crossOrigin="anonymous" 
						  referrerPolicy="origin" 
						  onError={event => event.target.src = defaultCar}
						  alt="car-model" />
				)
			}
			default: {
				if(value === 'undefined') return '---';

				return value;
			};
		}
	}
	const openCarPageById = id => {

	}

	return <CustomTable items={items} 
							  list={list} 
							  checkProp={checkProp} 
							  handleClick={handleClick} 
							/>
}

export default CustomTableContainer;