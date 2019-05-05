---
title: 数据类型之 Object
date: '2019-04-16'
---

对象的所有键名都是字符串，就算是写成了数字，也会被转换成字符串。

对象采用大括号表示，这导致了一个问题：如果行首是一个大括号，它到底是表达式还是语句？

```javascript
{
  foo: 123
}
```

当 JS 引擎读到上面的代码时，会产生一个疑问，它不知道应该解读为对象表达式还是语句。为了避免这种歧义，JS 引擎统一解读为语句。如果想要它解读为表达式，可以在外面再包一层括号：

```javascript
{
  {
    console.log(123)
  }
}
```

## 属性

对于属性的读取和赋值有两种方式：

1. 点运算符
2. 方括号运算符

```javascript
var obj = { a: 1 }

const hello1 = obj.a
const hello2 = obj['a']

obj.a = 2
obj['a'] = 2
```

对于属性的查看，可以使用 Object.keys(obj) 方法。它将返回一个数组。

对于属性的删除，可以使用 delete 关键字，它返回一个布尔值。注意，删除一个不存在的属性，delete 不报错，而且返回 true。只有一种情况，delete 命令会返回 false，那就是该属性存在，且不得删除。delete 只能删除对象本身的属性，不能删除继承的属性。所以，delete 的返回值并不能当作这个属性是否删除成功了的依据。

```javascript
var obj = { p: 1 }
Object.keys(obj) // ['p']
delete obj.p // true
Object.keys(obj) // []

var obj2 = Object.defineProperty({}, 'q', {
  value: 32,
  configurable: false,
})
delete obj.q // false
Object.keys(obj) // ['q']
```

查看属性是否存在对象中，使用 in 操作符。使用 in 操作符有一个问题，它并不能识别哪些属性是对象本身的，哪些是继承来的。`hasOwnProperty` 这个方法可以辅助判断是不是对象本身的属性。

```javascript
var obj = { p: 1 }
'p' in obj // true
'q' in obj // false
'toString' in obj // true（继承来的属性）
```

对于属性的遍历，可以使用 `for...in` 循环。使用它有两个注意点：

1. 类似于 in 操作符，它也会遍历到所有属性，包括继承来的属性。
2. 它只会遍历到 enumerable 为 true 的属性。

## 新建对象

通过 `var o = new Object()` 方法创建一个对象实例，都是基于 Object 这个 base 对象的基础上，因此也会继承 Object 原始对象的一些属性和方法：

- Constructor：保存着用于创建当前对象的函数。
- hasOwnProperty(propertyName)：检查属性在当前实例中是否存在。
- isPrototypeOf(Object)：检查该实例是否是某一个实例的原型。
- propertyIsEnumerable(propertyName)：检查属性是否可枚举，即是否可以在 `for...in` 中被遍历出来。
- toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区相同。
- toString()：返回对象的字符串表示。
- valueOf()：通常与 toString() 的返回值相同。
