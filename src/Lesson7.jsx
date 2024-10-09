import { useEffect } from "react";
import { Link } from "react-router-dom";

function Lesson7() {
  useEffect(() => {
    console.log("Created.");
  }, []);

  return (
    <div>
      <h1>We like fortnite</h1>
      <Link to="/lesson8">Next lesson</Link>
    </div>
  );
}

export default Lesson7;
