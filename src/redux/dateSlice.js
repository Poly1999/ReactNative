import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    selectedDate: '',
  },
  reducers: {
    changeDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export const { changeDate } = dateSlice.actions;
export default dateSlice.reducer;
