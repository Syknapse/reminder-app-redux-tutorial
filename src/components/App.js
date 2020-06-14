import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReminder, deleteReminder, clearReminders, setFilter } from '../redux/actions/index'
import moment from 'moment'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueDate: '',
      timestamp: '',
    }
  }

  add() {
    const { text, dueDate, timestamp } = this.state
    if (text) this.props.addReminder(text, dueDate, timestamp)
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

  sort(e) {
    this.props.setFilter(e.target.value)
  }

  filterReminders(reminders, filter) {
    if (filter === 'newest') {
      return reminders.sort((a, b) => b.timestamp - a.timestamp)
    } else if (filter === 'oldest') {
      return reminders.sort((a, b) => a.timestamp - b.timestamp)
    } else {
      return reminders
    }
  }

  renderReminders() {
    console.log('props', this.props)
    console.log('state', this.state)
    const { reminders, filter } = this.props
    const filteredReminders = this.filterReminders(reminders, filter)
    return (
      <ul className="reminders-list">
        {filteredReminders.map(reminder => (
          <li key={reminder.id}>
            <div className="text">
              <p>{reminder.text}</p>
              <p className="due-date">{reminder.dueDate && moment(new Date(reminder.dueDate)).fromNow()}</p>
            </div>
            <button className="remove" title="Remove reminder" onClick={() => this.delete(reminder.id)}>
              &#x2715;
            </button>
          </li>
        ))}
      </ul>
    )
  }

  render() {
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
          <div className="sort-group" onChange={e => this.sort(e)}>
            <label htmlFor="newest">Newest</label>
            <input id="newest" type="radio" name="sort" value="newest" />
            <label htmlFor="oldest">Oldest</label>
            <input id="oldest" type="radio" name="sort" value="oldest" />
          </div>
        </form>
        {this.renderReminders()}
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state.reminders,
    filter: state.filter,
  }
}

export default connect(mapStateToProps, {
  addReminder,
  deleteReminder,
  clearReminders,
  setFilter,
})(App)

/* const App = () => {
  const [text, setText] = useState('')

  const add = e => {
    // e.preventDefault()
    console.log('button clicked -->text', text)
    console.log(this)
    addReminder(text)
  }

  return (
    <main className="App">
      <header>Reminder App</header>
      <form>
        <input placeholder="Reminder" onChange={e => setText(e.target.value)} />
        <button type="button" onClick={e => add(e)}>
          Add reminder
        </button>
      </form>
    </main>
  )
}

export default connect(null, { addReminder })(App) */
