import React, { useState, useEffect } from "react";
import TablePagination from "@mui/material/TablePagination";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/tags/operations";
import {
  selectError,
  selectIsLoading,
  selectTags,
  selectTotal,
} from "../../redux/tags/selector";

export const TagsList = () => {
  const dispatch = useDispatch();

  const tags = useSelector(selectTags);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchTags({ page, rowsPerPage }));
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {isLoading && !isError ? (
        <p>Wczytywanie Listy Tagów...</p>
      ) : isError ? (
        <p>Wystąpił błąd podczas wczytywania listy tagów: {isError}</p>
      ) : tags.length === 0 ? (
        <p>Lista Tagów jest pusta.</p>
      ) : (
        <TableContainer component={Paper}>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "100vw" }}>
                  <h3>Tagi</h3>
                </TableCell>
                <TableCell style={{ width: "100vw" }}>
                  <h3>Powiązane posty</h3>
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
      )}
    </>
  );
};
