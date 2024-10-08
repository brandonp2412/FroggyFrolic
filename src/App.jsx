import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FroggyFrolic from './FroggyFrolic';
import Learning from './Learning';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FroggyFrolic />} />
                <Route path="/learning" element={<Learning />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;