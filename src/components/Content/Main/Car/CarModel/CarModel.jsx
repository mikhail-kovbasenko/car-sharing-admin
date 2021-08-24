import './../Car.scss';
import styled from 'styled-components';
import FileInput from '../../../../../commons/FileInput/FileInput';
import Preloader from './../../../../../commons/Preloader/Preloader';


const CarModel = props => {
	const onDescriptionClick = () => {
		props.setTextarea(true);
		if(props.textareaRef.current) {
			props.textareaRef.current.focus();
		}
	}
	return (
		<div className="car__model">
			<div className="car__model-img model-container">
				<div className="car__model-img-image">
					<img src={props.getSrcForImg(props.img)} 
						  crossOrigin="anonymous" 
						  referrerPolicy="origin" 
						  onError={event => event.target.src = props.defaultCar}
						  style={{display: props.loaded ? 'block' : 'none'}}
						  onLoad={props.onLoadImg}
						  ref={props.imgRef}
						  alt="car-model" />	
					{props.loaded || <Preloader/>}
				</div>
				<div className="car__model-img-name">
					<div className="car__model-img-title">{props.name}</div>
					<div className="car__model-img-type">{props.type}</div>
				</div>
				<FileInput secondClass={'model'} changeImg={props.changeImg}/>
			</div>
			<div className="car__model-filling model-container">
				<div className="car__model-filling-title">
					<div className="car__model-filling-title-text">Заполнено</div>
					<div className="car__model-filling-title-procent">{props.procent}%</div>
				</div>
				<div className="car__model-filling-content">
					<div className="car__model-filling-content-wrapper">
						<ProgressInput width={props.procent} className="car__model-filling-content-progress" />
					</div>
				</div>
			</div>
			<div className="car__model-description model-container" onClick={() => onDescriptionClick()}>
				<div className="car__model-description-title">Описание</div>
				<div className="car__model-description-text">
					<div className="car__model-description-container">
						{
							props.isTextarea 
							? <textarea ref={props.textareaRef} 
										   onBlur={() => props.setTextarea(false)} 
											value={props.description}
											onChange={event => props.changeDescription(event.target.value)}
								/>
							: <p>{props.description}</p>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

const ProgressInput = styled.div`
	width: ${props => props.width + '%'}
`


export default CarModel;