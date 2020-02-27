const { GraphQLEnumType } = require('graphql')
const { connectionArgs, connectionFromArray } = require('graphql-relay')

const { BookConnection } = require('./type')
/**
 * @TODO: this should be in context
 */
const resolver = require('./resolver')

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
  resolve: (__, args) => connectionFromArray(resolver.find(args.order), args),
}

module.exports = {
  books,
}
