import { useDispatch, useSelector } from "react-redux";
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
				<div className="orders__settings">
					<div className="orders__settings-container">
						<div className="orders__settings-item">
							<select >
								<option value="За неделю">За неделю</option>
							</select>
						</div>
						<div className="orders__settings-item">
							<select >
								<option value="Elantra">Elantra</option>
							</select>
						</div>
						<div className="orders__settings-item">							
							<select>
								<option value="Ульяновск">Ульяновск</option>
							</select>
						</div>
						<div className="orders__settings-item">
							<select>
								<option value="В процессе">В процессе</option>
							</select>
						</div>
					</div>
					<div className="orders__settings-button">
						<a href="#">Применить</a>
					</div>
				</div>
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