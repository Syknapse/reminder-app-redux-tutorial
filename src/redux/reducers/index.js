import { ADD_REMINDER } from '../types/index'

const reminder = action => {
  return {
    text: action.payload,
    id: Math.random(),
  }
}

const reminders = (state = [], action) => {
  let reminders = null

  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      console.log('reducer reminders', reminders)
      return reminders
    default:
      return state
  }
}
export default reminders
