const { GraphQLNonNull, GraphQLString } = require('graphql')
const { mutationWithClientMutationId } = require('graphql-relay')

/**
 * @TODO: this should be in context.
 */
const books = require('./resolver')
const { Book } = require('./type')

const createBookMutation = mutationWithClientMutationId({
  name: 'createBook',
  inputFields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    book: {
      type: Book,
      resolve: payload => books.findOne(payload.id),
    },
  },
  mutateAndGetPayload: args => books.create(args),
})

module.exports = { createBookMutation }
