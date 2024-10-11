import { Link } from "react-router-dom";

function Lesson1() {
    return (
        <div>
            <h1>React can be fun</h1>
            <img src="https://www.codesail.co.nz/cat.jpg" alt="Cat" />
        <br />
            <Link to="/lesson2">Next lesson</Link>
        </div>
    );
}

export default Lesson1;