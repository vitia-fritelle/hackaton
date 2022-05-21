import {Routes, Route} from 'react-router-dom';
import RatingScreen from './pages/RatingScreen';
import GlobalStyle from './assets/styles';
import Perguntas from './Components/Perguntas';
import TelaInicialDePerguntas from './Components/componentes-de-perguntas/TelaInicialDePerguntas';

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/perguntas" element={<Perguntas />} />
				<Route path="/teste" element={<TelaInicialDePerguntas />} />
				<Route path="/pontuacao" element={<RatingScreen />} />
			</Routes>
		</>
	);
}

export default App;
