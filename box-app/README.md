中文文档`https://zh-hans.react.dev/learn`

网站运行逻辑：用户访问网页时会从服务器下载一些文件到用户本地，然后由浏览器来组合

拳皇项目，把一个div和事件和操作封装为一个class

react也有类似的封装

会在内存中弄一个DOM树，在内存中修改所以速度更快，是数据驱动的

写Jsx，然后编译为Js

## 配置环境

**创建`React App`**

在目标目录下打开终端，在终端执行：

```c++
npm create vite@latest react-app  # 可以替换为其他app名称

cd react-app
npm start  # 启动应用
```

## ES6语法补充

使用`bind()`函数绑定`this`取值

在Js中，函数中的`this`指向的是执行时的调用者，而非定义时所在的对象。

例如：

```javascript
const person = {
  name: "yxc",
  talk: function () {
    console.log(this);
  },
};

person.talk();

const talk = person.talk;
talk();
```

运行结果：

```
{name: 'yxc', talk: ƒ}
Window
```

`bind()`函数，可以绑定`this`的取值。例如：

```javascript
const talk = person.talk.bind(person);
```

**箭头函数的简写方式**

```javascript
const f = (x) => {
  return x * x;
};
```

可以简写为：

```javascript
const f = (x) => x * x;
```

**箭头函数不重新绑定`this`的取值**

例如：

```javascript
const person = {
  talk: function () {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};

person.talk(); // 输出Window
```

```javascript
const person = {
  talk: function () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};

person.talk(); // 输出 {talk: f}
```

**对象的结构**

例如：

```javascript
const person = {
  name: "yxc",
  age: 18,
  height: 180,
};

const { name, age } = person;
const { name: new_name, age } = person; // nm是name的别名
//等价于
const new_name = person.name,
  age = person.age;
```

**数组和对象的展开**

例如：

```javascript
let a = [1, 2, 3];
let b = [...a]; // b是a的复制
let c = [...a, 4, 5, 6];
```

```react
const a = {name: "yxc"};
const b = {age: 18};
const c = {...a, ...b, height: 180};
```

**Named与Default exports**

- Named Export：可以export多个，import的时候需要加大括号，名称需要匹配

  ```javascript
  export class Player {}

  class Player {}

  export { Player };

  import { Player } from "";
  ```

- Default Export：最多export一个，import的时候不需要加大括号，可以直接定义别名

  ```javascript
  export default class Player {}

  import MyPlayer from "static/..";
  ```

## 相关知识

Hooks机制（让函数组件“有状态”）？？待学习

虚拟DOM树，自动生成最优的DOM操作，比如原本`<ul>`改了需要全部渲染，现在只需要更新真正有变化的表项

**JSX**

`React`中的一种语言，会被Babel解释成标准Js

**react项目结构**

`node_modules`：安装的库，别人造好的轮子

`public/index.html`：最后渲染东西的界面

jsx在js基础上支持标签语言

## Components

- 类组件cc，需要维护状态使用类组件
- 函数组件sfc，如果不需要维护状态就写函数组件（目前好像不是了）

该项目一直在写类组件，`cc`快速开始一个类组件

**创建项目**

创建项目`box-app`：

```javascript
create-react-app box-app
cd box-app
npm start
```

安装`bootstrap`库：

`npm i bootstrap`

`bootstrap`的引入方式：

`import 'bootstrap/dist/css/bootstrap.css';`

**创建Component**

组件：html，jsx，data捏在一起

**创建按钮**

当子节点数量大于1时，可以用`<div>`或`<React.Fragment>`将其括起来

**内嵌表达式**

JSX中使用`{}`嵌入表达式。类似js中的`${}`

**设置属性**

- `class -> className`：因为和Js中的`class`重名了，所以换了一个替代
- CSS属性：`background-color -> backgroundColor`，其它属性类似，将`-`换为小驼峰命名法

```jsx
styles = {
        width: "50px",
        height: "50px",
        backgroundColor: "lightblue",
        color: "white",
        textAlign: "center",
        lineHeight: "50px",
        borderRadius: "5px"
    }

    render() { //用来返回该组件最后渲染的html的结构
        //这里返回必须是一个标签，所以要用<div>括起来
        return (
            <React.Fragment>{/* 一个虚拟元素，为了让元素合法 */}
                //这里两个{{}}，第一个是因为内嵌元素要用{}，第二个是对象
                <div style={this.styles}>{this.toString()}</div>
                <button className='btn btn-primary m-2'>left</button>
                <button className='btn btn-success m-2'>right</button>
            </React.Fragment>
        );
    }
```

