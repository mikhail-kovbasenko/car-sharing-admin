import './Car.scss';
import CarModelContainer from './CarModel/CarModelContainer';
import CarSettingsContainer from './CarSettings/CarSettingsContainer';

const Car = ({formFieldData, procent, updateForm, setFormFieldData, sendData}) => {
	const {img, description, name, type} = formFieldData;

	return (
		<div className="car">
			<div className="car__container">
				<CarModelContainer procent={procent} img={img} description={description} name={name} type={type}/>
				<CarSettingsContainer formFieldData={formFieldData} updateForm={updateForm} setFormFieldData={setFormFieldData} sendData={sendData}/>
			</div>
		</div>
	)
}

export default Car;