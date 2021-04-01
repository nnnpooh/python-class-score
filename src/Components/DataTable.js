import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { midterm, final, overall } from "../Data/col";

function DataTable({ type, data: db2, dataall: dbAll }) {
  console.log(type);

  let rowName = [];
  let headerName = "Problem";
  if (type === "midterm") {
    rowName = midterm;
  } else if (type === "final") {
    rowName = final;
  } else {
    rowName = overall;
    headerName = "Assessment";
  }

  let tableComponent = (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{headerName}</TableCell>
              <TableCell>Full Score</TableCell>
              <TableCell>Your Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowName.map((el) => (
              <TableRow key={el.fieldname}>
                <TableCell>{el.colname}</TableCell>
                <TableCell>{dbAll[el.fieldname]}</TableCell>
                <TableCell>{db2[el.fieldname]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  return tableComponent;
}

export default DataTable;
