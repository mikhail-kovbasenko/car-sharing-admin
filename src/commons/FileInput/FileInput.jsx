import './../../components/Content/Main/Car/Car.scss';

const FileInput = ({secondClass}) => {
	return (
		<div className={`car__model-img-file ${secondClass}`}>
			<div className="car__model-img-file-wrapper">
				<input type="file" id="car__model-input-file" />
				<label htmlFor="car__model-input-file">
					<div className="car__model-input-file-button">
						<div className="car__model-input-file-item">Выберите файл...</div>
						<div className="car__model-input-file-item">Обзор</div>
					</div>
				</label>
			</div>
		</div>
	)
}

export default FileInput;