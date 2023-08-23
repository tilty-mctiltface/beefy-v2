import { memo } from 'react';
import quarters from './quarters.json';
import { styles } from './styles';
import { makeStyles } from '@material-ui/core';
import { QuarterlySummaryCard } from '../QuarterlySummaryCard';

export type QuarterType = {
  year: string;
  quarter: number;
  revenues: {
    vault: number;
    validator: number;
    marketMaking?: number;
    grantFunding?: number;
    bribeIncoming?: number;
    onRampIncome?: number;
  };
  costs: {
    contributorFunding: number;
    operationalCosts: number;
    bribes: number;
    marketingAndEvents: number;
    other?: number;
  };
};

const useStyles = makeStyles(styles);

export const QuarterlySummary = memo(function QuarterlySummary() {
  const classes = useStyles();
  const quarterSummaries: QuarterType[] = quarters;

  return (
    <div className={classes.flexContainer}>
      {quarterSummaries.map(quarter => (
        <QuarterlySummaryCard key={`${quarter.quarter}-${quarter.year}`} quarter={quarter} />
      ))}
    </div>
  );
});
