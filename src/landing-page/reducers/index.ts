import { createSlice } from '@reduxjs/toolkit';
import { ICustomerReview } from '../types';

interface ILandingPageState {
  customerReviews: ICustomerReview[];
  loading: boolean;
}

const initialState: ILandingPageState = {
  customerReviews: [],
  loading: false,
}

export const landingPageSlice = createSlice({
  name: 'landing-page',
  initialState,
  reducers: {
    setCustomerReviews: (state, action) => {
      state.customerReviews = action.payload || [];
    }
  },
})

export const { setCustomerReviews } = landingPageSlice.actions;
export default landingPageSlice.reducer;
