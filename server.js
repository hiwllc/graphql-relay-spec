const Koa = require("koa")
const graphHTTP = require("koa-graphql")
const schema = require("./schema")

const app = new Koa()

app.use(
  graphHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(4000)
