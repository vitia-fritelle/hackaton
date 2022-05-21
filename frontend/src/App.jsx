import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './assets/styles';
import Movies from './pages/Movies';

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={< Movies/>}/>
            </Routes>
        </>
    );
};

export default App;