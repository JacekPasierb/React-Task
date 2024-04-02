import { TableSortLabel } from "@mui/material";
import React from "react";

export default {
    title: "Material-UI/TableSortLabel",
    component: TableSortLabel,
    argTypes: {
      // Tutaj możesz definiować kontrolki dla różnych właściwości (props) komponentu
    //   active={sortBy === "name"}
    //   direction={sortBy === "name" ? sortDirection : "asc"}
    //   onClick={() => handleSort(`name`)}
   
    
    },
  };

  const Template = (args) => <TableSortLabel />;

  export const Large = {
    args: {
      size: 'large',
      label: 'Button',
    },
  };