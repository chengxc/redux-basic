import actionType from '../actionType'

const {user: userType} = actionType

export const addUserFn = (id, name) => {
  return {
    type: userType.add,
    id,
    name
  }
}
