import React from "react";
import Flex from "../UI/Flex";

function Progress({ cases, recovered, active, death }) {
  return (
    <Flex className="column">
      <br />
      <h3>Total Cases : {cases}</h3>
      <br />
      <br />
      <div>
        <h2>Recovered : {recovered}%</h2>
        <progress value={recovered} max="100"></progress>
      </div>
      <br />
      <div>
        <h2>Active cases : {active}%</h2>
        <div>
          <progress value={active} max="100"></progress>
        </div>
      </div>
      <br />
      <div>
        <h2>Deaths : {death}%</h2>
        <progress value={death} max="100"></progress>
      </div>
    </Flex>
  );
}

export default Progress;
