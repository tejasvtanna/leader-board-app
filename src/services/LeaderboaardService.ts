import { ILeaderboardService } from 'interfaces/LeaderboardService.interface'
import { ILeader } from 'interfaces/Leader.interface'
import { insert } from './firebase'
import { nanoid } from 'nanoid'

class LeaderboardService implements ILeaderboardService {
  private list: ILeader[] = []

  // constructor() {
  //   // const leader:ILeader = {id: '1', name="Sainath"}
  //   // this.list.push()
  // }

  getList() {
    return this.list
  }

  async insert(name: string) {
    const result = await insert()
    if (result) {
      const leader: ILeader = { id: nanoid(), name, points: 0 }
      this.list.push(leader)
    }
  }

  async increment(id: string) {
    const result = await insert()
    if (result) {
      this.list.forEach((leader) => {
        if (leader.id === id) {
          leader.points += 1
        }
      })
    }
  }

  async decrement(id: string) {
    const result = await insert()
    if (result) {
      this.list.forEach((leader) => {
        if (leader.id === id) leader.points -= 1
      })
    }
  }
}

export const leaderboardService = new LeaderboardService()
