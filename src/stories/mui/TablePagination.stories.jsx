import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";

export default {
  title: "Material-UI/TablePagination",
  component: TablePagination,
  argTypes: {
    // Tutaj możesz definiować kontrolki dla różnych właściwości (props) komponentu

    count: 100,
  },
};

// Historia (story) dla komponentu TablePagination
const Template = (args) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    args.onChangePage(event, newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      {...args}
      count={100}
      page={page}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      onPageChange={handleChangePage}
    />
  );
};

export const BasicTablePagination = Template.bind({});
BasicTablePagination.args = {
  rowsPerPage: 25,
};

export const OpenTablePagination = Template.bind({});
OpenTablePagination.args = {
  page: 0,
  rowsPerPage: 50,
};
