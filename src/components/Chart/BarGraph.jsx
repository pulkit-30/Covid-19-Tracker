import React from "react";
import Flex from "../UI/Flex";
import Style from "./Graph.module.css";

function BarGraph({ recovered, active, death }) {
  return (
    <Flex className={Style.bar_graph}>
      <div className={Style.x_axis}>
        <div className={Style.markers}>
          <div style={{ bottom: `${3 * recovered + 3}px`, width: "1vw" }}></div>
          <div style={{ bottom: `${3 * active + 3}px`, width: "11vw" }}></div>
          <div style={{ bottom: `${3 * death + 3}px`, width: "21vw" }}></div>
        </div>
      </div>
      <div className={Style.y_axis}></div>
      <div className={Style.values}>
        <div style={{ bottom: `${3 * recovered - 2}px` }}>
          {parseInt(recovered)}%
        </div>
        <div style={{ bottom: `${3 * active - 2}px` }}>{parseInt(active)}%</div>
        <div style={{ bottom: `${3 * death - 2}px` }}>{parseInt(death)}%</div>
      </div>
      <Flex className={Style.bars}>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 255, 0.3)",
            height: `${3 * recovered}px`,
            width: "10vw",
            border: "1px solid blue",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "rgba(0, 247, 0, 0.3)",
            height: `${3 * active}px`,
            width: "10vw",
            border: "1px solid green",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            height: `${3 * death}px`,
            width: "10vw",
            border: "1px solid red",
          }}
        ></div>
      </Flex>
      <Flex className={Style.label}>
        <div>Recovered</div>
        <div>Active</div>
        <div>Deaths</div>
      </Flex>
    </Flex>
  );
}

export default BarGraph;
