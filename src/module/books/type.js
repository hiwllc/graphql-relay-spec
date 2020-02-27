const { GraphQLObjectType, GraphQLString } = require('graphql')

const { globalIdField, connectionDefinitions } = require('graphql-relay')
const { nodeInterface, registerType } = require('../../interfaces/Node')

const Book = registerType(
  new GraphQLObjectType({
    name: 'Book',
    interfaces: [nodeInterface],
    fields: {
      id: globalIdField('Book'),
      title: { type: GraphQLString },
      author: { type: GraphQLString },
    },
  })
)

const { connectionType: BookConnection } = connectionDefinitions({
  name: 'Book',
  nodeType: Book,
})

module.exports = { Book, BookConnection }
