import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './assets/styles';
import Perguntas from './Components/Perguntas'
import TelaInicialDePerguntas from './Components/componentes-de-perguntas/TelaInicialDePerguntas';


function App() {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perguntas" element={<Perguntas />} />
                <Route path="/teste" element={<TelaInicialDePerguntas />} />
            </Routes>
        </>
    );
};

export default App;