import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBeefyApi } from '../apis/instances';
import type { BeefyApiValidatorPerformancesResponse } from '../apis/beefy/beefy-api';

export type FulfilledValidatorPerformancePayload = {
  byChain: BeefyApiValidatorPerformancesResponse;
};

export const fetchValidatorPerformance = createAsyncThunk<FulfilledValidatorPerformancePayload>(
  'validator/performance',
  async () => {
    const api = getBeefyApi();
    const validatorPerformance = await api.getValidatorPerformances();
    return {
      byChain: validatorPerformance,
    };
  }
);
