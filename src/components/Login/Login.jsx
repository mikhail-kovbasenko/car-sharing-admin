import './Login.scss';
import logo from './../../commons/images/login/login-logo.svg';

const Login = () => {
	return (
		<div className="login">
			<div className="login__container">
				<div className="login__header">
					<div className="login__logo">
						<img src={logo} alt="login-logo" />
					</div>
					<div className="login__title">Need for drive	</div>
				</div>
				<div className="login__content">
					<div className="login__content-container">
						<div className="login__content-title">Вход</div>
						<div className="login__content-body">
							<div className="login__content-input">
								<div className="login__content-input-title">Почта</div>
								<div className="login__content-input-element">
									<input type="text" name="email"/>
								</div>
							</div>
							<div className="login__content-input">
								<div className="login__content-input-title">Пароль</div>
								<div className="login__content-input-element">
									<input type="password" name="password"/>
								</div>
							</div>
						</div>
						<div className="login__content-footer">
							<div className="login__content-get-access">
								<a href="#">Запросить доступ</a>
							</div>
							<div className="login__content-submit">
								<a href="#">Войти</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;