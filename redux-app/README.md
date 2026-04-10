# redux-app

这是一个用于学习 `Redux + React-Redux` 的小项目，基于 `Vite` 搭建。

## 你的原始学习笔记（保留版）

### Redux

Redux 将所有共享数据存到一棵状态树中，并且这棵树是唯一数据源。  
在不使用 Redux 时，不同模块之间共享数据常常需要“状态提升”到最近公共祖先，维护成本会越来越高。  
因此可以把全局共享状态集中托管到一个 `store` 中，由统一规则更新。

Redux 在 `dispatch` 之后会让整棵 reducer 树参与一次计算，最终得到新的状态树。

### Redux 基本概念

- `store`：存储整棵状态树
- `state`：维护的数据（通常是树状结构）
- `reducer`：根据 `state + action` 返回新 `state` 的纯函数
- `action`：普通对象，描述“要做什么修改”
- `dispatch`：把 `action` 发送给 store，触发状态更新流程

### React-Redux 基本概念

- `Provider` 组件：包裹应用，并通过 `store` 属性向下提供 Redux store
- `connect(mapStateToProps, mapDispatchToProps)`：把组件和 store 连接起来
- `mapStateToProps`：store 状态变化后会重新执行，用于把状态映射成组件 props
- `mapDispatchToProps`：用于把 dispatch 行为映射成组件 props 方法

### 安装

```bash
npm i redux react-redux @reduxjs/toolkit
```

### 常见补充函数

1. `store.subscribe()`：每次 `dispatch` 后执行订阅回调
2. `configureStore()`：创建 store（RTK 推荐方式）
3. `combineReducers()`：合并多个 reducer

### Redux 做了三件关键事情

1. 单一数据源（Single Source of Truth）

```txt
所有共享状态 -> 一个 store
```

好处：

- 数据唯一
- 避免状态不同步
- 所有组件读取的是同一份状态

2. 状态变更可追踪、可预测

```js
dispatch({ type: "user/updateName", payload: "ma1zer" });
```

好处：

- 每一次修改都有记录
- 可以配合 DevTools 做 time-travel 调试
- 排查问题更清晰

3. 解耦组件与数据逻辑

组件不需要关心：

- 数据从哪里来
- 谁在修改数据

组件只关心：

```js
const user = useSelector(...);
dispatch(...);
```

本质上就是 UI 与业务状态逻辑的解耦。

## 项目代码分析（新增）

### 技术栈

- `react` / `react-dom`
- `redux` / `@reduxjs/toolkit`
- `react-redux`
- `vite`
- `bootstrap`

### 目录结构

```txt
redux-app/
|-- public/
|-- src/
|   |-- components/
|   |   |-- app.jsx
|   |   |-- number.jsx
|   |   `-- string.jsx
|   `-- main.jsx
|-- package.json
`-- vite.config.js
```

### Store 与 reducer（`src/main.jsx`）

项目在入口文件中定义了两个 reducer：

- `f1` 管理 `number`（初始值 `1`）
  - `add`：`state + action.value`
  - `sub`：`state - action.value`
- `f2` 管理 `string`（初始值 `"hello"`）
  - `concat`：`state + action.character`

通过 `combineReducers` 后状态结构如下：

```js
{
  number: 1,
  string: "hello"
}
```

然后使用 `<Provider store={store}>` 注入到应用。

### 组件行为（`src/components`）

- `App`：渲染 `Number` 和 `String`
- `Number`：
  - 读取 `state.number`
  - 点击按钮后 dispatch `concat`（会更新 `string`）
- `String`：
  - 读取 `state.string`
  - 点击按钮后 dispatch `add/sub`（会更新 `number`）

### 当前项目现象

这是一个“交叉更新”的示例：

- `Number` 区域按钮在改 `string`
- `String` 区域按钮在改 `number`

Redux 机制上是允许的，但从命名语义看容易让初学者困惑，适合你用来观察“组件和状态切片并不强绑定”这个特点。

### 运行方式

```bash
npm install
npm run dev
```

常用命令：

```bash
npm run build
npm run preview
npm run lint
```
