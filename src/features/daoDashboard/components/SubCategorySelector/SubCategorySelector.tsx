import { Container, makeStyles } from '@material-ui/core';
import { memo, useCallback } from 'react';
import { styles } from './styles';
import type { DataCategory } from '../DataCategorySelector';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { selectActiveDataSubCategory } from '../../../data/selectors/dao-dashboard';
import { activeDataCategoryActions } from '../../../data/reducers/dao-dashboard';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const SubCategorySelector = memo(function SubCategorySelector() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const activeId = useAppSelector(selectActiveDataSubCategory);

  const handleClick = useCallback(
    (id: number) => {
      dispatch(activeDataCategoryActions.setActiveSubId(id));
    },
    [dispatch]
  );

  const categories: DataCategory[] = [
    { id: 0, name: 'Revenue' },
    { id: 1, name: 'Validator' },
    { id: 2, name: 'Contributor costs' },
    { id: 3, name: 'Bribes' },
    { id: 4, name: 'Other' },
  ];
  return (
    <Container maxWidth="lg">
      <div className={classes.selector}>
        {categories.map(category => {
          return (
            <button
              key={category.id}
              className={clsx(classes.button, {
                [clsx(classes.selected)]: category.id === activeId,
              })}
              onClick={() => handleClick(category.id)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </Container>
  );
});
