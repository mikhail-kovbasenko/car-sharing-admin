import './../Car.scss';
import plusImg from './../../../../../commons/images/main/car/plus-signs-svgrepo-com.svg';

const CarSettings = () => {
	return (
		<div className="car-settings">
			<div className="car-settings__container">
				<div className="car-settings__title">Настройки автомобиля</div>
				<div className="car-settings__content">
					<div className="car-settings__content-container">
						<div className="car-settings__content-item">
							<div className="car-settings__content-item-container">
								<div className="car-settings__content-field">
									<div className="car-settings__content-field-title">Модель автомобиля</div>
									<div className="car-settings__content-field-element">
										<input type="text" />
									</div>
								</div>
								<div className="car-settings__content-field">
									<div className="car-settings__content-field-title">Тип автомобиля</div>
									<div className="car-settings__content-field-element">
										<input type="text" />
									</div>
								</div>
								<div className="car-settings__content-field">
									<div className="car-settings__content-field-title">Номер автомобиля</div>
									<div className="car-settings__content-field-element">
										<input type="text" />
									</div>
								</div>
							</div>
						</div>
						<div className="car-settings__content-item">
							<div className="car-settings__content-item-container">
								<div className="car-settings__content-field">
									<div className="car-settings__content-field-title">Доступные цвета</div>
									<div className="car-settings__content-field-element">
										<input type="text" className="color-input"/>
										<div className="car-settings__content-field-element-plus">
											<img src={plusImg} alt="plus-icon" />
										</div>
									</div>
								</div>
								<div className="car-settings__content-field">
									<div className="car-settings__content-field-title">Минимальная стоимость</div>
									<div className="car-settings__content-field-element">
										<input type="text" />
									</div>
								</div>
								<div className="car-settings__content-field">
									<div className="car-settings__content-field-title">Максимальная стоимость</div>
									<div className="car-settings__content-field-element">
										<input type="text" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="car-settings__content-footer">
						<div className="car-settings__content-footer-container">
							<div className="car-settings__content-footer-item">
								<div className="car-settings__content-footer-item-element">
									<button type="submit" className="save-button">Сохранить</button>
								</div>
								<div className="car-settings__content-footer-item-element">
									<button className="cancel-button">Отменить</button>
								</div>
							</div>
							<div className="car-settings__content-footer-item">
								<div className="car-settings__content-footer-item-element">
									<button className="delete-button">Удалить</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarSettings;