import { memo } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { styles } from './styles';

const useStyles = makeStyles(styles);

export const DataCategorySelector = memo(function DataCategorySelector() {
  const classes = useStyles();
  const categories = ['Financial Data', 'Protocol Data', 'Market Data', 'Misc? Data'];

  return (
    <Container maxWidth="lg">
      <div className={classes.selector}>
        {categories.map(category => {
          return (
            <button key={category} className={classes.button}>
              {category}
            </button>
          );
        })}
      </div>
    </Container>
  );
});
