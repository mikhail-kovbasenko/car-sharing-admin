import './ErrorPage.scss';

const ErrorPage = ({code, reset}) => {
	return (
		<div className="error-page">
			<div className="error-page__container">
				<div className="error-page__error-number">{code}</div>
				<div className="error-page__title">Что-то пошло не так</div>
				<div className="error-page__info">Попробуйте перезагрузить страницу</div>
				<div className="error-page__button">
					<a href="#" className="error-page__button-element" onClick={reset}>Назад</a>
				</div>
			</div>
		</div>
	)
}

export default ErrorPage;