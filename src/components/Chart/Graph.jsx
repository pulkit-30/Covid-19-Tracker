import axios from "axios";
import React from "react";
import Progress from "./Progress";
import BarGraph from "./BarGraph";
import { useState } from "react";
import { useEffect } from "react";

import SearchBar from "../searchbar/Country_data";
function Graph() {
  const [data, updateData] = useState({});
  const [country, updateCountry] = useState("India");
  const fetchUrl = "https://disease.sh/v3/covid-19/all";
  const CountryUrl = `https://disease.sh/v3/covid-19/countries/${country}?strict=true`;
  const [CountryActive, updateActive] = useState("");
  const [CountryCases, updateCases] = useState("");
  const [CountryRecoverded, updateRecovered] = useState("");
  const [CountryDeath, updateDeath] = useState("");
  const CountryData = (Country) => {
    updateCountry(Country);
  };
  useEffect(() => {
    async function GetData() {
      const request = await axios.get(fetchUrl);
      const request2 = await axios.get(CountryUrl);
      updateCountryData(request2.data);
      updateData(request.data);

      return request + request2;
    }
    async function GetCountryData() {}
    GetData();
    GetCountryData();
  }, [fetchUrl, CountryUrl]);
  function updateCountryData(country) {
    const cases = country.cases;
    const active = (country.active / country.cases) * 100;
    const death = (country.deaths / country.cases) * 100;
    const recovered = (country.recovered / country.cases) * 100;
    updateCountry(country.country);
    updateCases(cases);
    updateDeath(death);
    updateActive(active);
    updateRecovered(recovered);
  }
  const cases = data.cases;
  const active = (data.active / data.cases) * 100;
  const death = (data.deaths / data.cases) * 100;
  const recovered = (data.recovered / data.cases) * 100;

  return (
    <div>
      <h1>World Wide Cases</h1>
      <Progress
        cases={Math.round(cases)}
        active={Math.round(active)}
        recovered={Math.round(recovered)}
        death={Math.round(death)}
      />
      <br />
      <BarGraph
        active={Math.round(active)}
        recovered={Math.round(recovered)}
        death={Math.round(death)}
      />
      <br />

      <br />
      <SearchBar code="Graph" data={CountryData} />
      {country && (
        <React.Fragment>
          <h2>Covid-19 Graph for {country}</h2>
          <Progress
            cases={CountryCases}
            active={Math.round(CountryActive)}
            recovered={Math.round(CountryRecoverded)}
            death={Math.round(CountryDeath)}
          />
          <BarGraph
            active={Math.round(CountryActive)}
            recovered={Math.round(CountryRecoverded)}
            death={Math.round(CountryDeath)}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default Graph;
