import { useState } from "react";
import { Link } from "react-router-dom";

function Lesson9() {
  const [cooked, setCooked] = useState(false);
  const [goated, setGoated] = useState(true);

  return (
    <div>
      <h1>Is he goated? {goated ? "Yea" : "Nah"}</h1>
      <p>Don't tell me he's cooked? {cooked ? "Yep" : "Nope"}</p>

      <Link to="/lesson10">Next lesson</Link>
    </div>
  );
}

export default Lesson9;
