import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReminder, deleteReminder, clearReminders } from '../redux/actions/index'
import moment from 'moment'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueDate: '',
    }
  }

  add() {
    const { text, dueDate } = this.state
    if (text) this.props.addReminder(text, dueDate)
  }

  delete(id) {
    this.props.deleteReminder(id)
  }

  clearAll() {
    this.props.clearReminders()
  }

  renderReminders() {
    const { reminders } = this.props
    return (
      <ul className="reminders-list">
        {reminders.map(reminder => (
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
            <input
              id="date"
              title="Add due date"
              type="datetime-local"
              onChange={e => this.setState({ dueDate: e.target.value })}
            />
          </div>
          <div className="button-group">
            <button type="button" onClick={() => this.add()}>
              Save reminder
            </button>
            <button className="delete" type="button" onClick={() => this.clearAll()}>
              Clear all reminders
            </button>
          </div>
        </form>
        {this.renderReminders()}
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state,
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App)

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
