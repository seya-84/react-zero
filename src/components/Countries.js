import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

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
          <Card country={country} key={country.name}/>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
