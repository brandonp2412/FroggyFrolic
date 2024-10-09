import { useState } from "react";
import { Link } from "react-router-dom";

function Lesson3() {
  const [youWon, setYouWon] = useState(false);

  function toggle() {
    setYouWon(!youWon);
  }

  if (youWon)
    return (
      <div>
        <h1>You won! 😊</h1>
        <button onClick={toggle}>Toggle</button>
        <br />
        <br />
        <Link to="/lesson4">Next lesson</Link>
      </div>
    );

  return (
    <div>
      <h1>You lost 😔</h1>
      <button onClick={toggle}>Toggle</button>
      <br />
      <br />
      <Link to="/lesson4">Next lesson</Link>
    </div>
  );
}

export default Lesson3;
