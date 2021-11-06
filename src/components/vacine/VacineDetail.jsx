import axios from "axios";
import React, { useEffect, useState } from "react";
import Detail from "./Detail";
function VacineDetail() {
  const fetchUrl = "https://disease.sh/v3/covid-19/vaccine";
  const [data, updateData] = useState([]);
  useEffect(() => {
    async function getdata() {
      const request = await axios.get(fetchUrl);
      updateData(request.data.data);
      return request;
    }
    getdata();
  }, [fetchUrl]);
  return (
    <React.Fragment>
      <Detail data={data} />
    </React.Fragment>
  );
}

export default VacineDetail;
