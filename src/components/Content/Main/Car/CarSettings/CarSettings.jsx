import './../Car.scss';
import plusImg from './../../../../../commons/images/main/car/plus-signs-svgrepo-com.svg';
import { Field, Formik, Form } from 'formik';
import CarSettingsCheckbox from './CarSettingsCheckbox';

const CarSettings = ({formFieldSettingsData, update, sendData, colorItems, toggleCheckbox, addNewColorCheckbox}) => {
	return (
		<div className="car-settings">
			<Formik
				initialValues={formFieldSettingsData}
				onSubmit={values => sendData(values)}
				enableReinitialize={true}
			>
				{
					() => (
						<Form onChange={update}>
							<div className="car-settings__container">
								<div className="car-settings__title">Настройки автомобиля</div>
								<div className="car-settings__content">
									<div className="car-settings__content-container">
										<div className="car-settings__content-item">
											<div className="car-settings__content-item-container">
												<div className="car-settings__content-field">
													<div className="car-settings__content-field-title">Модель автомобиля</div>
													<div className="car-settings__content-field-element">
														<Field name="name"/>
													</div>
												</div>
												<div className="car-settings__content-field">
													<div className="car-settings__content-field-title">Тип автомобиля</div>
													<div className="car-settings__content-field-element">
														<Field name="type"/>
													</div>
												</div>
												<div className="car-settings__content-field">
													<div className="car-settings__content-field-title">Номер автомобиля</div>
													<div className="car-settings__content-field-element">
														<Field name="number"/>
													</div>
												</div>
											</div>
										</div>
										<div className="car-settings__content-item">
											<div className="car-settings__content-item-container">
												<div className="car-settings__content-field">
													<div className="car-settings__content-field-title">Доступные цвета</div>
													<div className="car-settings__content-field-element">
														<Field name="color" className="color-input"/>
														<Field>
															{
																({ field }) => {
																	return (
																		<div className="car-settings__content-field-element-plus" onClick={() => addNewColorCheckbox(field.value)}>
																			<img src={plusImg} alt="plus-icon" />
																		</div>
																	)
																}
															}
														</Field>
													</div>
												</div>
												<div className="car-settings__content-field">
													<div className="car-settings__content-field-title">Минимальная стоимость</div>
													<div className="car-settings__content-field-element">
														<Field name="priceMin" />
													</div>
												</div>
												<div className="car-settings__content-field">
													<div className="car-settings__content-field-title">Максимальная стоимость</div>
													<div className="car-settings__content-field-element">
														<Field name="priceMax" />
													</div>
												</div>
											</div>
										</div>
										<div className="car-settings__content-item">
											<div className="car-settings__content-item-container">
												<div className="car-settings__content-field color-checkbox-list">
													<div className="color-checkbox-list__container">
														{
															colorItems.map(item => <CarSettingsCheckbox key={item.id} {...item} toggleCheckbox={toggleCheckbox}/>)
														}
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
						</Form>
					)
				}
			</Formik>
		</div>
	)
}

export default CarSettings;