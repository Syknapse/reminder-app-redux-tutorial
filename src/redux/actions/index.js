import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, SET_FILTER } from '../types/index'

export const addReminder = (text, dueDate, timestamp) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate,
    timestamp,
  }
  return action
}

export const deleteReminder = id => {
  const action = {
    type: DELETE_REMINDER,
    id,
  }
  return action
}

export const clearReminders = () => {
  const action = {
    type: CLEAR_REMINDERS,
  }
  return action
}

export const setFilter = filter => {
  const action = {
    type: SET_FILTER,
    filter,
  }
  return action
}
