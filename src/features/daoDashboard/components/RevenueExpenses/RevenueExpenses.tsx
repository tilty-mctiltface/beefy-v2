import { memo } from 'react';
import { Container } from '@material-ui/core';
import { QuarterlySummary } from './components/QuarterlySummary';

export const RevenueExpenses = memo(function RevenueExpenses() {
  return (
    <Container maxWidth="lg">
      <QuarterlySummary />
    </Container>
  );
});
