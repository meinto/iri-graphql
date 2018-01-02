import curl from 'curlrequest'

import Neighbour from './Neighbor'
import { config } from '../../config'

export const QUERY_DEFINITION = `
  getNeighbors: Neighbor
`

/* implementation */
export const getNeighbors = async () => {

  const options = {
    url: `http://${config.iri.domain}:${config.iri.port}`,
    method: 'POST',
    headers: {
      'X-IOTA-API-Version': 'someval',
      'Content-Type': 'application/json',
    },
    data: '{"command": "getNeighbors"}',
  }

  return await new Promise(resolve => {
    curl.request(options, (err, data) => {
      const raw = JSON.parse(data)
      const neighbors = raw.neighbors.map(n => new Neighbour(n))
      resolve(neighbors)
    })
  })
}


export const QUERIES = {
  getNeighbors,
}
