import MainContentContainer from "../MainContent/MainContentContainer";
import OrderItem from "./OrderItem/OrderItem";
import './Orders.scss';

const Orders = props => {
	return (
		<MainContentContainer totalCount={props.itemsCount}
			itemsOnPage={props.itemsOnPage}
			currentPage={props.currentPage}
		>
			<div className="orders">
				<div className="orders__settings">
					<div className="orders__settings-container">
						<div className="orders__settings-item">
							<select name="" id="">
								<option value="За неделю">За неделю</option>
							</select>
						</div>
						<div className="orders__settings-item">
							<select name="" id="">
							<option value="Elantra">Elantra</option>

							</select>
						</div>
						<div className="orders__settings-item">
								
							<select name="" id=""><option value="Ульяновск">Ульяновск</option></select>
						</div>
						<div className="orders__settings-item">
							<select name="" id="">
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
							props.items.map(item => <OrderItem data={item} key={item.id}/>)
						}
					</div>
				</div>
			</div>
		</MainContentContainer>
	)
}

export default Orders;