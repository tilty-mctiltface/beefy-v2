import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  selector: {
    padding: `12px 0 48px 0`,
    display: 'flex',
    flexDirection: 'row' as const,
    flexWrap: 'nowrap' as const,
    columnGap: theme.spacing(2),
    rowGap: theme.spacing(2),
  },
  button: {
    ...theme.typography['body-lg'],
    color: '#8A8EA8',
    background: 'transparent',
    boxShadow: 'none',
    flexGrow: 1,
    flexShrink: 0,
    padding: `${12 - 2}px 0`,
    border: `solid 2px ${theme.palette.background.filters.outline}`,
    borderRadius: '6px',
    cursor: 'pointer',
    '&:hover': {
      background: '#252a43',
    },
    '&:not($selected) $icon': {
      '& .bg': {
        fill: '#2E324C',
      },
      '& .fg': {
        fill: '#1B1E31',
      },
    },
  },
});
