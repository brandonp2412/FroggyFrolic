import { useState } from "react";
import { Link } from "react-router-dom";

function Lesson6() {
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸", "🐸"]);

  return (
    <div>
      {frogs.map((frog) => (
        <h1>{frog}</h1>
      ))}
      <Link to="/lesson7">Next lesson</Link>
    </div>
  );
}

export default Lesson6;
