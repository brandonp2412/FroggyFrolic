import { useState } from "react";
import { Link } from "react-router-dom";

function Frog({ name }) {
  return <h1>🐸 {name}</h1>;
}

function Lesson5() {
  return (
    <div>
      <Frog name="Skibidi" />
      <Frog name="Fortnite" />
      <Link to="/lesson6">Next lesson</Link>
    </div>
  );
}

export default Lesson5;
