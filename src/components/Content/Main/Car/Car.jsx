import './Car.scss';
import CarModel from './CarModel/CarModel';
import CarSettings from './CarSettings/CarSettings';

const Car = ({color, addColor, formData, procent, calculate, colorItems,toggleCheckbox, description}) => {
	return (
		<div className="car">
			<div className="car__container">
				<CarModel procent={procent} description={description}/>
				<CarSettings color={color} addColor={addColor} formData={formData} calculate={calculate} colorItems={colorItems} toggleCheckbox={toggleCheckbox}/>
			</div>
		</div>
	)
}


export default Car;