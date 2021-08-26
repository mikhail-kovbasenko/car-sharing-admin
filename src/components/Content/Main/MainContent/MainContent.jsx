import ReactPaginate from "react-paginate"

const MainContent = ({pageCount, children, changePage}) => {
	const handlePageClick = data => changePage(data.selected);
	return (
		<div className="main__content-content">
			<div className="main__content-content-container">
				{children}
			</div>
			<div className="main__content-content-paginator">
				<div className="main__content-content-paginator-container">
					<ReactPaginate
						previousLabel={'\u00ab'}
						nextLabel={'\u00bb'}
						breakLabel={'...'}
						pageCount={pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={3}
						onPageChange={handlePageClick}
         		   containerClassName={'pagination'}
          		   activeClassName={'active'}
					/>
				</div>
			</div>
		</div>
	)
}

export default MainContent;