import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectTags } from "../../redux/tags/selector";

export default {
  title: "Material-UI/Table",
  component: Table,
};
const tags = useSelector(selectTags);
export const BasicTable = ({
  total,
  rowsPerPage,
  page,
  sortBy,
  sortDirection,
  handleChangePage,
  handleChangeRowsPerPage,
  handleSort,
}) => (
  <Paper sx={{ width: "100%", overflow: "hidden" }}>
    <TableContainer sx={{ maxHeight: 600 }}>
      <TablePagination
        stickyHeader
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "100vw" }}>
              <TableSortLabel
                active={sortBy === "name"}
                direction={sortBy === "name" ? sortDirection : "asc"}
                onClick={() => handleSort("name")}
              >
                <h3>Tagi</h3>
              </TableSortLabel>
            </TableCell>
            <TableCell style={{ width: "100vw" }}>
              <TableSortLabel
                active={sortBy === "popular"}
                direction={sortBy === "popular" ? sortDirection : "asc"}
                onClick={() => handleSort("popular")}
              >
                <h3>Powiązane posty</h3>
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag) => (
            <TableRow key={tag.name}>
              <TableCell style={{ width: "100vw" }}>{tag.name}</TableCell>
              <TableCell style={{ width: "100vw" }}>{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);
