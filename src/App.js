import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Content from './components/Content/Content';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="wrapper">
		 <div className="content">
			<Switch>
				<Route exact path="/" component={Content}/>
				<Route path="/login" component={Login}/>
			</Switch>
		 </div>
    </div>
  );
}

export default App;
