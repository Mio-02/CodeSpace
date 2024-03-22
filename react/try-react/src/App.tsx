// facebook
// react 哲学 能用JS表达的就不要用API Way 不用那么多API
// 函数就是组件
// 返回一段template的就是组件
// hooks
// 最简单的组件？
import Hello from './hello'
function App() {
  // const [name, setName] = React.useState("initialName")
  const obj = {a:1};  // model
  // JS
  // HTML
  // JSX 是React表示模板的创新写法，在JS里写HTML
  // HTML是表示UI界面最直接，最简单
  return (
    // view

    <>
      <div>
        App
        {obj.a}
        <Hello userName="Mio"/>
      </div>
    </>

  )
}

export default App
