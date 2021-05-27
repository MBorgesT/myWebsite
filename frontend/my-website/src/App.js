import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter
} from "react-router-dom";

import PostListPage from './components/post-list-page/PostListPage';
import Header from './components/header/Header';

function App() {
	return (
		<div>
			<Header />
			<div className='content'>
				<Router>
					<Switch>
						<Route path='/' exact component={withRouter(PostListPage)} />
						<Route path='/topic/:topicId' exact component={withRouter(PostListPage)} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
