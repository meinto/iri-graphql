import express from 'express'
import graphqlHTTP from 'express-graphql'
import { root, schema } from './schemas'
import cors from 'express-cors'

import { config } from './config'

export const configureGraphql = app => {
  var corsOptions = {
    allowedOrigins: ['localhost'],
  }
  app.use(cors(corsOptions))


  app.use(config.endpoints.graphql, graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }))

  return app
}

let app = express()

app = configureGraphql(app)

app.listen(config.server.port, () => {
  console.log(`server is up on port ${config.server.port}`) // eslint-disable-line
})

