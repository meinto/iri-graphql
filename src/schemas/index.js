import { buildSchema } from 'graphql'

import * as iri from './iri'
import { TYPE_DEFINITION as IRI_TYPE_DEFINITION } from './iri/Iri'

import * as neighbor from './neighbor'
import { TYPE_DEFINITION as NEIGHBOR_TYPE_DEFINITION } from './neighbor/Neighbor'
import { TYPE_DEFINITION as NEIGHBOR_MUTATION_TYPE_DEFINITION } from './neighbor/NeighborMutation'

const schema = buildSchema(`
  ${IRI_TYPE_DEFINITION}
  ${NEIGHBOR_TYPE_DEFINITION}
  ${NEIGHBOR_MUTATION_TYPE_DEFINITION}

  type Query {
    ${iri.QUERY_DEFINITION}
    ${neighbor.QUERY_DEFINITION}
  }

  type Mutation {
    ${neighbor.MUTATION_DEFINITION}
  }
`)

const root = {
  ...iri.QUERIES,
  ...neighbor.QUERIES,

  ...neighbor.MUTATIONS
}

export {
  schema,
  root,
}
