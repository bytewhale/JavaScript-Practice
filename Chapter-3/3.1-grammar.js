'use strict'

/**
 * @description: 语法
 */

// 3.1.1 区分大小写

const test = 1;
const Test = 1;

// 3.1.2 标识符

console.log(`
    1、首字母必须以字母、下划线（_）或者美元符号（$）开头；
    2、剩下的其他字符可以是字母、下划线、美元符号或者数字。
    3、按照惯例，ECMAScript 标示符使用驼峰大小写形式，例如：myBestFriend
`)

// 3.1.3 注释

console.log(`
    1、单行注释以两个斜杠字符开头，如：//
    2、多行注释以一个斜杠和星号（/*）开头，以他们的反向组合（*/）结尾
`)

// 3.1.4 严格模式

console.log(`ECMAScript 5 增加了严格模式的概念，是一种不同于的 JavaScript 解析和执行的模型`);

// 3.1.5 语句

const a = 10;
const b = 90;
let sum = a + b // 没有分号也有效，但不推荐
let diff = a - b; // 加分号有效，推荐

console.log(`加分号有助于在某些情况下提升性能，因为解析器会尝试在合适的位置补上分号以纠正语法错误 \n`);

console.log(`if 之类的控制语句只在执行多条语句时要求必须有代码块。不过，最佳实践是始终在控制语句中使用代码块，即使要执行的只有一条语句。\n`);

if (sum >= 100) {
    console.log(`ab 之和不小于 100。`)
}

