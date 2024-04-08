const directivesPlugin = {
  install(app) {
    // 这里可以 挂载全局组件或者指令
    app.directive('color', {
      mounted(el) {
        el.style.color = 'red'
      }
    })
    // 可以写多个执行语句
  }
}
// app.use(directivesPlugin)  use 执行里面对象的 install方法
export default directivesPlugin
