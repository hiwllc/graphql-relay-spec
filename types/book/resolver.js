const books = [
  {
    id: 1,
    title: 'A Bussula de ouro',
    author: 'Phill Pulman',
  },
  {
    id: 2,
    title: 'A luneta ambar',
    author: 'Phill Pulman',
  },
  {
    id: 3,
    title: 'A Faca de prata',
    author: 'Phill Pulman',
  },
  {
    id: 4,
    title: 'As Cronias de gelo e fogo - A furia dos reis',
    author: 'George R R Martin',
  },
]

const addModelName = data => ({
  ...data,
  __name: 'Book',
})

const find = () => books.map(addModelName)
const findOne = bid => find().find(({ id }) => id == bid)

module.exports = {
  find,
  findOne,
}
