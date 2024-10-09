import { Link } from "react-router-dom";

function Frog() {
    return (
        <div style={{
            fontSize: '80px',
            display: 'flex',
            justifyContent: 'center'
        }}>
            🐸
        </div>
    );
}

function Lesson2() {
    return (
        <div>
            <h1>Heres froggy 1:</h1>
            <Frog />

            <h1>And heres froggy 2:</h1>
            <Frog />

            <Link to="/lesson3">Next lesson</Link>
        </div>
    );
}

export default Lesson2;