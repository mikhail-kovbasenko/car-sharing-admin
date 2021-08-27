// import { Formik, Form, Field } from 'formik';
// import FileInput from '../../../../../commons/FileInput/FileInput';
// import plus from './../../../../../commons/images/main/car/plus-signs-svgrepo-com.svg';
// import './../Car.scss';
// import ColorCheckbox from './ColorCheckbox/ColorCheckbox';

// const CarSettings = ({ addColor, formData, calculate, colorItems,toggleCheckbox }) => {
// 	return (
// 		<div className="car__settings">
// 			<Formik
// 				initialValues={formData}

// 				onSubmit={values => {

// 				}}
// 				enableReinitialize={true}
// 			>
// 				{
// 					({ values }) => (
// 						<Form onChange={calculate}>
// 							<div className="car__settings-container">
// 								<div className="car__settings-title">Настройки автомобиля</div>
// 								<div className="car__settings-form">
// 									<div className="car__settings-form__content">
// 										<div className="car__settings-form-item">
// 											<div className="car__settings-form-item-container">
// 												<div className="car__settings-form-item-field">
// 													<div className="car__settings-form-item-field-title">Модель автомобиля</div>
// 													<div className="car__settings-form-item-field-input">
// 														<Field name="name" />
// 													</div>
// 												</div>
// 												<div className="car__settings-form-item-field">
// 													<div className="car__settings-form-item-field-title">Тип автомобиля</div>
// 													<div className="car__settings-form-item-field-input">
// 														<Field name="type" />
// 													</div>
// 												</div>
// 												<div className="car__settings-form-item-field">
// 													<div className="car__settings-form-item-field-title">Номер автомобиля</div>
// 													<div className="car__settings-form-item-field-input">
// 														<Field name="number" />
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="car__settings-form-item">
// 											<div className="car__settings-form-item-container">
// 												<div className="car__settings-form-item-field">
// 													<div className="car__settings-form-item-field-title">Доступные цвета</div>
// 													<div className="car__settings-form-item-field-input">
// 														<Field className="input-color" name="color" />
// 														<Field>
// 															{
// 																({ field }) => {
// 																	return (
// 																		<div className="car__settings-form-item-field-input-plus" onClick={() => addColor(field.value)}>
// 																			<img src={plus} alt="plus-icon" />
// 																		</div>
// 																	)
// 																}
// 															}
// 														</Field>
// 													</div>
// 												</div>
// 												<div className="car__settings-form-item-field">
// 													<div className="car__settings-form-item-field-title">Минимальная цена</div>
// 													<div className="car__settings-form-item-field-input">
// 														<Field name="priceMin" />
// 													</div>
// 												</div>
// 												<div className="car__settings-form-item-field">
// 													<div className="car__settings-form-item-field-title">Максимальная цена</div>
// 													<div className="car__settings-form-item-field-input">
// 														<Field name="priceMax" />
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="car__settings-form-item colors">
// 											<div className="car__settings-form-item-color-container">
// 												{
// 													colorItems.map(colorItem => <ColorCheckbox key={colorItem.id} name={colorItem.value} checked={colorItem.checked} toggleCheckbox={toggleCheckbox} />)
// 												}
// 											</div>
// 										</div>
// 										<FileInput secondClass={'settings'} />
// 									</div>
// 								</div>
// 								<div className="car__settings-footer">
// 									<div className="car__settings-footer-container">
// 										<div className="car__settings-footer-item">
// 											<button type="submit" className="save-button">Сохранить</button>
// 											<a href="#" className="cancel-button">Отменить</a>
// 										</div>
// 										<div className="car__settings-footer-item">
// 											<a href="#" className="remove-button">Удалить</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</Form>
// 					)
// 				}
// 			</Formik>
// 		</div>
// 	)
// }

// export default CarSettings;