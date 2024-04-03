import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { Meta } from "@storybook/react";

export default {
  title: "Material-UI/TablePagination",
  component: TablePagination,
  argTypes: {
    onPageChange: { action: "page change" },
  },
} as Meta;

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
  if (args.page !== page) {
    setPage(args.page);
  }
  return (
    <TablePagination
      {...args}
      page={page}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      onPageChange={handleChangePage}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  count: 100,
  rowsPerPage: 5,
  page: 0,
  onPageChange: (event, newPage) => {
    console.log("New Page:", newPage);
  },
  rowsPerPageOptions: [10, 25, 50, 100],
};

export const MoreRowsPerPageOptions = Template.bind({});
MoreRowsPerPageOptions.args = {
  count: 100,
  rowsPerPage: 10,
  page: 0,
  onPageChange: (event, newPage) => {
    console.log("New Page:", newPage);
  },
  rowsPerPageOptions: [10, 25, 50, 100, 200, 500],
};

export const LastPage = Template.bind({});

LastPage.args = {
  count: 100,
  rowsPerPage: 10,
  page: 9,
  onPageChange: (event, newPage) => {
    console.log("New Page:", newPage);
  },

  rowsPerPageOptions: [10, 25, 50, 100, 200, 500],
};
