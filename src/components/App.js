import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addReminder,
  toggleReminder,
  deleteReminder,
  clearReminders,
  setSortFilter,
  setVisibilityFilter,
} from '../redux/actions/index'
import moment from 'moment'
import { FilterSelector, RemindersList } from './index'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueDate: '',
      timestamp: '',
      isComplete: false,
    }
  }

  add() {
    const { text, dueDate, timestamp, isComplete } = this.state
    if (text) this.props.addReminder(text, dueDate, timestamp, isComplete)
  }

  toggle(id) {
    this.props.toggleReminder(id)
  }

  delete(id) {
    this.props.deleteReminder(id)
  }

  clearAll() {
    this.props.clearReminders()
  }

  handleDate(e) {
    const value = e.target.value
    this.setState({ dueDate: value, timestamp: moment(value).unix() })
  }

  applySortFilter(e) {
    this.props.setSortFilter(e.target.value)
  }

  applyVisibilityFilter(e) {
    this.props.setVisibilityFilter(e.target.value)
  }

  sortFilterTypes() {
    return [
      {
        label: 'Newest',
        type: 'NEWEST',
      },
      {
        label: 'Oldest',
        type: 'OLDEST',
      },
    ]
  }

  visibilityFilterTypes() {
    return [
      {
        label: 'All',
        type: 'ALL',
      },
      {
        label: 'Pending',
        type: 'PENDING',
      },
      {
        label: 'Done',
        type: 'DONE',
      },
    ]
  }

  filterReminders({ reminders, currentVisibilityFilter, currentSortFilter }) {
    const visibleReminders = this.filterVisibleReminders(reminders, currentVisibilityFilter)
    const sortedReminders = this.sortReminders(visibleReminders, currentSortFilter)
    return sortedReminders
  }

  filterVisibleReminders(reminders, filter) {
    if (filter === 'DONE') {
      return reminders.filter(reminder => reminder.isComplete)
    } else if (filter === 'PENDING') {
      return reminders.filter(reminder => !reminder.isComplete)
    } else {
      return reminders
    }
  }

  sortReminders(reminders, filter) {
    if (filter === 'NEWEST') {
      return reminders.sort((a, b) => b.timestamp - a.timestamp)
    } else if (filter === 'OLDEST') {
      return reminders.sort((a, b) => a.timestamp - b.timestamp)
    } else {
      return reminders
    }
  }

  render() {
    const { currentSortFilter, currentVisibilityFilter } = this.props
    const sortFilterTypes = this.sortFilterTypes()
    const visibilityFilterTypes = this.visibilityFilterTypes()

    return (
      <main className="app">
        <header>Reminder App</header>
        <form>
          <input
            className="reminder-input"
            placeholder="Type a reminder ..."
            onChange={e => this.setState({ text: e.target.value })}
          />
          <div className="date-group">
            <label htmlFor="date">Add date</label>
            <input id="date" title="Add due date" type="datetime-local" onChange={e => this.handleDate(e)} />
          </div>
          <div className="button-group">
            <button type="button" onClick={() => this.add()}>
              Save reminder
            </button>
            <button className="delete" type="button" onClick={() => this.clearAll()}>
              Clear all reminders
            </button>
          </div>
          <div className="filters">
            <div className="filters-group" onChange={e => this.applyVisibilityFilter(e)}>
              <span>Visibility: </span>
              {visibilityFilterTypes.map(filter => (
                <FilterSelector
                  key={filter.type}
                  group="visibility"
                  label={filter.label}
                  type={filter.type}
                  selected={currentVisibilityFilter}
                />
              ))}
            </div>
            <div className="filters-group" onChange={e => this.applySortFilter(e)}>
              <span>Sort: </span>
              {sortFilterTypes.map(filter => (
                <FilterSelector
                  key={filter.type}
                  group="sort"
                  label={filter.label}
                  type={filter.type}
                  selected={currentSortFilter}
                />
              ))}
            </div>
          </div>
        </form>
        <RemindersList
          reminders={this.filterReminders(this.props)}
          onToggle={id => this.toggle(id)}
          onDelete={id => this.delete(id)}
        />
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state.reminders,
    currentSortFilter: state.currentSortFilter,
    currentVisibilityFilter: state.currentVisibilityFilter,
  }
}

export default connect(mapStateToProps, {
  addReminder,
  toggleReminder,
  deleteReminder,
  clearReminders,
  setSortFilter,
  setVisibilityFilter,
})(App)
