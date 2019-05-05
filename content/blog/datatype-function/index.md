---
title: 数据类型之 Function
date: '2019-04-16'
---

## 函数的声明

函数有三种声明方式：

1. function 命令
2. 函数表达式：采用这种方式声明函数时，如果 function 后面带上了函数名，那么这个函数名只在函数内部有效，外部无效。建议带上函数名，一是方便调用自身，二是方便调试时日志打印出来的有函数名，而不是匿名函数。
3. Function 构造函数：不直观，不推荐。

```javascript
// function 命令
function print() {
  console.log('hello')
}

// 函数表达式
var print = function() {
  console.log('world')
}

// Function 构造函数
var add = new Function('x', 'y', 'return x + y')
```

如果一个函数被声明了多次，后面的会覆盖前面的。但如果同时采用声明式和表达式的方式赋值时，总是会采用表达式的定义。

```javascript
var f = function() {
  console.log('1')
}

function f() {
  console.log('2')
}

f() // 1
```

采用 function 命令声明的函数会被提升到代码头部，采用函数表达式的函数不会被提升。

```javascript
f()
function f() {
  console.log('called')
}

f()
var f = function f() {
  console.log('called')
}
// TypeError: undefined is not a function

// 上面函数表达式的代码等同于：
var f
f()
f = function f() {
  console.log('called')
}
```

## 函数的属性和方法

### name 属性

返回函数的名字。如果是通过表达式的方式声明的，则返回该表达式的变量名。但如果表达式里的函数是具名函数，则返回具名函数的名称，但其实真正的函数名还是变量名。

```javascript
function f1() {}
f1.name // "f1"

var f2 = function() {}
f2.name // "f2"

var f3 = function myName() {}
f3.name // "myName"
```

### length 属性

函数的 length 属性返回函数预期传入的参数个数，即函数定义之中的参数个数。

length 属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的“方法重载”（overload）。

### arguments 对象

由于 JS 允许传入不定数目的参数，所以 JS 提供 arguments 对象来访问到函数的每一个参数。

### toString 方法

toString 方法返回一个字符串，内容是函数的源码（包括注释）。对于那些原生的函数，就返回 `function (){[native code]}`。

## 函数的作用域（之后详细总结）

作用域是指变量存在的范围。JS 中的函数有三种作用域：

1. 全局作用域
2. 函数作用域
3. 块级作用域

函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。
