## 路由

**Web分类**

- 静态页面：页面内的数据是写死的
- 动态页面：页面里的数据是动态填充的
  - 后端渲染：数据在后端填充，每次返回当前页面
  - 前端渲染：数据在前端填充，一次返回所有页面

目的：把前端页面和特定的url绑定，用处：有时候希望可以通过url打开特定的页面，而不是从首页开始一层一层点进去，当然也是可以不用这样做的。让前端渲染的页面假装和后端渲染是一样的，就是用url对应上页面

React Router 的本质是：

👉 **劫持浏览器路由行为（history API）**

比如：

```
<Link to="/about">About</Link>
```

实际做的是：

- 不发 HTTP 请求
- 修改 URL（pushState）
- React 根据路径重新渲染组件

✔️ 页面**不刷新**
✔️ 只更新组件

👉 这就是 **SPA（单页应用）**

如果用a的话，就是传统多页面应用，每次都会刷新

**安装环境**

- VSCODE安装插件：`Auto Import - ES6, TS, JSX, TSX`
- 安装`Route`组件：`npm i react-router-dom`

**Route组件介绍**

- `BrowserRoute`：所有需要路由的组件，都要包裹在`BrowserRoute`组件内
- `Link`：跳转到某个链接，`to`属性表示跳转到的链接，在代码中用`<Link></Link>`替换到`<a></a>`即可实现前端渲染（其实不准确，是阻塞了默认行为），切换页面时没有向服务器发送请求
- `Routes`：类似于C++中的`switch`，匹配第一个路径
- `Route`：路由，`path`属性表示路径，`element`属性表示路由到的内容

**URL中传递参数**

解析URL：
`<Route path="/linux/:chapter_id/:section_id/" element={<Linux />} />`

获取参数，类组件写法：

```jsx
import React, { Component } from "react";
import { useParams } from "react-router-dom";

class Linux extends Component {
  state = {};
  render() {
    console.log(this.props.params);
    return <h1>Linux</h1>;
  }
}

export default (
  props, //这个userParams不能写在类组件中，所以套一层匿名函数来传下来
) => <Linux {...props} params={useParams()} />;
```

函数组件写法：

```jsx
import React, { Component } from "react";
import { useParams } from "react-router-dom";

const Linux = () => {
  console.log(useParams());
  return <h1>Linux</h1>;
};

export default Linux;
```

**Search Params传递参数**

有的参数是这么写的，就是问号后放变量名等于什么什么

`https://example.com/path?name=John&age=25&city=beijing`

类组件写法：

```jsx
import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";

class Django extends Component {
  state = {
    searchParams: this.props.params[0], // 获取某个参数
    setSearchParams: this.props.params[1], // 设置链接中的参数，然后重新渲染当前页面
  };

  handleClick = () => {
    this.state.setSearchParams({
      name: "abc",
      age: 20,
    });
  };

  render() {
    console.log(this.state.searchParams.get("age"));
    return <h1 onClick={this.handleClick}>Django</h1>;
  }
}

export default (props) => <Django {...props} params={useSearchParams()} />;
```

函数组件写法：

```jsx
import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";

const Django = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
  return <h1>Django</h1>;
};

export default Django;
```

**重定向**

使用`Navigate`组件可以重定向。

`<Route path="*" element={ <Navigate replace to="/404" /> } />`

**嵌套路由**

```jsx
<Route path="/web" element={<Web />}>
  <Route index path="a" element={<h1>a</h1>} />
  <Route index path="b" element={<h1>b</h1>} />
  <Route index path="c" element={<h1>c</h1>} />
</Route>
```

注意：需要在父组件中添加`<Outlet />`组件，用来填充子组件的内容。

希望一个页面有一部分变，有一部分不变，即子页面
