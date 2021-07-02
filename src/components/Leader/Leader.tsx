import React from 'react'
import classes from './Leader.module.css'

const Leader = () => {
  return (
    <div className={classes.leader}>
      <div className={classes.name}>Leader 1</div>
      <div className={classes.score}>11</div>
      <button className={classes.plusMinus}>+</button>
      <button className={classes.plusMinus}>-</button>
    </div>
  )
}

export default Leader
