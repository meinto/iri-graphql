import curl from 'curlrequest'

import Node from './Node'
import { config } from '../../config'

export const QUERY_DEFINITION = `
  getNodeInfo: Node
`

/* implementation */
const getNodeInfo = async () => {

  const options = {
    url: `http://${config.iri.domain}:${config.iri.port}`,
    method: 'POST',
    headers: {
      'X-IOTA-API-Version': 'someval',
      'Content-Type': 'application/json',
    },
    data: '{"command": "getNodeInfo"}',
  }

  return await new Promise(resolve => {
    curl.request(options, (err, data) => {
      console.log(options, JSON.parse(data))
      resolve(new Node(JSON.parse(data)))
    })
  })
}


export const QUERIES = {
  getNodeInfo,
}
