const books = [
  {
    id: 1,
    title: "A Bussula de ouro",
    author: "Phill Pulman",
  },
  {
    id: 2,
    title: "A luneta ambar",
    author: "Phill Pulman",
  },
  {
    id: 3,
    title: "A Faca de prata",
    author: "Phill Pulman",
  },
  {
    id: 4,
    title: "As Cronias de gelo e fogo - A furia dos reis",
    author: "George R R Martin",
  },
]

const find = () => books
const findOne = bid => books.find(({ id }) => bid == id)

module.exports = {
  find,
  findOne,
}