**数据驱动改变Style**

react禁术：手动修改DOM，应该关注state，并且建立state到UI的映射

`点击按钮 → 改 state → React 自动更新 UI`

```jsx
import React, { Component, createContext } from "react";

class Box extends Component {
  state = {
    x: 1,
  };

  render() {
    //用来返回该组件最后渲染的html的结构
    //这里返回必须是一个标签，所以要用<div>括起来
    return (
      <React.Fragment>
        {/* 一个虚拟元素，为了让元素合法 */}
        <div style={this.getStyles()}>{this.toString()}</div>
        <button className="btn btn-primary m-2">left</button>
        <button className="btn btn-success m-2">right</button>
      </React.Fragment>
    );
  }

  getStyles() {
    let styles = {
      width: "50px",
      height: "50px",
      backgroundColor: "lightblue",
      color: "white",
      textAlign: "center",
      lineHeight: "50px",
      borderRadius: "5px",
    };

    if (this.state.x === 0) {
      //通过state.x数据变化，即可直接更改css样式
      styles.color = "orange";
    }

    return styles;
  }

  toString() {
    return `x: ${this.state.x}`;
  }
}

export default Box;
```

**渲染列表**

- 使用`map`函数
- 涉及到map的地方每个元素需要具有唯一的`key`属性，用来帮助React快速找到被修改的DOM元素。且只修改这一个元素

```jsx
state = {
    //放一些静态数据的地方
    x: 1,
    colors: ["red", "green", "blue"],
  };

  render() {
    //用来返回该组件最后渲染的html的结构
    //这里返回必须是一个标签，所以要用<div>括起来
    return (
      <React.Fragment>
        {/* 一个虚拟元素，为了让元素合法 */}
        <div style={this.getStyles()}>{this.toString()}</div>
        <button className="btn btn-primary m-2">left</button>
        <button className="btn btn-success m-2">right</button>
        {this.state.colors.map((color) => (//这里
          <div key={color}>{color}</div>
        ))}
      </React.Fragment>
    );
  }
```

```jsx
import React, { Component } from "react";
import Box from "./box";

class Boxes extends Component {
  state = {
    boxes: [
      { id: 1, x: 0 },
      { id: 2, x: 0 },
      { id: 3, x: 0 },
      { id: 4, x: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.boxes.map(
          (
            box, //map函数，遍历数组，依次为数组中的每个元素
          ) => (
            <Box key={box.id} />
          ),
        )}
      </React.Fragment>
    );
  }
}

export default Boxes;
```

**Conditional Rendering**

利用逻辑表达式的短路原则。

- 与表达式中的`expr1 && expr2`，当`expr1`为假时返回`expr1`的值，否则返回`expr2`的值
- 或表达式中`expr1 || expr2`，当`expr1`为真时返回`expr1`的值，否则返回`expr2`的值

**绑定事件**

- 注意妥善处理好绑定事件函数的`this`，一般用箭头函数来定`this`

**修改state**

- 需要使用`this.setState()`函数
- 每次调用`this.setState()`函数后，会重新调用`this.render()`函数，用来修改虚拟DOM树。react只会修改不同步的实际DOM树结点

**给事件函数添加参数**

```jsx
handleClickLeft = (step) => {
    this.setState({
      x: this.state.x - step,
    });
  };

  handleClickRight = (step) => {
    this.setState({
      x: this.state.x + step,
    });
  };

  handleClickLeftTmp = () => {
    return this.handleClickLeft(10);
  };

  render() {
    //用来返回该组件最后渲染的html的结构
    //这里返回必须是一个标签，所以要用<div>括起来
    return (
      <React.Fragment>
        {/* 一个虚拟元素，为了让元素合法 */}
        <div style={this.getStyles()}>{this.toString()}</div>
        <button
          onClick={this.handleClickLeftTmp}
          className="btn btn-primary m-2"
        >
          left
        </button>
        <button
          onClick={() => this.handleClickRight(10)}
          className="btn btn-success m-2"
        >
          right
        </button>
        {this.state.colors.map((color) => (
          <div key={color}>{color}</div>
        ))}
      </React.Fragment>
    );
  }
```

