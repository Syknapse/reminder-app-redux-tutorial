import { combineReducers } from 'redux'
import reminders from './reminders'
import currentSortFilter from './currentSortFilter'
import currentVisibilityFilter from './currentVisibilityFilter'

const reducers = combineReducers({
  reminders,
  currentSortFilter,
  currentVisibilityFilter,
})

export default reducers
