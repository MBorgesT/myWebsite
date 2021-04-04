import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Frontpage from './components/frontpage/Frontpage';
import Header from './components/header/Header';

function App() {
	return (
		<div className="app">
			<Header />
			<Frontpage />
		</div>
	);
}

export default App;
