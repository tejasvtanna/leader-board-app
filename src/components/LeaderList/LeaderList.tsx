import React from 'react'
import Leader from 'components/Leader/Leader'
import classes from './LeaderList.module.css'

interface Props {
  n: number
}

const LeaderList = ({ n }: Props) => {
  return (
    <div className={classes.leaderList}>
      <Leader />
      <Leader />
      <Leader />
    </div>
  )
}

export default LeaderList
