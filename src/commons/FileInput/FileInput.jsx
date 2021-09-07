import { useDispatch } from 'react-redux';
import { setCarImgActionCreator } from '../../redux/reducers/car/action-creators-car';
import './../../components/Content/Main/Car/Car.scss';

const FileInput = ({ secondClass }) => {
	const paddingContainerClass = secondClass === 'first-element' ? 'padding-container' : null;
	const dispatch = useDispatch();

	const changeImg = event => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			dispatch(setCarImgActionCreator({
				path: reader.result,
				size: file.size,
				mimetype: file.type,
				originalname: file.name
			}))
		}
		reader.readAsDataURL(file);
	}

	return (
		<div className={`car-model__file-content ${paddingContainerClass} ${secondClass}`}>
			<div className="car-model__file-content-container">
				<div className="car-model__file-content-wrapper">
					<input type="file" id="car-model__file-content-input" onChange={changeImg} />
					<label htmlFor="car-model__file-content-input">
						<div className="car-model__file-content-button">
							<div className="car-model__file-content-item">Выберите файл...</div>
							<div className="car-model__file-content-item">Обзор</div>
						</div>
					</label>
				</div>
			</div>
		</div>
	)
}

export default FileInput;