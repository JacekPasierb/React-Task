import React from "react";
import TablePagination from "@mui/material/TablePagination";

export default {
  title: "Material-UI/TablePagination",
  component: TablePagination,
  argTypes: {
    // Tutaj możesz definiować kontrolki dla różnych właściwości (props) komponentu
    onPageChange: { action: "page changed" },
    onChangeRowsPerPage: { action: "rows per page changed" },
    count: 10,
  },
};

// Historia (story) dla komponentu TablePagination
const Template = (args) => <TablePagination {...args} />;

export const BasicTablePagination = Template.bind({});
BasicTablePagination.args = {
  count: 20,
  page: 0,
  rowsPerPage: 10,
  onChangePage: (event, newPage) => {
    console.log("New page:", newPage);
  },
  onChangeRowsPerPage: (event) => {
    console.log("Rows per page:", event.target.value);
  },
};
