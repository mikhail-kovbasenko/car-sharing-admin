import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSettingsHeader from "../../../../commons/CustomSettingsHeader/CustomSettingsHeader";
import CustomTableContainer from "../../../../commons/CustomTable/CustomTableContainer";
import Preloader from "../../../../commons/Preloader/Preloader";
import { getCarsFromServer } from "../../../../redux/reducers/cars";
import { getTableData } from "../../../../utils/secondaryFunctions";
import MainContentContainer from "../MainContent/MainContentContainer";
import './Cars.scss';

const Cars = ({ items, itemsOnPage, itemsCount, token, openCar }) => {
	const dispatch = useDispatch();
	const isFetching = useSelector(state => state.app.isFetchingContent);

	const changePage = page => {
		dispatch(getCarsFromServer(token, itemsOnPage, page, true));
	}
	const propsList = useMemo(() => getTableData([
		['ID', 'id'],
		['Модель', 'name'],
		['Номер', 'number'],
		['Описание', 'description'],
		['Категория', 'categoryId.name'],
		['Мин.стоимость', 'priceMin', 'price'],
		['Макс.стоимость', 'priceMax', 'price'],
		['Доступные цвета', 'colors', 'join'],
		['Дата создания', 'createdAt', 'date'],
		['Дата последнего изменения', 'updatedAt', 'date'],
		['Фото', 'thumbnail.path', 'img']
	]));
	
	return (
		<MainContentContainer itemsOnPage={itemsOnPage}
									 totalCount={itemsCount}
									 changePage={changePage}
		>
			<div className="cars">
				<CustomSettingsHeader items={['Example', 'Example', 'Example', 'Example']}>
					<div className="cars__settings-buttons">
						<div className="cars__settings-buttons-container">
							<a href="">Reset</a>
							<a href="">Apply</a>
						</div>
					</div>
				</CustomSettingsHeader>
				{
					isFetching
					? <Preloader/>
					: <CustomTableContainer items={items} list={propsList} handleClick={openCar}/>
				}
			</div>
		</MainContentContainer>
	)
}

export default Cars;