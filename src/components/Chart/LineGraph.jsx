import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const options = {
  elements: {
    point: {
      radius: 0,
    },
  },

  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
        },
      },
    ],
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function LineGraph({ casesType }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=100"
      );
      console.log(request.data);

      let chartData = buildChartData(request.data, "cases");
      setData(chartData);
      console.log(chartData);
    };

    fetchData();
  }, [casesType]);
  console.log(data);
  return (
    <div>
      {data?.length > 0 && (
        <Line
          className="min-width"
          data={{
            datasets: [
              {
                backgroundColor: "rgba(0, 0, 255, 0.3)",
                borderColor: "rgba(0, 0, 255, 0.3)",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
