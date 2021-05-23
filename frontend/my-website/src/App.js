import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PostlistPage from './components/post-list-page/PostlistPage';
import Header from './components/header/Header';

function App() {
	return (
		<div>
			<Header />
			<div className='content'>
				<PostlistPage />
			</div>
		</div>
	);
}

export default App;
