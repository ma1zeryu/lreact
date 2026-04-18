# React 学习项目总览

这个仓库存放了 4 个 React 学习小项目：

- `box-app`
- `route-app`
- `redux-app`
- `calculator-app`

下面按**重要程度（高 -> 低）**整理当前学习覆盖情况。

## 已有知识点（按重要程度）

### P0（核心基础，已覆盖）

1. React 组件化基础：`props`、`state`、事件处理、列表渲染
2. 路由基础：`react-router-dom` 的静态路由、动态路由、嵌套路由、404 重定向
3. Redux 基础：`store`、`reducer`、`action`、`dispatch`、`Provider`、`connect`

### P1（实战能力，已覆盖）

1. 基础表单处理（登录/注册）
2. 组件组合与页面拆分
3. 简单权限路由（登录状态控制页面访问）

### P2（工程入门，已覆盖）

1. Vite 项目搭建与开发流程
2. ESLint 基础配置
3. Bootstrap 基础使用

## 缺失知识点（按重要程度）

### P0（最优先补齐）

1. 函数组件 + Hooks：`useState`、`useEffect`、`useMemo`、`useCallback`、`useRef`
2. 现代 Redux（RTK 主流写法）：`createSlice`、`createAsyncThunk`、`useSelector`、`useDispatch`
3. 现代异步请求方案：`fetch/axios + async/await`（替代 `$.ajax`）
4. TypeScript 在 React 中的使用（组件 Props、状态、接口类型）

### P1（主流项目必备）

1. 测试体系：`Vitest` + `React Testing Library`（至少补齐组件测试）
2. React Router 进阶：Data APIs（`loader/action`）、路由级错误处理
3. 性能优化：`React.memo`、`lazy/Suspense`、代码分割、渲染优化思路
4. 可访问性（a11y）与表单体验优化

### P2（进阶工程化）

1. 代码规范完善：Prettier、lint-staged、Husky
2. CI 流程（自动 lint/test/build）
3. 目录与状态分层规范（feature-based 组织方式）

## 建议学习顺序（简版）

1. 先把所有 class 组件逐步迁移到函数组件 + Hooks
2. 将 Redux 改造为 RTK `createSlice` 风格
3. 用 `axios/fetch` 重写登录注册请求，统一错误处理
4. 给 `calculator-app` 补 5-10 个核心测试
5. 新建一个 `React + TS` 小项目做类型化实践

## 函数组件 + Hooks 学习清单（主流）

### 1. 必会 Hooks（P0）

1. `useState`：管理本地状态，理解“异步批处理更新”
2. `useEffect`：处理副作用（请求、订阅、定时器、手动 DOM）
3. `useRef`：保存可变值/DOM 引用，不触发重渲染
4. `useMemo`：缓存“计算结果”，避免重复重算
5. `useCallback`：缓存“函数引用”，减少子组件无效渲染

### 2. 常用 Hooks（P1）

1. `useContext`：跨层级共享数据（替代层层传 props）
2. `useReducer`：复杂状态流（多个状态联动时更清晰）
3. 自定义 Hook：提取可复用逻辑（如 `useAuth`、`useRequest`）

### 3. Hooks 规则（必须牢记）

1. 只在函数组件或自定义 Hook 顶层调用
2. 不在 `if/for/嵌套函数` 中调用 Hook
3. `useEffect` 依赖项要完整声明，避免闭包陷阱

### 4. `useEffect` 主流心智模型

1. 把它当“与 React 同步外部系统”的工具，不是“生命周期替代品”
2. 请求副作用：初始化拉数据 + 失败处理 + 卸载清理（必要时中断请求）
3. 事件副作用：添加监听就要在 cleanup 中移除监听
4. 定时器副作用：创建 `setInterval/setTimeout` 后在 cleanup 清除

### 5. class -> Hooks 对照（迁移必看）

1. `this.state` -> `useState`
2. `this.setState` -> `setXxx`
3. `componentDidMount` -> `useEffect(..., [])`
4. `componentDidUpdate` -> `useEffect(..., [deps])`
5. `componentWillUnmount` -> `useEffect` 返回 cleanup
6. 实例变量 -> `useRef`

### 6. 性能优化主流组合（P1）

1. 子组件使用 `React.memo`
2. 父组件传函数时配合 `useCallback`
3. 重计算逻辑放入 `useMemo`
4. 先定位性能瓶颈再优化，不做过度优化

### 7. 推荐在本仓库的练习顺序

1. 先改 `calculator-app/src/component/app.jsx`（`useState + useEffect`）
2. 再改 `navBar/login/register` 为函数组件
3. 最后改 Redux 连接组件，逐步过渡到 `useSelector/useDispatch`

### 8. 自测 checklist（每次改造后过一遍）

1. 页面行为是否与改造前一致
2. 是否移除了所有 `this` / class 语法
3. `useEffect` 依赖是否正确、是否有 cleanup
4. 是否出现不必要的重复渲染
5. ESLint 是否通过
