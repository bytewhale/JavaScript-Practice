'use strict'

/**
 * @description: 变量
 */

console.log(`
    ECMAScript 变量是松散类型的，可以用于保存任意类型的数据。每个变量只不过是是一个
    用于保存任意值的命名占位符。有 3 个关键字可以声明变量：var、const 和 let。其中，
    var 在 ECMAScript 的所有版本中都可以使用，而 const 和 let 只能在 ECMAScript 6
    及更晚的版本中使用。
`)

// 3.3.1 var 关键字

console.log(`
    要定义变量，可以使用 var 操作符（注意 var 是一个关键字），后面跟变量名（即标示符）：
    var message;
    这行代码定义了一个名为 message 的变量，不初始化的情况下，变量会保存一个特殊值 undefined。
    定义变量时，可同时设置它的值：
    var message = 'Hello world!';
    
    1、var 声明的作用域
    关键的问题在于，使用 var 操作符定义的变量会成为包含它的函数的局部变量。比如，使用 var 在
    一个函数内部定义一个变量，就意味着该变量将在函数退出时被销毁：
    
    function sayHi() {
        var message = 'hi'; // 局部变量
    }
    sayHi();
    console.log(message); // 出错！（ReferenceError: message is not defined）
    
    如果要定义多个变量，可以在一条语句中用逗号分隔每个变量（及可选的初始）：
    
    var message = 'hi',
        found = false,
        age = 28;
    
    
    2、var 声明提升
    使用 var 时，下面的代码不会报错。这是因为使用这个关键字声明的变量会自动提升到函数作用域顶部：
    
    function foo() {
        console.log(age);
        var age = 26;
    }
    foo(); // undefined
    
    这就是所谓的"提升"（hoist），也就是把所用变量声明都拉到函数作用域的顶部。此外，反复多次使用
    var 声明同一个变量也没有问题：
    
    function foo() {
        var age = 16;
        var age = 18;
        var age = 20;
        console.log(age);
    }
    foo(); // 20
`)

// 3.3.2 let 声明

console.log(`
    let 跟 var 的作用差不多，但有着非常重要的区别。最明显的区别是，let 声明的作用范围是块作用域，而
    var 声明的范围是函数作用域。
    
    if (true) {
        var name = 'Dart';
        console.log(name); // Dart
    }
    console.log(name); // Dart
    
    function sayHi() {
        var msg = 'Hello';
        console.log('inner sayHi => ', msg);
    }
    sayHi(); // inner sayHi => Hello
    console.log(msg); // msg in not defined
    
    if (true) {
        let age = 26;
        console.log(age); // 26
    }
    console.log(age); // ReferenceError: age in not defined
    
    在这里，age 变量之所以不能在 if 块外部被引用，是因为它的作用域仅限于该块内部。
    块作用域是函数作用域的子集，因此适用于 var 的作用域限制同样也适用于 let。
    let 也不允许同一个块作用域中出现冗余声明。这样会导致报错:
    
    let name = 'Dart';
    let name = 'Golang'; // SyntaxError: Identifier 'name' has already been declared
    
    let name = 'Dart';
    var name = 'Golang'; // SyntaxError: Identifier 'name' has already been declared
    
    1、暂时性死区
    
    let 与 var 的另一个重要的区别，就是 let 声明的变量不会在作用域中被提升。
    // name 会被提升 
    console.log(name); // undefined 
    var name = 'Matt';
    // age 不会被提升
    console.log(age); // ReferenceError:age 没有定义 
    let age = 26;
    
    在解析代码时，JavaScript 引擎也会注意出现在块后面的 let 声明，只不过在此之前不能以任何方式来引用未声明的变量。
    在 let 声明之前的执行瞬间被称为“暂时性死区”(temporal dead zone)，在此阶段引用任何后面才声明的变量都会抛出 ReferenceError。
    
    2、全局声明
    与 var 关键字不同，使用 let 在全局作用域中声明的变量不会成为 window 对象的属性(var 声明的变量则会)。
    
    var name = 'Matt'; 
    console.log(window.name); // 'Matt'
    let age = 26;
    console.log(window.age); // undefined
    
    不过，let 声明仍然是在全局作用域中发生的，相应变量会在页面的生命周期内存续。
    因此，为了避免 SyntaxError，必须确保页面不会重复声明同一个变量。
    
    3、条件声明
    在使用 var 声明变量时，由于声明会被提升，JavaScript 引擎会自动将多余的声明在作用域顶部合并为一个声明。
    因为 let 的作用域是块，所以不可能检查前面是否已经使用 let 声明过同名变量，同时也就不可能在没有声明的情况下声明它。
    
    【对于 let 这个新的 ES6 声明关键字，不能依赖条件声明模式。】
    【不能使用let进行条件式声明是件好事，因为条件声明是一种反模式，它让程序变 得更难理解。
    如果你发现自己在使用这个模式，那一定有更好的替代方式。】
    
    4、for 循环中的 let 声明
    在 let 出现之前，for 循环定义的迭代变量会渗透到循环体外部:
    
    for (var i = 0; i < 5; ++i) { 
        // 循环逻辑
    }
    console.log(i); // 5
    
    改成使用 let 之后，这个问题就消失了，因为迭代变量的作用域仅限于 for 循环块内部:
    
    for (let i = 0; i < 5; ++i) { 
        // 循环逻辑
    }
    console.log(i); // ReferenceError: i 没有定义
    
    在使用 var 的时候，最常见的问题就是对迭代变量的奇特声明和修改:
    
    for (var i = 0; i < 5; ++i) { 
        setTimeout(() => console.log(i), 0);
    }
    // 你可能以为会输出0、1、2、3、4 
    // 实际上会输出5、5、5、5、5
    
    之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值:5。
    在之后执行超时逻辑时，所有的 i 都是同一个变量，因而输出的都是同一个最终值。
    而在使用 let 声明迭代变量时，JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。 
    每个 setTimeout 引用的都是不同的变量实例，所以 console.log 输出的是我们期望的值，
    也就是循环执行过程中每个迭代变量的值。
    
    for (let i = 0; i < 5; ++i) { 
        setTimeout(() => console.log(i), 0);
    }
    // 会输出0、1、2、3、4
    
    这种每次迭代声明一个独立变量实例的行为适用于所有风格的 for 循环，包括 for-in 和 for-of 循环。
`)

