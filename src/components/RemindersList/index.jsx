import React from 'react'
import moment from 'moment'
import { ReminderItem } from '../index'

const RemindersList = ({ reminders, onDelete }) => {
  const isPast = date => moment(new Date(date)).isBefore()

  return (
    <ul className="reminders-list">
      {reminders.map(reminder => {
        if (!isPast(reminder.dueDate)) {
          return (
            <ReminderItem
              key={reminder.id}
              id={reminder.id}
              text={reminder.text}
              dueDate={reminder.dueDate}
              onDelete={() => onDelete(reminder.id)}
            />
          )
        } else return null
      })}
      <hr />
      {reminders.map(reminder => {
        if (isPast(reminder.dueDate)) {
          return (
            <ReminderItem
              key={reminder.id}
              id={reminder.id}
              text={reminder.text}
              dueDate={reminder.dueDate}
              onDelete={() => onDelete(reminder.id)}
            />
          )
        } else return null
      })}
    </ul>
  )
}

export default RemindersList
