---
title: 数据类型之 Number
date: '2019-04-15'
---

在 JavaScript 内部，所有数字都是以 64 位浮点数存储。在 64 位二进制中，第 1 位代表符号，第 2-12 位代表指数的部分，第 13-63 代表小数的部分。

## 特殊字符

#### +0 和 -0

在 JS 中，几乎所有场合，正零和负零都会被当作正常的 0。唯一一个不同的场合就是，当 +0 和 -0 作为分母时：

```javascript
1 / +0 === 1 / -0 // false
```

出现这样的结果是因为 `1 / +0` 等于 `Infinity`，而 `1 / -0` 等于 `-Infinity`。

#### NaN

表示非数字的值。下面是和 NaN 相关的一些奇妙运算：

- `0 / 0 === NaN`
- `typeof NaN // number`
- `NaN === NaN // false`
- `Boolean(NaN) // false`
- NaN 与任何数（包括他自己）的运算，结果都是 NaN。

#### Infinity

正的无穷是 `Infinity`，负的无穷是 `-Infinity`。

- `1 / 0 // Infinity`
- Infinity 大于一切数值，除了 NaN；-Infinity 小于一切数值，除了 NaN。
- Infinity 和 NaN 比较，总是返回 false。`Infinity > NaN // false`
- `0 * Infinity // NaN`
- Infinity 和 null 计算时，null 会转成 0，等同于和 0 的计算。
- Infinity 和 undefined 计算，都是返回 NaN。

## 相关方法

#### parseInt

用于将字符串转换为整数。parseInt 将自动去除字符串头部和尾部的空格。

如果遇到的不是字符串，那么会先将其转换为字符串再转为整数。（这会遇到一些奇怪的结果）字符串转整数的时候，是从高位到低位一位一位的转换，如果遇到不能转换的则立即返回。如果最高位都不能转换为整数，则返回 NaN。所以 parseInt 返回的数只有两种可能，要么是十进制，要么是 NaN。

如果字符串以 Ox 开头，parseInt 会将其按照十六进制转换为十进制。

如果字符串以 0 开头，parseInt 会将其按照十进制解析。

如果字符串能转换为科学计数法，parseInt 会将科学计数看成字符串，因此结果不一定准确。

parseInt 还接受第二个参数，表示被解析的进制。范围在 2-36 之间。默认情况下为 10，即转换为十进制的数。如果第二个参数不是数值，则先转成一个整数。如果转换后的这个整数不在 2-36 之间，则返回 NaN。如果第二个参数是 0，null，undefined，则直接忽略。

如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。如果最高位无法转换，则直接返回 NaN。

好了，JS 对一个方法做了这么多的边界判断，也不能保证都得到满意的结果。这个故事告诉我们还是乖乖跟着文档规范调用函数比较安全。

#### parseFloat

用于将字符串转换为浮点数。parseFloat 将自动去除字符串头部和尾部的空格。

如果参数中包含不能转换的部分，则返回已经转换好的部分。

如果参数不是字符串，或者字符串的第一个字符不符合转换规范，则返回 NaN。

#### isNaN

用来判断值是不是 NaN。本来是只针对数字，但是如果传入的参数不是数字，那么会先转换为数字再判断。这就导致了 isNaN 返回 true 时不一定是真的 NaN。

```javascript
isNaN('hello') // true

// 相当于
isNaN(Number('hello')) // true

isNaN({}) // true
isNaN(['xzy']) // true
```

因此，使用 isNaN 之前，最好先判断一下数据类型。

判断 NaN 更可靠的方法是利用 NaN 不等于自身这一特点。

```javascript
function myIsNaN(value) {
  return value !== value
}
```

#### isFinite

判断某个值是否为正常的值，返回一个布尔值。

除了 Infinity、-Infinity、NaN 和 undefined 这几个值会返回 false，isFinite 对于其他的数值都会返回 true。
