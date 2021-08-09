import MainContent from "./MainContent";

const MainContentContainer = ({totalCount, itemsOnPage, currentPage, children}) => {
	const pageCount = Math.ceil(totalCount / itemsOnPage);

	return <MainContent pageCount={pageCount}
							  currentPage={currentPage}
							  children={children}
				/>
}

export default MainContentContainer;