const MainContent = props => {
	return (
		<div className="main__content-content">
			{props.children}
			<div className="main__content-paginator">
				<div className="main__content-paginator-container">
					
				</div>
			</div>
		</div>
	)
}

export default MainContent;