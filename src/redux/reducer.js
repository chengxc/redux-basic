import {combineReducers} from 'redux'

import ProductReducer from './reducers/product'
import UserReducer from './reducers/user'

// 将多个reducer合并了一个统一的reducer
const reducer = combineReducers({products: ProductReducer, users: UserReducer})
export default reducer
