import MainContent from "./MainContent";

const MainContentContainer = ({totalCount, itemsOnPage, children, changePage}) => {
	const pageCount = Math.ceil(totalCount / itemsOnPage);

	return <MainContent pageCount={pageCount}
							  children={children}
							  changePage={changePage}
				/>
}

export default MainContentContainer;