import Preloader from '../Preloader/Preloader';
import './ModalWindow.scss';

const ModalWindow = () => {
	return (
		<div className="modal-window">
			<div className="modal-window__notice">Пожалуйста, подождите...</div>
			<Preloader/>
		</div>
	)
}

export default ModalWindow;