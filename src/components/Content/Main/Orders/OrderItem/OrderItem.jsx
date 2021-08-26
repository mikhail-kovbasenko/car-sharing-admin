import './../Orders.scss';
import defaultCar from './../../../../../commons/images/main/orders/default-cars.jpeg';
import { getCorrectDatetimeFormat, getCorrectImgSrc, getCorrectPriceFormat } from '../../../../../utils/secondaryFunctions';
const OrderItem = ({ data }) => {
	const getSrcForImg = car => {
		try {
			const path = car.thumbnail.path;

			return getCorrectImgSrc(path);
		} catch (e) {
			return defaultCar;
		}
	}
	const getCarName = car => {
		try {
			return car.name;
		} catch(e) {
			return '---';
		}
	}
	const getCityName = city => {
		try {
			return city.name;
		} catch(e) {
			return '---';
		}
	}
	const getPointName = point => {
		try {
			return point.address;
		} catch(e) {
			return '---';
		}
	}

	const getAutoDescription = (car, city, point) => {
		try {
			const carName = getCarName(car);
			const cityName = getCityName(city);
			const pointName = getPointName(point);

			return `${carName} в ${cityName}, ${pointName}`;
		} catch (e) {
			return 'Некорректные данные';
		}
	}
	const getCorrectDateFormat = (dateFrom, dateTo) => {
		try {
			const correctDateFrom = getCorrectDatetimeFormat(dateFrom);
			const correctDateTo = getCorrectDatetimeFormat(dateTo);

			return `${correctDateFrom} - ${correctDateTo}`;
		} catch (e) {
			return 'Некорректная дата';
		}
	}
	return (
		<div className="order-item">
			<div className="order-item__container">
				<div className="order-item__img">
					<img src={getSrcForImg(data.carId)} 
					     crossOrigin="anonymous" 
						  referrerPolicy="origin" 
						  onError={event => event.target.src = defaultCar}
						  alt="car-model" />
				</div>
				<div className="order-item__description">
					<div className="order-item__description-auto">
						{getAutoDescription(data.carId, data.cityId, data.pointId)}
					</div>
					<div className="order-item__description-date">{getCorrectDateFormat(data.dateFrom, data.dateTo)}</div>
					<div className="order-item__description-color">
						<span className="order-item__description-color-title">Цвет: </span>
						<span>{data.color}</span>
					</div>
				</div>
				<div className="order-item__info">
					<div className="order-item__info-container">
						<div className="order-item__element-group">
							<input type="checkbox" value="fuel" className="custom-checkbox" readOnly={true} checked={data.isFullTank}/>
							<label htmlFor="">Полный бак</label>
						</div>
						<div className="order-item__element-group">
							<input type="checkbox" value="babyChair" className="custom-checkbox" readOnly={true} checked={data.isNeedChildChair}/>
							<label htmlFor="">Детское кресло</label>
						</div>
						<div className="order-item__element-group">
							<input type="checkbox" value="rightHandDrive" className="custom-checkbox" readOnly={true} checked={data.isRightWheel}/>
							<label htmlFor="">Правый руль</label>
						</div>
					</div>
				</div>
				<div className="order-item__price">{`${getCorrectPriceFormat(data.price)} ₽`}</div>
				<div className="order-item__buttons">
					<div className="order-item__buttons-container">
						<div className="order-item__buttons-item">
							<a href="#" className="complete">Готово</a>
						</div>
						<div className="order-item__buttons-item">
							<a href="#" className="reject">Отмена</a>
						</div>
						<div className="order-item__buttons-item">
							<a href="#" className="edit">Изменить</a>							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderItem;