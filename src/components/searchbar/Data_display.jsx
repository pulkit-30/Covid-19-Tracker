import { Card } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./Sidebar.module.css";
function DataDisplay(props) {
  const fetchUrl = `https://disease.sh/v3/covid-19/countries/${props.country}?strict=true`;
  const [data, updatedata] = useState({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      updatedata(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div>
      {data.cases && (
        <div>
          <h3>Covid-19 Report for {data.country}</h3>
          <Card className={Style.padding}>Total Cases: {data.cases}</Card>
          <Card className={Style.padding}>Today Cases: {data.todayCases}</Card>
          <Card className={Style.padding}>Active:{data.active}</Card>
          <Card className={Style.padding}>
            Today Recovered: {data.todayRecovered}
          </Card>
          <Card className={Style.padding}>Deaths: {data.deaths}</Card>
        </div>
      )}
    </div>
  );
}
export default DataDisplay;
