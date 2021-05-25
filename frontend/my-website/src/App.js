import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PostListPage from './components/post-list-page/PostListPage';
import Header from './components/header/Header';

function App() {
	return (
		<div>
			<Header />
			<div className='content'>
				<PostListPage />
			</div>
		</div>
	);
}

export default App;
