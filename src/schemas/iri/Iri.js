
import { getNeighbors } from '../neighbor/queries'

export const TYPE_DEFINITION = `
type Iri {
  appName: String
  appVersion: String
  jreAvailableProcessors: Int
  jreFreeMemory: String
  jreVersion: String
  jreMaxMemory: String
  jreTotalMemory: String
  latestMilestone: String
  latestMilestoneIndex: Int
  latestSolidSubtangleMilestone: String
  latestSolidSubtangleMilestoneIndex: Int
  neighborCount: Int
  packetsQueueSize: Int
  time: String
  tips: Int
  transactionsToRequest: Int
  duration: Int

  synced: Boolean

  neighbors: [Neighbor]
}
`

export default class Iri {

  constructor(fields) {
    this._data = fields || {}
  }

  appName = () => this._data.appName
  appVersion = () => this._data.appVersion
  jreAvailableProcessors = () => this._data.jreAvailableProcessors || -1
  jreFreeMemory = () => this._data.jreFreeMemory
  jreVersion = () => this._data.jreVersion
  jreMaxMemory = () => this._data.jreMaxMemory
  jreTotalMemory = () => this._data.jreTotalMemory
  latestMilestone = () => this._data.latestMilestone
  latestMilestoneIndex = () => this._data.latestMilestoneIndex || -1
  latestSolidSubtangleMilestone = () => this._data.latestSolidSubtangleMilestone
  latestSolidSubtangleMilestoneIndex = () => this._data.latestSolidSubtangleMilestoneIndex || -1
  neighborCount = () => this._data.neighbors || -1
  packetsQueueSize = () => this._data.packetsQueueSize || -1
  time = () => this._data.time
  tips = () => this._data.tips || -1
  transactionsToRequest = () => this._data.transactionsToRequest || -1
  duration = () => this._data.duration || -1

  synced = () => this._data.latestMilestoneIndex === this._data.latestSolidSubtangleMilestoneIndex

  neighbors = () => getNeighbors()

}

