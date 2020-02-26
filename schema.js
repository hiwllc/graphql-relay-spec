const { GraphQLSchema, GraphQLObjectType } = require("graphql")

const { connectionArgs, connectionFromArray } = require("graphql-relay")

const { BookConnection } = require("./types/book/type")
const books = require("./types/book/resolver")

const { nodeField } = require("./interfaces/Node")

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    node: nodeField,
    books: {
      type: BookConnection,
      args: connectionArgs,
      resolve: (ctx, args) => connectionFromArray(books.find(), args),
    },
  },
})

const schema = new GraphQLSchema({
  query,
})

module.exports = schema
