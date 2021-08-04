import './../Main.scss';

const MainHeader = () => {
	return (
		<div className="main__header">
			<div className="main__header-container">
				<div className="main__header-search">
					<input type="text" placeholder="Поиск..."/>
				</div>
				<div className="main__header-notice"></div>
				<div className="main__header-user">
					<div className="main__header-user-avatar"></div>
					<div className="main__header-user-list"></div>
				</div>
			</div>
		</div>
	)
}

export default MainHeader;