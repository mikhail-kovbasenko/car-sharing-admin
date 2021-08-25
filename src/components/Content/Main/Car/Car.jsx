import './Car.scss';
import CarModelContainer from './CarModel/CarModelContainer';
import CarSettingsContainer from './CarSettings/CarSettingsContainer';

const Car = () => {
	return (
		<div className="car">
			<div className="car__container">
				<CarModelContainer/>
				<CarSettingsContainer/>
			</div>
		</div>
	)
}

export default Car;