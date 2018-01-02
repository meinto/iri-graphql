import { buildSchema } from 'graphql'

import * as node from './iota-node'
import { TYPE_DEFINITION as IOTA_NODE_TYPE_DEFINITION } from './iota-node/Node'

const schema = buildSchema(`
  ${IOTA_NODE_TYPE_DEFINITION}

  type Query {
    ${node.QUERY_DEFINITION}
  }

`)
  // type Mutation {
  //   ${node.MUTATION_DEFINITION}
  // }

const root = Object.assign(
  node.QUERIES,
  // node.MUTATIONS
)

export {
  schema,
  root,
}
