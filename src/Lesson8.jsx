import { useState } from "react";
import { Link } from "react-router-dom";

function Lesson8() {
  const [cooked, setCooked] = useState(0);

  function letHimCook() {
    setCooked(cooked + 1);
  }

  return (
    <div style={{ padding: "2em" }}>
      <h1>The man has cooked {cooked} times!</h1>
      <button onClick={letHimCook}>Let him cook</button>
      <br />
      <br />
      <Link to="/lesson9">Next lesson</Link>
    </div>
  );
}

export default Lesson8;
