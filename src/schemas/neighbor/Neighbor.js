
export const TYPE_DEFINITION = `
type Neighbor {
  address: String
  numberOfAllTransactions: Int
  numberOfRandomTransactionRequests: Int
  numberOfNewTransactions: Int
  numberOfInvalidTransactions: Int
  numberOfSentTransactions: Int
  connectionType: String
}
`

export default class Neighbor {
  
  constructor(fields) {
    this._data = fields || {}
  }
  
    address = () => this._data.address
    numberOfAllTransactions = () => this._data.numberOfAllTransactions
    numberOfRandomTransactionRequests = () => this._data.numberOfRandomTransactionRequests
    numberOfNewTransactions = () => this._data.numberOfNewTransactions
    numberOfInvalidTransactions = () => this._data.numberOfInvalidTransactions
    numberOfSentTransactions = () => this._data.numberOfSentTransactions
    connectionType = () => this._data.connectionType
  
}
