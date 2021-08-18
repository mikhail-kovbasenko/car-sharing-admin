import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import MainFooter from "./MainFooter/MainFooter";
import MainHeaderContainer from "./MainHeader/MainHeaderContainer";
import MainRouter from "./MainRouter";
import { ErrorFallback } from './../../../commons/ErrorContent/ErrorFallback';

const Main = ({sidebarTitle, sidebarItem, getMainContentHeaderTitle}) => {
	return (
		<div className="main">
			<div className="main__container">
				<MainHeaderContainer sidebarTitle={sidebarTitle} sidebarItem={sidebarItem}/>
				<div className="main__content">
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<div className="main__content-header">{getMainContentHeaderTitle()}</div>
						<MainRouter/>			
					</ErrorBoundary>	
				</div>
				<MainFooter/>
			</div>
		</div>
	)
}

export default Main;

