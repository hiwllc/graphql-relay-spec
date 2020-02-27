const { GraphQLObjectType } = require('graphql')
const { createBookMutation } = require('./module/books/mutation')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation interface for bookshelf',
  fields: {
    createBook: createBookMutation,
  },
})

module.exports = mutation
