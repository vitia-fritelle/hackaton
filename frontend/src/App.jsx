import {Routes, Route} from 'react-router-dom';
import RatingScreen from './pages/RatingScreen';
import GlobalStyle from './assets/styles';

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<RatingScreen />} />
			</Routes>
		</>
	);
}

export default App;
