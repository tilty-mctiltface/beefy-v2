import type { BeefyState } from '../../../redux-types';

export const selectActiveDataCategory = (state: BeefyState) => state.ui.daoDashboard.activeId;

export const selectActiveDataSubCategory = (state: BeefyState) => state.ui.daoDashboard.activeSubId;
