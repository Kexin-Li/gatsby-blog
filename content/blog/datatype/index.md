---
title: 数据类型
date: '2019-04-22'
---

## 按值传递还是引用传递

https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language

可以理解为都是按值传递，不过像 object 这样的类型本身就是一个引用。因此导致了如果传入函数的参数是一个对象，在函数中改变了对象的属性，会影响到外部的对象。

## 数据检测

六种数据类型：

- Undefined
- Null
- String
- Number
- Object
  - object
  - array
  - function

### Undefined

Undefined 是只有一个值的数据类型，值是 undefined。当声明了变量但没有初始化时，JS 会给变量赋值 undefined。

### Null

Null 是第二个只有一个值的数据类型，值是 null。null 表示一个空对象指针，这也是为什么 `typeof null` 等于 object 的原因。因此，在变量没有引用时应该将变量置为 null。

### Boolean

Boolean 包含两个值：true 和 false。但 true 不等于 1，false 不等于 0。下面是转换为 Boolean 为 false 的值：

- 0
- NaN
- 空字符串（''）
- null
- undefined

### String

[详见这篇博客](../datatype-string/index.md)

### Number

[详见这篇博客](../datatype-number/index.md)

### Object

[详见这篇博客](../datatype-object/index.md)
