import MainContent from "./MainContent";

const MainContentContainer = ({totalCount, itemsOnPage, currentPage, children, changePage}) => {
	const pageCount = Math.ceil(totalCount / itemsOnPage);

	return <MainContent pageCount={pageCount}
							  currentPage={currentPage}
							  children={children}
							  changePage={changePage}
				/>
}

export default MainContentContainer;