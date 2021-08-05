import { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import ContentContainer from './components/Content/ContentContainer';
import Login from './components/Login/Login';

function App({history}) {
  useEffect(() => {
		history.push('/admin');
  }, []);

  return (
    <div className="wrapper">
		 <div className="content-page">
			<Switch>
				<Route path="/admin" component={ContentContainer}/>
				<Route path="/login" component={Login}/>
			</Switch>
		 </div>
    </div>
  );
}

export default withRouter(App);