// 3.3.3 const 声明

console.log(`
    const 的行为与 let 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，
    且尝试修改 const 声明的变量会导致运行时错误。
    
    const age = 26;
    age = 36; // TypeError: Assignment to constant variable.
    
    // const 也不允许重复声明
    const name = 'Matt';
    const name = 'Nicholas'; // SyntaxError
    
    // const 声明的作用域也是块 
    const name = 'Matt';
    if (true) {
        const name = 'Nicholas';
    }
    console.log(name); // Matt
    
    const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象，
    那么修改这个对象内部的属性并不违反 const 的限制。
    
    JavaScript 引擎会为 for 循环中的 let 声明分别创建独立的变量实例，虽然 const 变量跟 let 变量很相似，
    但是不能用 const 来声明迭代变量(因为迭代变量会自增):
    
    for (const i = 0; i < 10; ++i) {} // TypeError: Assignment to constant variable.
    
    不过，如果你只想用 const 声明一个不会被修改的 for 循环变量，那也是可以的。也就是说，
    每次迭代只是创建一个新变量。这对 for-of 和 for-in 循环特别有意义:
    
    let i = 0;
    for (const j = 7; i < 5; ++i) {
        console.log(j); // 7, 7, 7, 7, 7
    }

    for (const key in {a: 1, b: 2}) { 
        console.log(key); // a, b
    }

    for (const value of [1,2,3,4,5]) { 
        console.log(value); // 1, 2, 3, 4, 5
    }
`)

// 3.3.4 声明风格及最佳实践

console.log(`
    1. 【不使用 var】
        有了 let 和 const，大多数开发者会发现自己不再需要 var 了。限制自己只使用 let 和 const 有助于提升代码质量，
        因为变量有了明确的作用域、声明位置，以及不变的值。
    2. 【const 优先，let 次之】
        使用 const 声明可以让浏览器运行时强制保持变量不变，也可以让静态代码分析工具提前发现不 合法的赋值操作。
        因此，很多开发者认为应该优先使用 const 来声明变量，只在提前知道未来会有修改时，再使用 let。
        这样可以让开发者更有信心地推断某些变量的值永远不会变，同时也能迅速发现因意外赋值导致的非预期行为。
`)







