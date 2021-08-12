import { useDispatch, useSelector } from "react-redux";
import CustomSettingsHeader from "../../../../commons/CustomSettingsHeader/CustomSettingsHeader";
import Preloader from "../../../../commons/Preloader/Preloader";
import { getOrdersFromServer } from "../../../../redux/reducers/orders";
import MainContentContainer from "../MainContent/MainContentContainer";
import OrderItem from "./OrderItem/OrderItem";
import './Orders.scss';

const Orders = props => {
	const dispatch = useDispatch();
	const isFetching = useSelector(state => state.app.isFetchingContent);

	const changePage = page => {
		dispatch(getOrdersFromServer(props.token, props.itemsOnPage, page, true))
	}
	return (
		<MainContentContainer totalCount={props.itemsCount}
									 itemsOnPage={props.itemsOnPage}
									 changePage={changePage}
		>
			<div className="orders">
				<CustomSettingsHeader items={['За неделю', 'Elantra', 'Ульяновск', 'В процессе']}>
					<div className="orders__settings-button">
						<a href="#">Применить</a>
					</div>
				</CustomSettingsHeader>
				<div className="orders__items">
					<div className="orders__items-container">
						{
							isFetching
							? <Preloader/>
							: props.items.map(item => <OrderItem data={item} key={item.id}/>)
						}
					</div>
				</div>
			</div>
		</MainContentContainer>
	)
}

export default Orders;