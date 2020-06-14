import { combineReducers } from 'redux'
import reminders from './reminders'
import filter from './filter'

const reducers = combineReducers({
  reminders,
  filter,
})

export default reducers
