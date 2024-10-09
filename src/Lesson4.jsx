import { useState } from "react";
import { Link } from "react-router-dom";

function Lesson4() {
  const [name, setName] = useState("Mr beast");

  return (
    <div>
      <h1>Welcome {name}</h1>
      <Link to="/lesson5">Next lesson</Link>
    </div>
  );
}

export default Lesson4;
