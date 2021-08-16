import './Car.scss';
import CarModel from './CarModel/CarModel';
import CarSettings from './CarSettings/CarSettings';

const Car = () => {
	return (
		<div className="car">
			<div className="car__container">
				<CarModel/>
				<CarSettings/>
			</div>
		</div>
	)
}


export default Car;