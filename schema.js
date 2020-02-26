const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql")
const Book = require("./types/book/type")
const books = require("./types/book/resolver")

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    books: {
      type: new GraphQLList(Book),
      resolve: books.find,
    },
    book: {
      type: Book,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (context, { id }) => books.findOne(id),
    },
  },
})

const schema = new GraphQLSchema({
  query,
})

module.exports = schema
