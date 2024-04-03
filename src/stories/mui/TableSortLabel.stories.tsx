import { TableSortLabel } from "@mui/material";
import React, { useState } from "react";

export default {
  title: "Material-UI/TableSortLabel",
  component: TableSortLabel,
  argTypes: {
    active: {
      control: { type: "boolean" },
    },
    direction: {
      
      control: "radio",
      options: ["asc", "desc"],
    },
  },
};

const Template = (args) => {
  const [sortBy, setSortBy] = useState("popular");
  const [sortDirection, setSortDirection] = useState("desc");

  const handleSort = (column) => {
    // setSortBy(column);
    // setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };
  return (
    <TableSortLabel
      {...args}
      sortBy={sortBy}
      sortDirection={sortDirection}
      onClick={()=>handleSort}
    />
  );
};

export const BasicTableSortLabel = Template.bind({});
BasicTableSortLabel.args = {
  active:false,
  onClick: () => console.log("Sorting clicked"),
  children: <h3>Tagi</h3>,
};

export const ActiveTableSortLabelAsc = Template.bind({});

ActiveTableSortLabelAsc.args = {
  active: true,
  direction: "asc",
  onClick: () => console.log("Sorting clicked"),
  children: <h3>Tagi</h3>,
};

export const ActiveTableSortLabelDesc = Template.bind({});

ActiveTableSortLabelDesc.args = {
  active: true,
  direction: "desc",
  onClick: () => console.log("Sorting clicked"),
  children: <h3>Tagi</h3>,
};
