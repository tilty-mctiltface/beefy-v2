import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type ActiveDataCategoryState = {
  activeId: number;
  activeSubId: number;
};

const initialActiveDataCategoryState: ActiveDataCategoryState = {
  activeId: 0,
  activeSubId: 0,
};

export const activeDataCategoryStateSlice = createSlice({
  name: 'active-category',
  initialState: initialActiveDataCategoryState,
  reducers: {
    reset() {
      return initialActiveDataCategoryState;
    },
    setActiveId(sliceState, action: PayloadAction<ActiveDataCategoryState['activeId']>) {
      sliceState.activeId = action.payload;
      sliceState.activeSubId = initialActiveDataCategoryState.activeSubId;
    },
    setActiveSubId(sliceState, action: PayloadAction<ActiveDataCategoryState['activeSubId']>) {
      sliceState.activeSubId = action.payload;
    },
  },
});

export const activeDataCategoryActions = activeDataCategoryStateSlice.actions;
