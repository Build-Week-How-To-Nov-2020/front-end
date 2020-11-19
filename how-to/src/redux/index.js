import { combineReducers } from 'redux'
import howTos from './howtos/reducer';
import authReducer  from './auth/reducer'

const rootReducer = combineReducers({
  authState: authReducer,
  howTosState: howTos,
});

export default rootReducer;