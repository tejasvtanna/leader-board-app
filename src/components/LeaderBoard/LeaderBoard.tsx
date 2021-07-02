import React from 'react'
import AddLeader from '../AddLeader/AddLeader'
import LeaderList from '../LeaderList/LeaderList'
import classes from './LeaderBoard.module.css'

const LeaderBoard = () => {
  return (
    <div className={classes.leaderBoard}>
      <div>
        <AddLeader/>
      </div>

      <div className={classes.leaderLists}>
          <LeaderList n={1}></LeaderList>
          <LeaderList n={2}></LeaderList>
      </div>
    </div>
  )
}

export default LeaderBoard
