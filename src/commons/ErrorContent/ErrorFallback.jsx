import ErrorPage from "./ErrorPage";

export function ErrorFallback({error, resetErrorBoundary}) {
	const errorCode = (error => {
		const errorCodes = ['400', '401', '404', '429', '500'];

		return errorCodes.find(item => error.message.indexOf(item) !== -1);
	})(error) || 'Unknow error';
	
	return <ErrorPage code={errorCode} reset={resetErrorBoundary}/>
}