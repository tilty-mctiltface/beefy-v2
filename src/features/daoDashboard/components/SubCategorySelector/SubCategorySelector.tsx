import { Container, makeStyles } from '@material-ui/core';
import { memo, useCallback, useEffect, useState } from 'react';
import { styles } from './styles';
import type { DataCategory } from '../DataCategorySelector';
import { useAppDispatch, useAppSelector } from '../../../../store';
import {
  selectActiveDataCategory,
  selectActiveDataSubCategory,
} from '../../../data/selectors/dao-dashboard';
import { activeDataCategoryActions } from '../../../data/reducers/dao-dashboard';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

type DataSubCategory = {
  categoryId: number;
  categories: DataCategory[];
};

const categories: DataSubCategory[] = [
  {
    categoryId: 0,
    categories: [
      { id: 0, name: 'Revenue & expenses' },
      { id: 1, name: 'Validator' },
      { id: 2, name: 'Contributor costs' },
      { id: 3, name: 'Bribes' },
    ],
  },
  {
    categoryId: 1,
    categories: [
      { id: 0, name: 'Protocol data' },
      { id: 1, name: 'Live staking data' },
      { id: 2, name: 'Bridged BIFI data' },
    ],
  },
  {
    categoryId: 2,
    categories: [
      { id: 0, name: 'BIFI price' },
      { id: 1, name: 'BIFI market cap' },
      { id: 2, name: 'BIFI movement & trends' },
      { id: 3, name: 'BIFI on other services' },
    ],
  },
  {
    categoryId: 3,
    categories: [
      { id: 0, name: 'Upcoming events' },
      { id: 1, name: 'Governance votes' },
      { id: 2, name: 'Blog posts, DeFiles' },
      { id: 3, name: 'Social links' },
    ],
  },
];

export const SubCategorySelector = memo(function SubCategorySelector() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const activeSubId = useAppSelector(selectActiveDataSubCategory);
  const activeId = useAppSelector(selectActiveDataCategory);
  const [currentCategory, setCurrentCategory] = useState<DataCategory[]>(
    categories[activeId].categories
  );

  useEffect(() => {
    setCurrentCategory(categories[activeId].categories);
  }, [activeId]);

  const handleClick = useCallback(
    (id: number) => {
      dispatch(activeDataCategoryActions.setActiveSubId(id));
    },
    [dispatch]
  );

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <div className={classes.selector}>
          {currentCategory.map(category => {
            return (
              <button
                key={category.id}
                className={clsx(classes.button, {
                  [clsx(classes.selected)]: category.id === activeSubId,
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
