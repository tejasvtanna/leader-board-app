import React from 'react'
import { ILeader } from 'interfaces/Leader.interface'
import classes from './Leader.module.css'

interface Props {
  leader: ILeader
  onIncrement: (id: string) => {}
  onDecrement: (id: string, marks: number) => {}
}

const Leader = ({ leader, onIncrement, onDecrement }: Props) => {
  return (
    <div className={classes.leader}>
      <div className={classes.name}>{leader.name}</div>
      <div className={classes.score} data-testid="points">
        {leader.points}
      </div>
      <button className={classes.plusMinus} onClick={() => onIncrement(leader.id)} data-testid="btnIncrement">
        +
      </button>
      <button
        className={classes.plusMinus}
        onClick={() => onDecrement(leader.id, leader.points)}
        data-testid="btnDecrement">
        -
      </button>
    </div>
  )
}

export default Leader
