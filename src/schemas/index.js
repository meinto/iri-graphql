import { buildSchema } from 'graphql'

import * as node from './iota-node'
import { TYPE_DEFINITION as IOTA_NODE_TYPE_DEFINITION } from './iota-node/Node'

import * as neighbor from './neighbor'
import { TYPE_DEFINITION as NEIGHBOR_TYPE_DEFINITION } from './neighbor/Neighbor'

const schema = buildSchema(`
  ${IOTA_NODE_TYPE_DEFINITION}
  ${NEIGHBOR_TYPE_DEFINITION}

  type Query {
    ${node.QUERY_DEFINITION}
    ${neighbor.QUERY_DEFINITION}
  }

`)
  // type Mutation {
  //   ${node.MUTATION_DEFINITION}
  // }

const root = {
  ...node.QUERIES,
  ...neighbor.QUERIES, 
}

export {
  schema,
  root,
}
