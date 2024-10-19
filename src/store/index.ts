import { configureStore } from '@reduxjs/toolkit';
import LandingPageReducre from '../landing-page/reducers';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    LandingPage: LandingPageReducre,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;
