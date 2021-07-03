import { useState, useEffect } from 'react'
import AddLeader from '../AddLeader/AddLeader'
import LeaderList from '../LeaderList/LeaderList'
import classes from './LeaderBoard.module.css'
import { leaderboardService } from 'services/LeaderboaardService'
import { ILeader } from 'interfaces/Leader.interface'

const LeaderBoard = () => {
  const [leaders, setLeaders] = useState<ILeader[]>([])

  // console.log(leaders)

  useEffect(() => {
    leaderboardService.init(getLeaders)
  }, [])

  const getLeaders = () => {
    const data = leaderboardService.getList()
    setLeaders([...data])
  }

  const handleAddLeader = async (name: string) => {
    await leaderboardService.insert(name).then(getLeaders)
  }

  const handleIncrement = async (id: string) => {
    await leaderboardService.increment(id).then(getLeaders)
  }

  const handleDecrement = async (id: string, points: number) => {
    if (points === 0) return
    leaderboardService.decrement(id).then(getLeaders)
  }

  return (
    <div className={classes.leaderBoard}>
      <div>
        <AddLeader onAddLeader={handleAddLeader} />
      </div>

      {/* <div>Leaders: {JSON.stringify(leaders)}</div> */}

      <div className={classes.leaderLists}>
        <LeaderList leaders={leaders} onIncrement={handleIncrement} onDecrement={handleDecrement}></LeaderList>
        <LeaderList leaders={leaders} onIncrement={handleIncrement} onDecrement={handleDecrement}></LeaderList>
      </div>
    </div>
  )
}

export default LeaderBoard
