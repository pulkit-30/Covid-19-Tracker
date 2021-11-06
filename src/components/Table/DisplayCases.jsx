import React, { useEffect, useState } from "react";
import Row from "./Row";
import Flex from "../UI/Flex";
import axios from "axios";

function DisplayCases() {
  const fetchUrl = `https://disease.sh/v3/covid-19/countries/?strict=true`;

  const [data, updatedata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      updatedata(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const head = {
    country: "Country",
    cases: "Cases",
    active: "Active cases",
    deaths: "Deaths",
    recovered: "Recovered",
  };
  return (
    <Flex>
      {/* <img src="./img2.jpg" alt="" /> */}
      <table className="max-width">
        <tbody>
          <Row country={head} />
          {data.map((countrydata, index) => {
            return <Row country={countrydata} key={index} />;
          })}
        </tbody>
      </table>
    </Flex>
  );
}

export default DisplayCases;
