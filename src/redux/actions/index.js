import {
  ADD_REMINDER,
  DELETE_REMINDER,
  CLEAR_REMINDERS,
  SORT_BY_DATE_NEWEST,
  SORT_BY_DATE_OLDEST,
} from '../types/index'

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

export const sortByDateNewest = () => {
  const action = {
    type: SORT_BY_DATE_NEWEST,
  }
  return action
}

export const sortByDateOldest = () => {
  const action = {
    type: SORT_BY_DATE_OLDEST,
  }
  return action
}
