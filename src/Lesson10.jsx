import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Lesson10() {
  const [country, setCountry] = useState("New Zealand");

  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8")
      .then(function (data) {
        return data.json();
      })
      .then(function (response) {
        setCountry(response[0].name);
      });
  }, []);

  return (
    <div style={{ padding: "2em" }}>
      <h1>What country is 8.8.8.8 located in?</h1>
      <p>{country}</p>
    </div>
  );
}

export default Lesson10;
