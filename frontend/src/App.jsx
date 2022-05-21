import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './assets/styles';
import Perguntas from './Components/Perguntas'


function App() {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perguntas" element={<Perguntas />} />
            </Routes>
        </>
    );
};

export default App;