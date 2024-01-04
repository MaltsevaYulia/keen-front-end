import { configureStore} from '@reduxjs/toolkit';
import { bicyclesSlice } from './bicyclesSlice';


export const store = configureStore({
  reducer: {
    bicycles: bicyclesSlice.reducer,
  },
 
});
