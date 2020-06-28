import { ADD_REMINDER, TOGGLE_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../types/index'
import save from '../../utils/save'

const reminders = (state = [], action) => {
  const { text, dueDate, id, timestamp, isComplete } = action
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
          isComplete,
        },
      ]
      save({ reminders })
      return reminders
    case TOGGLE_REMINDER:
      const [selectedReminder] = state.filter(reminder => reminder.id === id)
      selectedReminder.isComplete = !selectedReminder.isComplete
      reminders = [...state]
      save({ reminders })
      return reminders
    case DELETE_REMINDER:
      reminders = state.filter(reminder => reminder.id !== id)
      save({ reminders })
      return reminders
    case CLEAR_REMINDERS:
      reminders = []
      save({ reminders })
      return reminders
    default:
      return state
  }
}

export default reminders
