import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  dashboard: {
    flex: '1 1 auto',
    backgroundColor: '#121420',
  },
  title: {
    display: 'flex',
    columnGap: '8px',
    alignItems: 'baseline',
    ...theme.typography.h1,
  },
});
