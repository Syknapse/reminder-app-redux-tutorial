import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [text, setText] = useState('')

  const addReminder = e => {
    // e.preventDefault()
    console.log('button clicked -->text', text)
  }

  return (
    <main className="App">
      <header>Reminder App</header>
      <form>
        <input placeholder="Reminder" onChange={e => setText(e.target.value)} />
        <button type="button" onClick={e => addReminder(e)}>
          Add reminder
        </button>
      </form>
    </main>
  )
}

export default App
