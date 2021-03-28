import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://restcountries.eu/rest/v2/all?fiels=name;population;region;flag"
      )
      .then((res) => setData(res.data));

  }, []); 

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
