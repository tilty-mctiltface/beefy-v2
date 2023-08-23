import { memo } from 'react';
import type { QuarterType } from '../QuarterlySummary';

type QuarterlySummaryCardProps = {
  quarter: QuarterType;
};

export const QuarterlySummaryCard = memo(function QuarterlySummaryCard({
  quarter,
}: QuarterlySummaryCardProps) {
  const reduceRevenuesOrCosts = (obj: object) => {
    return Object.values(obj).reduce((sum, value) => sum + value);
  };

  const totalCosts = reduceRevenuesOrCosts(quarter.costs);
  const totalRevenues = reduceRevenuesOrCosts(quarter.revenues);
  return (
    <div>
      <p>
        Q{quarter.quarter} {quarter.year}
      </p>
      <div>
        <label>Total Revenues: </label>
        <label>{totalRevenues}</label>
      </div>
      <div>
        <label>Total Costs: </label>
        <label>{totalCosts}</label>
      </div>
      <div>
        <label>Net Profit: </label>
        <label>{totalRevenues - totalCosts}</label>
      </div>
    </div>
  );
});
