import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    fetch('/time')
      .then((response) => response.json())
      .then((data) => {
        setCurrentTime(data.time)
      })
  }, []) // remove empty [] array argument to run this every time Python's time changes

  return (
    <div className='App'>
      <header className='App-header'>
        <p>This is the current time: {currentTime}</p>
        <p>Refresh the page to see newest current time.</p>
        <p>
          Visit{' '}
          <a href='http://localhost:5000/time' target='_blank'>
            http://localhost:5000/time
          </a>{' '}
          to see API endpoint from Python
        </p>
      </header>
    </div>
  )
}

export default App
