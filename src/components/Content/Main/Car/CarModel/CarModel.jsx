import './../Car.scss';
import defaultCar from './../../../../../commons/images/main/orders/default-cars.jpeg';

const CarModel = () => {
	return (
		<div className="car-model">
			<div className="car-model__container">
				<div className="car-model__img-content padding-container">
					<div className="car-model__img-content-container">
						<div className="car-model__img-content-img">
							<img src={defaultCar} alt="default-car" />
						</div>
					</div>
				</div>
				<div className="car-model__name-content padding-container">
					<div className="car-model__name-content-container">
						<div className="car-model__name-content-title">Красивая машина</div>
						<div className="car-model__name-content-type">Спорт-кар</div>
					</div>
				</div>
				<div className="car-model__file-content padding-container">
					<div className="car-model__file-content-container">
						<div className="car-model__file-content-wrapper">
							<input type="file" id="car-model__file-content-input"/>
							<label htmlFor="car-model__file-content-input">
								<div className="car-model__file-content-button">
									<div className="car-model__file-content-item">Выберите файл...</div>
									<div className="car-model__file-content-item">Обзор</div>
								</div>
							</label>
						</div>
					</div>
				</div>
				<div className="car-model__filling-content">
					<div className="car-model__filling-content-container">
						<div className="car-model__filling-content-header">
							<div className="car-model__filling-content-header-title">Заполнено</div>
							<div className="car-model__filling-content-header-procent">25%</div>
						</div>
						<div className="car-model__filling-content-element">
							<div className="car-model__filling-content-element-wrapper">
								<div className="car-model__filling-content-element-progress"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="car-model__description-content padding-container">
					<div className="car-model__description-content-container">
						<div className="car-model__description-content-title">Описание</div>
						<div className="car-model__description-content-text">
							<div className="car-model__description-content-text-container">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, soluta.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarModel;