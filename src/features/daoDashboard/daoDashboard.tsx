import React, { memo } from 'react';
import { styles } from './styles';
import { makeStyles } from '@material-ui/core';
import { Header } from './components/Header';
import { DataCategorySelector } from './components/DataCategorySelector';
import { SubCategorySelector } from './components/SubCategorySelector';
import { RevenueExpenses } from './components/RevenueExpenses/RevenueExpenses';

const useStyles = makeStyles(styles);

export const DaoDashboard = memo(function DaoDashboard() {
  const classes = useStyles();
  return (
    <div className={classes.dashboard}>
      <Header />
      <DataCategorySelector />
      <SubCategorySelector />
      <RevenueExpenses />
    </div>
  );
});
