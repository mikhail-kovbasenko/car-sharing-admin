import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalActionCreator } from "../../redux/reducers/app";
import { setAuthData, toggleLoginErrorActionCreator } from "../../redux/reducers/auth";

const LoginForm = () => {
	const loginError = useSelector(state => state.auth.loginError);
	const dispatch = useDispatch();
	const validateFields = values => {
		const errors = {};

		if (!values.username) {
			errors.username = 'Пустое поле!';
		}
		if (!values.password) {
			errors.password = 'Пустое поле!';
		}

		return errors;
	}
	
	useEffect(() => {
		if(loginError) {
			setTimeout(() => dispatch(toggleLoginErrorActionCreator()), 500);
		}
	}, [loginError])

	return (
		<div className="login__content">
			<Formik
				initialValues={{
					username: '',
					password: ''
				}}
				onSubmit={async values => {	
					dispatch(setAuthData(values));
					dispatch(toggleModalActionCreator());
				}}
				validate={validateFields}
			>
				{
					({ errors, touched }) => (
						<Form>
							<div className="login__content-container">
								<div className="login__content-title">Вход</div>
								<div className="login__content-body">
									<div className="login__content-input">
										<div className="login__content-input-title">Почта</div>
										<div className="login__content-input-element">
											<Field id="username" 
													 name="username"
													 autoFocus={true}
													 className={errors.username && touched.username && 'error'} />
										
										</div>
									</div>
									<div className="login__content-input">
										<div className="login__content-input-title">Пароль</div>
										<div className="login__content-input-element">
											<Field id="password" 
													 name="password"
													 className={errors.password && touched.password && 'error'} />
										</div>
									</div>
								</div>
								<div className="login__content-footer">
									<div className="login__content-get-access">
										<a href="#">Запросить доступ</a>
									</div>
									<div className="login__content-submit">
										<button type="submit">Войти</button>
									</div>
								</div>
							</div>
							{
								loginError && <div className="login__error">Неверный логин или пароль!</div>
							}
						</Form>
					)
				}
			</Formik>
		</div>
	)
}

export default LoginForm;