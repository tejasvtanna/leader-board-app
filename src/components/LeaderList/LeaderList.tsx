import React from 'react'
import Leader from 'components/Leader/Leader'
import { ILeader } from 'interfaces/Leader.interface'
import classes from './LeaderList.module.css'

interface Props {
  leaders: ILeader[]
  onIncrement: any
  onDecrement: any
}

const LeaderList = ({ leaders, onIncrement, onDecrement }: Props) => {
  return (
    <div className={classes.leaderList}>
      {leaders.length === 0 && <p>Leaders list is empty</p>}

      {leaders.map((leader) => (
        <Leader key={leader.id} leader={leader} onIncrement={onIncrement} onDecrement={onDecrement} />
      ))}
    </div>
  )
}

export default LeaderList
