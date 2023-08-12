import { Container, makeStyles } from '@material-ui/core';
import { memo } from 'react';
import { styles } from './styles';

const useStyles = makeStyles(styles);

export const SubCategorySelector = memo(function SubCategorySelector() {
  const classes = useStyles();
  const categories = ['Revenue', 'Validator', 'Contributor Costs', 'Bribes', 'Other'];
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
