import { ILeaderboardService } from 'interfaces/LeaderboardService.interface'
import { ILeader } from 'interfaces/Leader.interface'
import { insert } from './firebase'
import { nanoid } from 'nanoid'
import { leadersRef } from './firebase'

class LeaderboardService implements ILeaderboardService {
  private list: ILeader[] = []

  // getting existing leaders from firebase
  init(callback: any) {
    leadersRef.on('value', (snapshot) => {
      this.list = []
      let items = snapshot.val()
      for (let item in items) {
        this.list.push({
          id: item,
          name: items[item].name,
          points: items[item].points,
        })
      }

      callback()
    })
  }

  getList() {
    return this.list
  }

  async insert(name: string) {
    leadersRef.push({ id: nanoid(), name, points: 0 })
  }

  async increment(id: string) {
    const leader = this.list.find((leader) => leader.id === id)
    if (!leader) return

    leadersRef
      .child(id)
      .update({ points: leader.points + 1 })
      .then(() => (leader.points += 1))
  }

  async decrement(id: string) {
    const leader = this.list.find((leader) => leader.id === id)
    if (!leader) return

    leadersRef
      .child(id)
      .update({ points: leader.points - 1 })
      .then(() => (leader.points -= 1))
  }
}

export const leaderboardService = new LeaderboardService()
