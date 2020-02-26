const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')

const {
  connectionArgs,
  connectionFromArray,
  mutationWithClientMutationId,
} = require('graphql-relay')

const { BookConnection, Book } = require('./types/book/type')
const books = require('./types/book/resolver')

const { nodeField } = require('./interfaces/Node')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    books: {
      type: BookConnection,
      args: connectionArgs,
      resolve: (ctx, args) => connectionFromArray(books.find(), args),
    },
  },
})

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

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation interface for bookshelf',
  fields: {
    createBook: createBookMutation,
  },
})

const schema = new GraphQLSchema({
  query,
  mutation,
})

module.exports = schema
