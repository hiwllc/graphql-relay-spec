const { fromGlobalId, nodeDefinitions } = require('graphql-relay')
const Loaders = require('../loaders')

const types = {}

const registerType = type => {
  types[type.name] = type
  return type
}

const { nodeInterface, nodeField } = nodeDefinitions(
  globalID => {
    const { type, id } = fromGlobalId(globalID)
    return Loaders[type].findOne(id) || null
  },
  object => types[object.__name] || null
)

module.exports = { nodeInterface, nodeField, registerType }
