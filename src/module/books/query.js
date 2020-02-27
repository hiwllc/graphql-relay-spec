const { GraphQLEnumType } = require('graphql')
const { connectionArgs, connectionFromArray } = require('graphql-relay')

const { BookConnection } = require('./type')

const OrderEnum = new GraphQLEnumType({
  name: 'OrderEnum',
  values: {
    ASC: { value: 'ASC' },
    DESC: { value: 'DESC' },
  },
})

const books = {
  type: BookConnection,
  args: { ...connectionArgs, order: { type: OrderEnum } },
  resolve: (__, args, { resolvers }) => {
    return connectionFromArray(resolvers.Book.find(args.order), args)
  },
}

module.exports = {
  books,
}
