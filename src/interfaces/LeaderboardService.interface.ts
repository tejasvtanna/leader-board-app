import {ILeader} from './Leader.interface'

export interface ILeaderboardService {
    insert(name: string): void
    getList(): ILeader[]
    increment(id: string): void
    decrement(id: string): void
}
