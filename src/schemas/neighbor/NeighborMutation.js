
import {getNeighbors} from './queries'

export const TYPE_DEFINITION = `
type NeighborMutation {
  error: String
  duration: Int
  addedNeighbors: Int
  removedNeighbors: Int
  
  neigbors: [Neighbor]
}
`

export default class NeighborMutation {
  
    constructor(fields) {
      this._data = fields || {}
    }
  
    error = () => this._data.error
    duration = () => this._data.duration
    addedNeighbors = () => this._data.addedNeighbors || 0
    removedNeighbors = () => this._data.removedNeighbors || 0
    
    neigbors = () => getNeighbors()
  
  }