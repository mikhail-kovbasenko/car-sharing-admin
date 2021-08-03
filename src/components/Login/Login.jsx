import './Login.scss';
import logo from './../../commons/images/login/login-logo.svg';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import reactDom from 'react-dom';
import ModalWindow from '../../commons/ModalWindow/ModalWindow';

const Login = () => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const isModalOpen = useSelector(state => state.app.isModalOpen);

	if(isAuth) return <Redirect to="/"/>

	return (
		<div className="login">
			<div className="login__container">
				<div className="login__header">
					<div className="login__logo">
						<img src={logo} alt="login-logo" />
					</div>
					<div className="login__title">Need for drive	</div>
				</div>
			   <LoginForm/>
			</div>
			{
				isModalOpen && reactDom.createPortal(<ModalWindow/>, document.getElementById('modal'))
			}
		</div>
	)
}

export default Login;