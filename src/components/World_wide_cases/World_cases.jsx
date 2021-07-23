import Card from "../UI/Card";
import React, { useEffect } from "react";
import Flex from "../UI/Flex";
import Style from "./World_wide.module.css";
import Country_data from "../../Covid_data";
import axios from "axios";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import LineGraph from "../Chart/LineGraph";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function World_cases() {
  const [data, updateData] = useState({});
  const fetchUrl = Country_data.CurrentData;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      updateData(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <React.Fragment>
      <h3>Worldwide Covid-19 cases</h3>
      <Flex className="max-width">
        <Card>
          <div className={Style.font}>Covid-19-cases</div>
          <br />
          <div>{data.cases}</div>
        </Card>
        <Card>
          <div className={Style.font}>Today Cases</div>
          <br />
          <div>{data.todayCases}</div>
        </Card>
        <Card>
          <div className={Style.font}>Active</div>
          <br />
          <div>{data.active}</div>
        </Card>
        <Card>
          <div className={Style.font}>Today Recovered</div>
          <br />
          <div>{data.todayRecovered}</div>
        </Card>
        <Card>
          <div className={Style.font}>Deaths</div>
          <br />
          <div>{data.deaths}</div>
        </Card>
      </Flex>
      <br />
      <br />

      <h3>Previous 100 days data Graph</h3>
      <br />
      <LineGraph />
      <br />
      <br />

      <Link to="/vacine" className="white">
        <Button variant="contained" color="primary">
          Get Vacination Deatils
          <ChevronRightIcon />
        </Button>
      </Link>
      <br />
      <br />
      <Link to="/worldcases" className="white">
        <Button variant="contained" color="primary">
          See WorldWide Cases
          <ChevronRightIcon />
        </Button>
      </Link>
      <br />
      <br />
      <div>
        <img src="./doctors.png" alt="" className="min-width" />
      </div>
    </React.Fragment>
  );
}

export default World_cases;
