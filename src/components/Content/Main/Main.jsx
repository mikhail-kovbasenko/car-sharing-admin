import MainFooter from "./MainFooter/MainFooter";
import MainHeaderContainer from "./MainHeader/MainHeaderContainer";
import MainRouter from "./MainRouter";

const Main = ({sidebarTitle, sidebarItem, getMainContentHeaderTitle}) => {
	return (
		<div className="main">
			<div className="main__container">
				<MainHeaderContainer sidebarTitle={sidebarTitle} sidebarItem={sidebarItem}/>
				<div className="main__content">
					<div className="main__content-header">{getMainContentHeaderTitle()}</div>
					<MainRouter/>			
				</div>
				<MainFooter/>
			</div>
		</div>
	)
}

export default Main;

