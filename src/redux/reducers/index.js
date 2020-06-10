import {
  ADD_REMINDER,
  DELETE_REMINDER,
  CLEAR_REMINDERS,
  SORT_BY_DATE_NEWEST,
  SORT_BY_DATE_OLDEST,
} from '../types/index'

const save = array => localStorage.setItem('reminders', JSON.stringify(array))

const reminders = (state = [], action) => {
  const { text, dueDate, id, timestamp } = action
  let reminders = null
  state = JSON.parse(localStorage.getItem('reminders')) || []

  switch (action.type) {
    case ADD_REMINDER:
      reminders = [
        ...state,
        {
          id: Math.random(),
          text,
          dueDate,
          timestamp,
        },
      ]
      save(reminders)
      return reminders
    case DELETE_REMINDER:
      reminders = state.filter(reminder => reminder.id !== id)
      save(reminders)
      return reminders
    case CLEAR_REMINDERS:
      reminders = []
      save(reminders)
      return reminders
    case SORT_BY_DATE_NEWEST:
      reminders = state.sort((a, b) => b.timestamp - a.timestamp)
      save(reminders)
      return reminders
    case SORT_BY_DATE_OLDEST:
      reminders = state.sort((a, b) => a.timestamp - b.timestamp)
      save(reminders)
      return reminders
    default:
      return state
  }
}
export default reminders
