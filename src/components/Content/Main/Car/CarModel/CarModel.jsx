import './../Car.scss';
import defaultCar from './../../../../../commons/images/main/orders/default-cars.jpeg';
import styled from 'styled-components';
import FileInput from '../../../../../commons/FileInput/FileInput';

const CarModel = ({procent, description}) => {
	return (
		<div className="car__model">
			<div className="car__model-img model-container">
				<div className="car__model-img-image">
					<img src={defaultCar} alt="car" />
				</div>
				<div className="car__model-img-name">
					<div className="car__model-img-title">Hyndai, i30 N</div>
					<div className="car__model-img-type">Компакт-кар</div>
				</div>
				<FileInput secondClass={'model'}/>
			</div>
			<div className="car__model-filling model-container">
				<div className="car__model-filling-title">
					<div className="car__model-filling-title-text">Заполнено</div>
					<div className="car__model-filling-title-procent">{procent}%</div>
				</div>
				<div className="car__model-filling-content">
					<div className="car__model-filling-content-wrapper">
						<ProgressInput width={procent} className="car__model-filling-content-progress" />
					</div>
				</div>
			</div>
			<div className="car__model-description model-container">
				<div className="car__model-description-title">Описание</div>
				<div className="car__model-description-text">
					<div className="car__model-description-container">
					<p>
						{description}
					</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const ProgressInput = styled.div`
	width: ${props => props.width + '%'}
`


export default CarModel;