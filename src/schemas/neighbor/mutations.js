import curl from 'curlrequest'

import Neighbour from './Neighbor'
import { config } from '../../config'
import { getNeighbors } from './queries'

export const MUTATION_DEFINITION = `
  addNeighbors(uris: [String]) : [Neighbor]
  removeNeighbors(uris: [String]) : [Neighbor]
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
      console.log(err, data)
      const neighbors = await getNeighbors()
      resolve(neighbors)
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
        console.log(err, data)
        const neighbors = await getNeighbors()
        resolve(neighbors)
      })
    })
  }


export const MUTATIONS = {
  addNeighbors,
  removeNeighbors,
}
