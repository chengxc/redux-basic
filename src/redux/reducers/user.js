import actionType from '../actionType'

const {user: userType} = actionType

const _default = {
  users: []
}

export default(state = _default.users, action) => {
  switch (action.type) {
    case userType.add:
      state.push({id: action.id, name: action.name})
      return [...state]
    case userType.delete:
      return state
    case userType.modify:
      return state
    default:
      return state
  }
}
