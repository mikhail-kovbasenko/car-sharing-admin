import { useMemo } from "react";
import CustomSettingsHeader from "../../../../commons/CustomSettingsHeader/CustomSettingsHeader";
import CustomTableContainer from "../../../../commons/CustomTable/CustomTableContainer";
import getTableData from "../../../../utils/getTableData";
import MainContentContainer from "../MainContent/MainContentContainer";
import './Cars.scss';

const Cars = ({ items, itemsOnPage, itemsCount, token }) => {
	const changePage = page => {

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
		['Дата последнего изменения', 'updatedAp', 'date'],
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
				<CustomTableContainer items={items} list={propsList}/>
			</div>
		</MainContentContainer>
	)
}

export default Cars;