import { useState, useEffect } from 'react'
import AddLeader from '../AddLeader/AddLeader'
import LeaderList from '../LeaderList/LeaderList'
import classes from './LeaderBoard.module.css'
import { leaderboardService } from 'services/LeaderboaardService'
import { ILeader } from 'interfaces/Leader.interface'
import { ToastContainer, toast } from 'react-toastify'

const LeaderBoard = () => {
  const [leaders, setLeaders] = useState<ILeader[]>([])

  // console.log(leaders)

  useEffect(() => {
    leaderboardService.init(updateState)
  }, [])

  const updateState = () => {
    const data = leaderboardService.getList()
    setLeaders([...data])
  }

  const handleAddLeader = async (name: string) => {
    if (!name) {
      toast.error("Leader name can't be empty")
      return
    }
    leaderboardService.insert(name)
  }

  const handleIncrement = async (id: string) => {
    leaderboardService.increment(id)
  }

  const handleDecrement = async (id: string, points: number) => {
    if (points === 0) {
      toast.error('Points can not be lesser than 0')
      return
    }

    leaderboardService.decrement(id)
  }

  return (
    <div className={classes.leaderBoard}>
      <ToastContainer />
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
