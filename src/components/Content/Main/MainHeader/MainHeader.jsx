import styled from 'styled-components';
import './../Main.scss';
import noticeImg from './../../../../commons/images/main/header/notice.svg';
import avatar from './../../../../commons/images/main/header/avatart.jpg';
import dropdown from './../../../../commons/images/main/header/dropdown.svg';
import completeIcon from './../../../../commons/images/main/header/complete-icon.svg';

const MainHeader = ({height, saved}) => {
	return (
		<div className="main__header">
			<MainHeaderContainerCSS className="main__header-container" height={height}>
				<div className="main__header-search">
					<input type="text" placeholder="Поиск..."/>
				</div>
				<div className="main__header-notice">
					<img src={noticeImg} alt="notice" />
				</div>
				<div className="main__header-user">
					<div className="main__header-user-avatar">
						<img src={avatar} alt="avatar" />
					</div>
					<div className="main__header-user-name">Admin</div>
					<div className="main__header-user-list">
						<img src={dropdown} alt="dropdown" />
					</div>
				</div>
			</MainHeaderContainerCSS>
			{
				saved &&
				<div className="main__header-car-success">
					<div className="main__header-car-success-container">
						<div className="main__header-car-success-item"><img src={completeIcon} alt="complete-icon" /></div>
						<div className="main__header-car-success-item">Успех! Машина сохранена</div>
					</div>
				</div>
			}
		</div>
	)
}

const MainHeaderContainerCSS = styled.div`
	height: ${props => `${props.height}px`};
`; 

export default MainHeader;