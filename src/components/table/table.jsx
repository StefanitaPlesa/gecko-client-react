import { Table as BSTable } from "react-bootstrap";

const Table = (props) => {

    const tableHead = Object.keys(props.data[0]);

  return (
    <BSTable striped bordered hover>
      <thead>
        <tr>
          {tableHead.map(headCol => <th key={headCol}>{headCol.toUpperCase().replaceAll('_', ' ')}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.data.map((obj, index) => {
            return <tr key={`table-comp-${index}`}>
                {tableHead.map((key, index) => (
                <td key={`${obj[key].value}-${index}`}>{obj[key].type === "image" ? <img src={obj[key].value} alt="..." width={50} height="auto"/> : obj[key].value}</td>
            ))}
            </tr>
        })}
      </tbody>
    </BSTable>
  );
};

export default Table;