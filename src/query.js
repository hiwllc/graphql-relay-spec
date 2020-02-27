const { GraphQLObjectType } = require('graphql')
const { nodeField } = require('./interfaces/Node')
const { books } = require('./module/books/query')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    books,
  },
})

module.exports = query
