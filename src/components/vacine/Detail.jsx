import React from "react";
import Style from "./Vacine.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Detail(props) {
  return (
    <React.Fragment>
      <img src="img3.jpg" alt="" />
      <h3>Vaccines Available (WorldWide)</h3>

      {props.data.map((vacine, index) => {
        return (
          <Accordion className={Style.box} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2>{vacine.candidate}</h2>
            </AccordionSummary>
            <hr />
            <AccordionDetails>
              <div className={Style.deatil}>
                <h3>Trial Phase : {vacine.trialPhase}</h3>
                <br />
                <h3 style={{ display: "inline" }}>Details :</h3>{" "}
                {vacine.details}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </React.Fragment>
  );
}

export default Detail;
