import actionType from '../actionType'

const {product} = actionType

const _default = {
  products: []
}

export default(state = _default.products, action) => {
  switch (action.type) {
    case product.add:
      state.push({id: action.id, name: action.name})
      return [...state]
    case product.addSome:
      state.push.apply(state, action.products)
      return [...state]
    default:
      return state
  }
}
