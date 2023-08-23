import { memo, useCallback } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { activeDataCategoryActions } from '../../../data/reducers/dao-dashboard';
import { selectActiveDataCategory } from '../../../data/selectors/dao-dashboard';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export type DataCategory = {
  id: number;
  name: string;
};

export const DataCategorySelector = memo(function DataCategorySelector() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const activeId = useAppSelector(selectActiveDataCategory);

  const handleClick = useCallback(
    (id: number) => {
      dispatch(activeDataCategoryActions.setActiveId(id));
    },
    [dispatch]
  );

  const categories: DataCategory[] = [
    { id: 0, name: 'Financial Data' },
    { id: 1, name: 'Protocol Data' },
    { id: 2, name: 'Market Data' },
    { id: 3, name: 'Misc Data' },
  ];

  return (
    <div className={classes.container}>
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
    </div>
  );
});
