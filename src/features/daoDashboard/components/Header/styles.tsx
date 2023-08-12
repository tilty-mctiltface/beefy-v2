import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    padding: `24px 0 48px 0`,
    backgroundColor: theme.palette.background.alternativeFooterHeader,
  },
  title: {
    ...theme.typography.h1,
  },
});
