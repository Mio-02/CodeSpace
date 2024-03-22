// UI组件，连状态都没有 性能优化，不需要更新
// store
import * as React from 'react'; // FC 类型的声明
// 声明一个Props接口
interface Props {
  userName: string;
}

// FC => 函数组件(Function Component)
const Hello:React.FC<Props> = (props) => {
  return (
    <h2>Hello {props.userName}!</h2>
  )
}

export default Hello;