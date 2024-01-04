import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getBicycles,
  addBicycle,
  deleteBicycle,
  updateBicycleStatus,
  getStats,

} from './operations';
import toast from 'react-hot-toast';
const bicyclesActions = [
  getBicycles,
  addBicycle,
  deleteBicycle,
  updateBicycleStatus,
  getStats,
];
const getActions = type => bicyclesActions.map(action => action[type]);
const notifySuccess = text => toast.success(text);
const notifyError = text => toast.error(text);

export const bicyclesSlice = createSlice({
  name: 'bicycles',
  initialState: {
    items: [],
    stats: {
      total: 0,
      available: 0,
      booked: 0,
      averagePrice: 0,
    },
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getBicycles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addBicycle.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        notifySuccess(`${action.payload.name} added successfully`);
      })
      .addCase(deleteBicycle.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
        notifySuccess('Bicycle deleted successfully');
      })
      .addCase(updateBicycleStatus.fulfilled, (state, action) => {
        const updatedItem = state.items.map(item => {
          if (item._id === action.payload._id) {
            return action.payload;
          } else return item;
        });

        state.items = updatedItem;
        state.isLoading = false;
        notifySuccess(`Bicycle status updated successfully`);
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
        state.error = null;
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        notifyError(`Something went wrong. ${action.payload}`);
      }),
});

export const contactReducer = () => bicyclesSlice.reducer;
