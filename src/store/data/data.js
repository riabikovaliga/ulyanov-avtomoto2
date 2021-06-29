import * as actions from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {CAR} from '../../mock/car';


const initialState = {
  car: CAR,
  reviews: CAR.reviews,
};

const Data = createReducer(initialState, (builder) => {
  builder.addCase(actions.postReview, (state, action) => {
    return {
      ...state,
      reviews: [...state.reviews, action.payload],
    };
  });
});

export {Data};
