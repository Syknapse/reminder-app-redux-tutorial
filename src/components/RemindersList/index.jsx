import React from 'react'
import moment from 'moment'
import { ReminderItem } from '../index'
import './remindersList.css'

const RemindersList = ({ reminders, onToggle, onDelete }) => {
  const isPast = date => moment(new Date(date)).isBefore()
  const pastReminders = reminders.filter(reminder => isPast(reminder.dueDate))
  const futureReminders = reminders.filter(reminder => !isPast(reminder.dueDate))

  return (
    <ul className="reminders-list">
      {futureReminders.map(reminder => (
        <ReminderItem
          key={reminder.id}
          id={reminder.id}
          text={reminder.text}
          dueDate={reminder.dueDate}
          isComplete={reminder.isComplete}
          onToggle={() => onToggle(reminder.id)}
          onDelete={() => onDelete(reminder.id)}
        />
      ))}
      {pastReminders.length > 0 && <hr />}
      {pastReminders.map(reminder => (
        <ReminderItem
          key={reminder.id}
          id={reminder.id}
          text={reminder.text}
          dueDate={reminder.dueDate}
          isComplete={reminder.isComplete}
          onToggle={() => onToggle(reminder.id)}
          onDelete={() => onDelete(reminder.id)}
        />
      ))}
    </ul>
  )
}

export default RemindersList
