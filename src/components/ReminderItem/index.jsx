import React from 'react'
import moment from 'moment'
import clsx from 'clsx'
import checkMark from '../../data/icons/checkMark'
import './reminderItem.css'

const ReminderItem = ({ id, text, dueDate, isComplete, onToggle, onDelete }) => (
  <li key={id} title={isComplete ? `Completed ${text}!` : 'Still pending'}>
    <div className={clsx('status', isComplete && 'completed')} title="Toggle status" onClick={onToggle}>
      {checkMark}
    </div>
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
