import { ReactSVG } from 'react-svg';
import plus from './../../../../../commons/images/main/car/plus-signs-svgrepo-com.svg';
import './../Car.scss';

const CarSettings = () => {
	return (
		<div className="car__settings">
			<div className="car__settings-container">
				<div className="car__settings-title">Настройки автомобиля</div>
				<div className="car__settings-form">
					<div className="car__settings-form__content">
						<div className="car__settings-form-item">
							<div className="car__settings-form-item-container">
								<div className="car__settings-form-item-field">
									<div className="car__settings-form-item-field-title">Модель автомобиля</div>
									<div className="car__settings-form-item-field-input">
										<input type="text" />
									</div>
								</div>
								<div className="car__settings-form-item-field">
									<div className="car__settings-form-item-field-title">Тип автомобиля</div>
									<div className="car__settings-form-item-field-input">
										<input type="text" />
									</div>
								</div>
							</div>
						</div>
						<div className="car__settings-form-item">
							<div className="car__settings-form-item-container">
								<div className="car__settings-form-item-field">
									<div className="car__settings-form-item-field-title">Доступные цвета</div>
									<div className="car__settings-form-item-field-input">
										<input type="text" className="input-color"/>
										<div className="car__settings-form-item-field-input-plus">
											<img src={plus} alt="plus-icon"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="car__settings-footer">
					<div className="car__settings-footer-container">
						<div className="car__settings-footer-item">
							<a href="#" className="save-button">Сохранить</a>
							<a href="#" className="cancel-button">Отменить</a>
						</div>
						<div className="car__settings-footer-item">
							<a href="#" className="remove-button">Удалить</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarSettings;