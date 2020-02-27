const { GraphQLNonNull, GraphQLString } = require('graphql')
const { mutationWithClientMutationId } = require('graphql-relay')

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
      resolve: (payload, args, { resolvers }) =>
        resolvers.Book.findOne(payload.id),
    },
  },
  mutateAndGetPayload: (args, { resolvers }) => resolvers.Book.create(args),
})

module.exports = { createBookMutation }
