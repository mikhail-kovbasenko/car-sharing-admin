import { Route, Switch } from 'react-router-dom';
import './App.scss';
import ContentContainer from './components/Content/ContentContainer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="wrapper">
		 <div className="content-page">
			<Switch>
				<Route exact path="/" component={ContentContainer}/>
				<Route path="/login" component={Login}/>
			</Switch>
		 </div>
    </div>
  );
}

export default App;
