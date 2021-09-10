import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

export const errorSlice = createSlice<
  string | Error | null,
  SliceCaseReducers<Error | string | null>,
  string
>({
  name: 'error',
  initialState: null,
  reducers: {
    handleError(_, action: PayloadAction<string | Error>) {
      return action.payload;
    },
    clearError() {
      return null;
    },
  },
});
