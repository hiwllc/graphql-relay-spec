const Koa = require('koa')
const graphHTTP = require('koa-graphql')
const schema = require('./schema')
const resolvers = require('./resolvers')

const app = new Koa()

app.use(
  graphHTTP({
    schema,
    context: {
      resolvers,
    },
    graphiql: true,
  })
)

app.listen(4000)
