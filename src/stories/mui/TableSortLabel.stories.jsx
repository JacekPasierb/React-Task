import { TableSortLabel } from '@mui/material';
import React from 'react';


export default {
  title: 'Material-UI/TableSortLabel',
  component: TableSortLabel,
};

const Template = (args) => <TableSortLabel {...args} />;
export const BasicTableSortLabel = Template.bind({});
BasicTableSortLabel.args = {
  active: false,
  direction: 'asc',
  onClick: () => console.log('Sorting clicked'),
  children: <h3>Tagi</h3>, // To jest Twoja zawartość wewnątrz TableSortLabel
};

export const ActiveTableSortLabelAsc = Template.bind({});
ActiveTableSortLabelAsc.args = {
  active: true,
  direction: 'asc',
  onClick: () => console.log('Sorting clicked'),
  children: <h3>Tagi</h3>, // To jest Twoja zawartość wewnątrz TableSortLabel
};

export const ActiveTableSortLabelDesc = Template.bind({});
ActiveTableSortLabelDesc.args = {
  active: true,
  direction: 'desc',
  onClick: () => console.log('Sorting clicked'),
  children: <h3>Tagi</h3>, // To jest Twoja zawartość wewnątrz TableSortLabel
};
