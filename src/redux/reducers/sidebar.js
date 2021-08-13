const initialState = {
	items: [
		{id: 1, title: 'Карточка автомобиля', img: 'car-card', to: 'car'},
		{id: 2, title: 'Список авто', img: 'cars-list', to: 'cars'},
		{id: 3, title: 'Заказы', img: 'orders', to: 'orders'}
	]
}

const sidebar = (state = initialState, action) => {
	switch(action.type) {
		default: return state;
	}
}

export default sidebar;