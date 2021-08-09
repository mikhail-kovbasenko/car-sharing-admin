import './../Orders.scss';

const OrderItem = ({data}) => {
	console.log(data);
	return (
		<div className="order-item">
			<div className="order-item__container">
				<div className="order-item__img"></div>
				<div className="order-item__description">
					<div className="order-item__description-auto"></div>
					<div className="order-item__description-date"></div>
					<div className="order-item__description-color"></div>
				</div>
				<div className="order-item__info">
					<div className="order-item__info-container"></div>
				</div>
				<div className="order-item__price">{data.price}</div>
				<div className="order-item__buttons">
					
				</div>
			</div>
		</div>
	)
}

export default OrderItem;