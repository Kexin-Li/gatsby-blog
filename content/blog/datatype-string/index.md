---
title: 数据类型之 String
date: '2019-04-16'
---

JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。每个字符在 JavaScript 内部都是以 16 位（即 2 个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为 16 位长度，即 2 个字节。

在 JS 中使用单引号或者双引号来表示字符串都可以，也可以在双引号中混入单引号。但不能双引号中混入双引号，或者单引号中混入单引号，这样需要转义。

```javascript
'Hello'
'Did she say \'Hello\'?'
```

由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号。

## 转义

## Base64 编码

所谓 Base64 就是一种编码方法，可以将任意值转成 0 ～ 9、A ～ Z、a-z、+和/这 64 个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

有两种常用的场景会用到 Base64 编码：

1. 又一些不可打印的字符，比如 ASCII 码的 0-31 的符号。
2. 想要以文本格式传递一些二进制数据。

JS 提供两个原生的 Base64 相关方法：

1. `btoa()`：任意值转为 Base64 编码
2. `atob()`：Base64 编码转为原来的值

```javascript
var string = 'Hello World!'
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"
```

如果要使用以上两个方法转化非 ASCII 码，需要加入一个转码环节。

```javascript
function b64Encode(str) {
  return btoa(encodeURIComponent(str))
}

function b64Decode(str) {
  return decodeURIComponent(atob(str))
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"
```
