import { bindActionCreators } from "redux";
import { FETCH_HOWTOS, FETCH_HOWTOS_SUCCESS, FETCH_HOWTOS_ERROR, ADD_HOWTO, ADD_HOWTO_SUCCESS, ADD_HOWTO_ERROR } from "./actions";

const initialState = {
  howTos: [],
  isLoading: false,
  isSaving: false,
  error: null,
};

export default function howTosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOWTOS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_HOWTOS_SUCCESS:
      return {
        ...state,
        howTos: action.howTos,
        isLoading: false,
      };
    case FETCH_HOWTOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
      case ADD_HOWTO:
        return {
          ...state,
          isSaving: true,
        };
      case ADD_HOWTO_SUCCESS:
        return {
          ...state,
          howTos: [
            ...state.howTos,
            action.howTo,
          ],
          isSaving: false,
        };
      case ADD_HOWTO_ERROR:
        return {
          ...state,
          isSaving: false,
          error: action.error,
        };

    default:
      return state;
  }
}

