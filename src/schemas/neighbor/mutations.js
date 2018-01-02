import curl from 'curlrequest'

import NeighborMutation from './NeighborMutation'
import { config } from '../../config'

export const MUTATION_DEFINITION = `
  addNeighbors(uris: [String]) : NeighborMutation
  removeNeighbors(uris: [String]) : NeighborMutation
`

/* implementation */
export const addNeighbors = async ({ uris }) => {

  const options = {
    url: `http://${config.iri.domain}:${config.iri.port}`,
    method: 'POST',
    headers: {
      'X-IOTA-API-Version': '1.4',
    },
    data: `{"command": "addNeighbors", "uris":[ ${uris.map(u => `"${u}"`).join(',')} ]}`,
  }

  return await new Promise(resolve => {
    curl.request(options, async (err, data) => {
      resolve(new NeighborMutation(JSON.parse(data)))
    })
  })
}


export const removeNeighbors = async ({ uris }) => {
  
    const options = {
      url: `http://${config.iri.domain}:${config.iri.port}`,
      method: 'POST',
      headers: {
        'X-IOTA-API-Version': '1.4',
      },
      data: `{"command": "removeNeighbors", "uris":[ ${uris.map(u => `"${u}"`).join(',')} ]}`,
    }
  
    return await new Promise(resolve => {
      curl.request(options, async (err, data) => {
        resolve(new NeighborMutation(JSON.parse(data)))
      })
    })
  }


export const MUTATIONS = {
  addNeighbors,
  removeNeighbors,
}