- 直接写另一个函数套一层
- 通过匿名函数+语法糖套一层

**插件语法糖**

1. `imrc`
2. `cc`

## 组合Components

即在组件之间传递一些数据

**创建`Boxes`组件**

`Boxes`组件包含一系列`Box`组件

**从上到下传递数据**

通过`this.props`属性可以从上到下传递数据

```jsx
//boxes.jsx
class Boxes extends Component {
  state = {
    boxes: [
      { id: 1, x: 0 },
      { id: 2, x: 1 },
      { id: 3, x: 2 },
      { id: 4, x: 3 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.boxes.map((box) => (
          <Box key={box.id} x={box.x} /> //这里向Box组件传递了x
        ))}
      </React.Fragment>
    );
  }
}
//box.jsx
state = {
  //放一些静态数据的地方
  x: this.props.x, //通过this.props属性直接获取到传递的x值
  colors: ["red", "green", "blue"],
};
```

**传递子节点**（父元素对子元素）

通过`this.props.children`属性传递子节点

```jsx
//boxes.jsx
render() {
    return (
      <React.Fragment>
        {this.state.boxes.map((box) => (
          <Box key={box.id} x={box.x}>
            <h1>Box:</h1>
            <p>#{box.id}</p>
          </Box>
        ))}
      </React.Fragment>
    );
  }
//box.jsx
{this.props.children[0]}
//这样就可以获取到`<h1>Box:</h1>`
```

父元素给子元素传递信息非常舒服，直接props

**从下往上调用函数**（子元素对父元素）

注意：每个组件的`this.state`只能在==组件内部修改==，不能在其它组件内修改。把state当成私有变量就好了。

把函数当作参数传给子组件，然后在子组件中调用这个函数

```jsx
import React, { Component } from "react";
import Box from "./box";

class Boxes extends Component {
  state = {
    boxes: [
      { id: 1, x: 1 },
      { id: 2, x: 2 },
      { id: 3, x: 3 },
      { id: 4, x: 4 },
    ],
  };

  handleDelete = (boxId) => {
    const boxes = this.state.boxes.filter((b) => b.id !== boxId);
    this.setState({ boxes });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.boxes.map((box) => (
          <Box
            key={box.id}
            x={box.x}
            id={box.id}
            onDelete={this.handleDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Boxes;
```

**每个维护的数据仅能保存在一个`this.state`中**

不要直接修改`this.state`的值，因为`setState`函数可能会将修改覆盖掉

这里课堂出现了一个问题，用reset但子组件的数据没有变化，因为子组件自己存了一个state，如果在父组件中更新state并不会影响到子组件中的数据，所以这里解决办法是将x作为参数传进去，让子组件去使用父组件中的state中的x

所以启示是所有数据应该只存一份

又来个启示，如果要给比较远的节点传信息，怎么办呢，只能一层一层沿着祖先传递？

**创建`App`组件**

包含：

- 导航栏组件
- `Boxes`组件

注意：

- 要将多个组件要用的数据存放到最近公共祖先的`this.state`中

![](react.assets/屏幕截图 2026-04-08 122310.png)

怎么在`navbar`中调用`boxes`中的信息呢，把==公共信息以及对应的操作==放到公共祖先中即app中

**无状态函数组件（函数组件？现在好像不流行这样了）**sfc

- 当组件中没有用到`this.state`时，可以简写为无状态的函数组件。
- 函数的传入参数为`props`对象

**组件的生命周期**（类似写游戏的思路，start, update, over）

- `Mount`周期，执行顺序：`constructor() -> render() -> comonentDidMount()`，`Mount`周期中的`componentDidMount()`函数在执行时表明，当前页面元素加载完毕，因此可以通过ajax请求获取数据填充上去（需要真个组件挂载完后再加载数据）
- `Update`周期，执行顺序：`render() -> componentDidUpdate()`,`Update`周期中的`componentDidUpdate(prevProps, prevState)`可以填两个参数，应用在：对比 `this.state` 与 `prevState`的区别，从而去更新数据库
- `Unmount`周期，执行顺序：`componentWillUnmount()`，`Unmount`周期中的`componentWillUnmount()`是在删除前执行函数，因此可以在此函数更新全局状态
