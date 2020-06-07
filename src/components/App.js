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
      <ul>
        {reminders.map(reminder => (
          <li key={reminder.id}>
            {reminder.text}
            <button onClick={() => this.delete(reminder.id)}>&#x2715;</button>
            <p>{reminder.dueDate && moment(new Date(reminder.dueDate)).fromNow()}</p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <main className="App">
        <header>Reminder App</header>
        <form>
          <input placeholder="Add a reminder" onChange={e => this.setState({ text: e.target.value })} />
          <input
            title="Add due date"
            type="datetime-local"
            onChange={e => this.setState({ dueDate: e.target.value })}
          />
          <button type="button" onClick={() => this.add()}>
            Add reminder
          </button>
          <button type="button" onClick={() => this.clearAll()}>
            Clear all reminders
          </button>
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
