import './../Car.scss';
import styled from 'styled-components';
import FileInput from '../../../../../commons/FileInput/FileInput';

const CarModel = (
		{
			procent, 
			img, 
			description,
			defaultCar,
			getSrcForImg,
			name,
			type,
			loaded,
			onLoadImg,
			isTextarea,
			setTextarea,
			textareaRef,
			changeDescription
		}
	) => {
	return (
		<div className="car-model">
			<div className="car-model__container">
				<div className="car-model__img-content padding-container">
					<div className="car-model__img-content-container">
						<div className="car-model__img-content-img">
							<img src={getSrcForImg(img)}
								  crossOrigin="anonymous"
								  referrerPolicy="origin"
								  onError={event => event.target.src = defaultCar} 
								  onLoad={onLoadImg}
								  style={{display: loaded ? 'block' : 'none'}}
								  alt="car-model" />
							{ loaded || <div>Загрузка изображения...</div>}
						</div>
					</div>
				</div>
				<div className="car-model__name-content padding-container">
					<div className="car-model__name-content-container">
						<div className="car-model__name-content-title">{name}</div>
						<div className="car-model__name-content-type">{type}</div>
					</div>
				</div>
					<FileInput secondClass={'first-element'}/>							
				<div className="car-model__filling-content">
					<div className="car-model__filling-content-container">
						<div className="car-model__filling-content-header">
							<div className="car-model__filling-content-header-title">Заполнено</div>
							<div className="car-model__filling-content-header-procent">{procent}%</div>
						</div>
						<div className="car-model__filling-content-element">
							<div className="car-model__filling-content-element-wrapper">
								<FillingProgress width={procent} className="car-model__filling-content-element-progress"/>
							</div>
						</div>
					</div>
				</div>
				<div className="car-model__description-content padding-container">
					<div className="car-model__description-content-container" onClick={() => setTextarea(true)}>
						<div className="car-model__description-content-title">Описание</div>
						<div className="car-model__description-content-text">
							{
								isTextarea
								? <textarea value={description}
											   ref={textareaRef} 
												onBlur={() => setTextarea(false)}
												onChange={changeDescription}
												></textarea>
								: <div className="car-model__description-content-text-container">{description}</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const FillingProgress = styled.div`
	width: ${props => props.width + '%'}
`

export default CarModel;