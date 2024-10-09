import { Link } from "react-router-dom";

function Lesson1() {
    return (
        <div>
            <h1>Welcome to React!</h1>
            <p>Let's get started...</p>
            <Link to="/lesson2">Next lesson</Link>
        </div>
    );
}

export default Lesson1;