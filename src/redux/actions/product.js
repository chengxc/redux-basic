import actionType from '../actionType'

const {product} = actionType

export const addProductFn = (id, name) => {
  return {
    type: product.add,
    id,
    name
  }
}

export const addSomeProductFn = (products) => {
  return {
    type: product.addSome,
    products
  }
}

export const deleteProductFn = (id) => {
  return {
    type: product.delete,
    id
  }
}

export const modifyProductFn = (id) => {
  return {
    type: product.modify,
    id
  }
}
