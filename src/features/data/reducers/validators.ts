import { createSlice } from '@reduxjs/toolkit';
import { fetchValidatorPerformance } from '../actions/validators';

export type ValidatorState = {
  byChain;
};

export const initialValidatorState: ValidatorState = {};

export const validatorSlice = createSlice({
  name: 'validators',
  initialState: initialValidatorState,
  reducers: {
    // wtf is standard reducer logic
  },
  extraReducers: builder => {
    builder.addCase(fetchValidatorPerformance.fulfilled, (sliceState, action) => {
      sliceState;
    });
  },
});
