import { ADD_REMINDER } from '../types/index'

export const AddReminder = payload => {
  const action = {
    type: ADD_REMINDER,
    payload,
  }
  console.log('action', action)
  return action
}
