import React from 'react'
import moment from 'moment'

const ReminderItem = ({ id, text, dueDate, onDelete }) => (
  <li key={id}>
    <div className="text">
      <p>{text}</p>
      <p className="due-date">{dueDate && moment(new Date(dueDate)).fromNow()}</p>
    </div>
    <button className="remove" title="Remove reminder" onClick={onDelete}>
      &#x2715;
    </button>
  </li>
)

export default ReminderItem
