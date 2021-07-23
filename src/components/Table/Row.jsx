import Style from "./Row.module.css";
function Row(props) {
  return (
    <tr className={Style.row}>
      <td style={{ width: "100px" }}>{props.country.country}</td>
      <td>{props.country.cases}</td>
      <td>{props.country.active}</td>
      <td>{props.country.deaths}</td>
      <td>{props.country.recovered}</td>
    </tr>
  );
}

export default Row;
