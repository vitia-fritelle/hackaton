import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './assets/styles';

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;