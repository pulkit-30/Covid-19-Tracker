import React from "react";
import DataDisplay from "./Data_display";
import Style from "./Sidebar.module.css";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
export default function CountryWiseData(props) {
  const [country, setCountry] = useState("");
  const [Input, updateInput] = useState("");
  const handleChange = (event) => {
    updateInput(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    setCountry(Input);
    props.code && props.data(Input);
  };

  return (
    <div className={Style.sidebar + " " + Style.box}>
      <h3>Search Here Country Wise</h3>
      <form onSubmit={handelSubmit} className="max-width">
        <TextField
          id="outlined-basic"
          label="Enter Country Name"
          variant="outlined"
          type="Search"
          className={Style.width}
          value={Input}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <Button variant="outlined" color="primary" type="Submit">
          Search
        </Button>
      </form>
      {props.code ? null : <DataDisplay country={country} />}
    </div>
  );
}
