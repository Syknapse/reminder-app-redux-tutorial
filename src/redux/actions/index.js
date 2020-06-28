import {
  ADD_REMINDER,
  TOGGLE_REMINDER,
  DELETE_REMINDER,
  CLEAR_REMINDERS,
  SET_SORT_FILTER,
  SET_VISIBILITY_FILTER,
} from '../types/index'

export const addReminder = (text, dueDate, timestamp, isComplete) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate,
    timestamp,
    isComplete,
  }
  return action
}

export const toggleReminder = id => {
  const action = {
    type: TOGGLE_REMINDER,
    id,
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

export const setSortFilter = filter => {
  const action = {
    type: SET_SORT_FILTER,
    filter,
  }
  return action
}

export const setVisibilityFilter = filter => {
  const action = {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
  return action
}
