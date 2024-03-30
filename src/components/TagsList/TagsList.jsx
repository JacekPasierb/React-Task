import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { selectTags } from "../../redux/tags/selector";

export const TagsList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const tags = useSelector(selectTags);
  console.log("tags", tags);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {Object.keys(tags[0])
                .reverse()
                .map((tag) => (
                  <TableCell key={tag} style={{ width: 170 }}>
                    <h3>Tag {tag}</h3>
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tags
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((tag) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={tag.name}>
                    {Object.keys(tags[0])
                      .reverse()
                      .map((column) => {
                        const value = tag[column];
                        return <TableCell key={column}>{value}</TableCell>;
                      })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tags.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
