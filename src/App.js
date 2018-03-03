import {Component} from 'react'
import logo from './logo.svg'

import store from './redux/store'

import {addProductFn, addSomeProductFn} from './redux/createAction'

// 获取商品数据
import productData from './json/product.json'

class App extends Component {
  constructor (props) {
    super(props)

    // 将商品存到store中
    store.dispatch(addSomeProductFn(productData))
    const products = store
      .getState()
      .products
    this.state = {
      productName: '',
      products: products
    }
    this.addProduct = this.addProduct
      .bind(this)
    this.changeInput = this
      .changeInput
      .bind(this)
  }
  render () {
    return (
      <div className="">
        <header className="">
          <img src={logo} width="100" height="100" className="" alt="logo"/>
        </header>
        <p>
          <input type="text" value={this.state.productName} onChange={this.changeInput}/>
          <button onClick={this.addProduct}>添加一个商品</button>
        </p>
        <ul>
          {this.state.products && this
            .state
            .products
            .map(v => {
              return (
                <li key={v.id}>{v.name}</li>
              )
            })}
        </ul>
      </div>
    )
  }
  // 添加一个商品
  addProduct () {
    var productName = this.state.productName
    store.dispatch(addProductFn(Math.random(), productName))

    this.setState({
      products: store.getState().products,
      productName: ''
    })
  }
  changeInput (event) {
    this.setState({productName: event.target.value})
  }
}

export default App
