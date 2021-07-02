import React from 'react'
import logo from './logo.svg'
import LeaderBoard from 'components/LeaderBoard/LeaderBoard'
import classes from 'App.module.css'

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.appHeader}>Leader Board</div>
      <LeaderBoard />
    </div>
  )
}

export default App
