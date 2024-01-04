import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://keen-back-end.onrender.com/api';

export const getBicycles = createAsyncThunk(
  'bicycles/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/bicycles');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBicycle = createAsyncThunk(
  'bicycles/addBicycle',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/bicycles', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBicycle = createAsyncThunk(
  'bicycles/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/bicycles/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBicycleStatus = createAsyncThunk(
  'bicycles/updateBicycleStatus',
  async ({ id, status }, thunkAPI) => {
    try {
      const response = await axios.patch(`/bicycles/${id}/status`, {
        status: status,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getStats = createAsyncThunk(
  'bicycles/getStats',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/stats');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
