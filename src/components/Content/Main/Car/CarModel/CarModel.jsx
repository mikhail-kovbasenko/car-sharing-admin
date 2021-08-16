import './../Car.scss';
import defaultCar from './../../../../../commons/images/main/orders/default-cars.jpeg';
import styled from 'styled-components';

const CarModel = () => {
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
				<div className="car__model-img-file">
					<div className="car__model-img-file-wrapper">
						<input type="file" id="car__model-input-file" />
						<label htmlFor="car__model-input-file">
							<div className="car__model-input-file-button">
								<div className="car__model-input-file-item">Выберите файл...</div>
								<div className="car__model-input-file-item">Обзор</div>
							</div>
						</label>
					</div>
				</div>
			</div>
			<div className="car__model-filling model-container">
				<div className="car__model-filling-title">
					<div className="car__model-filling-title-text">Заполнено</div>
					<div className="car__model-filling-title-procent">15%</div>
				</div>
				<div className="car__model-filling-content">
					<div className="car__model-filling-content-wrapper">
						<ProgressInput width={15} className="car__model-filling-content-progress" />
					</div>
				</div>
			</div>
			<div className="car__model-description model-container">
				<div className="car__model-description-title">Описание</div>
				<div className="car__model-description-text">
					<div className="car__model-description-container">
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora debitis ipsam a dolore temporibus repellat sit omnis quidem tenetur perferendis, sequi, ex qui, obcaecati quis doloribus ut voluptas veritatis.
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