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
import type { AppDispatch } from "../../redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

import { fetchTags } from "../../redux/tags/operations";
import {
  selectError,
  selectIsLoading,
  selectTags,
  selectTotal,
} from "../../redux/tags/selector";
import { TableSortLabel } from "@mui/material";

interface Tag {
  name: string;
  count: number;
}

export const TagsList = () => {
  const dispatch = useAppDispatch();

  const tags: Tag[] = useSelector(selectTags);
  const total: number = useSelector(selectTotal);
  const isLoading: boolean = useSelector(selectIsLoading);
  const isError: string | null = useSelector(selectError);

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("popular");
  const [sortDirection, setSortDirection] = useState<string>("desc");

  useEffect(() => {
    dispatch(fetchTags({ page, rowsPerPage, sortBy, sortDirection }));
  }, [dispatch, page, rowsPerPage, sortBy, sortDirection]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (column: string) => {
    setSortBy(column);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
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
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <TablePagination
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
                      direction={sortBy === "name" ? "desc" : "asc"}
                      onClick={() => handleSort(`name`)}
                    >
                      <h3>Tagi</h3>
                    </TableSortLabel>
                  </TableCell>
                  <TableCell style={{ width: "100vw" }}>
                    <TableSortLabel
                      active={sortBy === "popular"}
                      direction={sortBy === "popular" ? "desc" : "asc"}
                      onClick={() => handleSort(`popular`)}
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
                    <TableCell style={{ width: "100vw" }}>
                      {tag.count}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </>
  );
};
