import './Car.scss';
import CarModel from './CarModel/CarModel';
import CarSettings from './CarSettings/CarSettings';

const Car = ({color, addColor, formData}) => {
	return (
		<div className="car">
			<div className="car__container">
				<CarModel/>
				<CarSettings color={color} addColor={addColor} formData={formData}/>
			</div>
		</div>
	)
}


export default Car;