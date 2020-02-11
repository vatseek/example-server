// import { get } from 'lodash'
import { handleActions } from "redux-actions";
import { fetchUser } from "../actions/userActions";

const initialState = {
  data: null
};

const userReducer = handleActions(
  {
    [fetchUser]: (state, { payload }) => {
      return {
        ...state,
        data: payload
      };
    }
  },
  initialState
);

export default userReducer;
