## 快速入门

jsx不能返回多个JSX标签，必须包裹到一个共享的父级中，比如`<></>`或者`<React.Fragment></React.Fragment>`

代码中嵌入变量，用`{user.name}`

`style={{}}`中`{}`是`style={}`中的一个对象

如果用`map`函数，需要给每个表项加`key`属性

更新界面：

```jsx
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);
  // ...
```

现在的react更推崇函数组件的形式

**使用Hook**

函数组件父组件给子组件传参数

```jsx
function Square(props) {
  return <button className="square">{props.value}</button>;
}
```

推荐的写法：解构

```jsx
function Square({ value }) {
  return <button className="square">{value}</button>;
}
```

## React哲学

将界面分解为一个个组件，并把他们连接在一起，让数据流经他们

## React Compiler

自动帮你优化一些没必要反复渲染的东西

```jsx
function Child({ data }) {
  console.log("Child render");
  return <div>{data.a}</div>;
}

export default function App() {
  const obj = { a: 1 };

  return (
    <>
      <button onClick={() => {}}>click</button>
      <Child data={obj} />
    </>
  );
}
```

❌ 没有 React Compiler

👉 每点一次按钮：

```
Child render
Child render
Child render
```

👉 因为：

- 父组件 re-render
- `obj` 变了（新引用）
- Child 重新渲染

------

✅ 有 React Compiler

👉 编译器会分析：

- `obj` 是常量
- 不依赖 state / props

👉 自动缓存

结果：

```
Child render   // 只执行一次
```