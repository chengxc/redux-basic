// 获取模块的基础action类型
function getBaseType (moduleName) {
  return {
    add: `${moduleName}_add`,
    delete: `${moduleName}_delete`,
    modify: `${moduleName}_modify`,
    getAll: `${moduleName}_getAll`,
    getOne: `${moduleName}_getOne`,
    addSome: `${moduleName}_addSome`
  }
}

// //获取模块专属的action类型
// function getType(moduleName,typeName){
//     return {[typeName]:`${moduleName}_${typeName}`}
// }

export default {
  product: Object.assign({}, getBaseType('product')),
  user: Object.assign({}, getBaseType('user'))
}
