import curl from 'curlrequest'

import Iri from './Iri'
import { config } from '../../config'

export const QUERY_DEFINITION = `
  getNodeInfo: Iri
`

/* implementation */
const getNodeInfo = async () => {

  const options = {
    url: `http://${config.iri.domain}:${config.iri.port}`,
    method: 'POST',
    headers: {
      'X-IOTA-API-Version': config.iri.apiVersion,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      command: 'getNodeInfo'
    })
  }

  return await new Promise(resolve => {
    curl.request(options, (err, data) => {
      if (err) console.log(err, data)
      resolve(new Iri(JSON.parse(data)))
    })
  })
}


export const QUERIES = {
  getNodeInfo,
}
