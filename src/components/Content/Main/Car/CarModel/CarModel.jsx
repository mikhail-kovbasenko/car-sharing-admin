import './../Car.scss';
import styled from 'styled-components';

const CarModel = (
		{
			procent, 
			img, 
			description,
			defaultCar,
			getSrcForImg,
			imgRef,
			changeImg,
			name,
			type,
			loaded,
			onLoadImg
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
								  ref={imgRef}
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
				<div className="car-model__file-content padding-container">
					<div className="car-model__file-content-container">
						<div className="car-model__file-content-wrapper">
							<input type="file" id="car-model__file-content-input" onChange={changeImg}/>
							<label htmlFor="car-model__file-content-input">
								<div className="car-model__file-content-button">
									<div className="car-model__file-content-item">Выберите файл...</div>
									<div className="car-model__file-content-item">Обзор</div>
								</div>
							</label>
						</div>
					</div>
				</div>
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
					<div className="car-model__description-content-container">
						<div className="car-model__description-content-title">Описание</div>
						<div className="car-model__description-content-text">
							<div className="car-model__description-content-text-container">
								{description}
							</div>
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