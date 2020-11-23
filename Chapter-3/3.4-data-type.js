'use strict'

/**
 * @description: 数据类型
 */

console.log(`
    ECMAScript 有 6 种简单数据类型(也称为原始类型): Undefined、Null、Boolean、Number、 String 和 Symbol。
    Symbol(符号)是 ECMAScript 6 新增的。
    还有一种复杂数据类型叫 Object(对象)。
    Object 是一种无序名值对的集合。因为在 ECMAScript 中不能定义自己的数据类型，所有值都可以用上述 7 种数据类型之一来表示。
    只有 7 种数据类型似乎不足以表示全部数据。但 ECMAScript 的数据类型很灵活，一种数据类型可以当作多种数据类型来使用。
`)

// 3.4.1 typeof 操作符

console.log(`
    因为 ECMAScript 的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型。
    typeof 操作符就是为此而生的。对一个值使用 typeof 操作符会返回下列字符串之一:
    
    - "undefined"表示值未定义;
    - "boolean"表示值为布尔值;
    - "string"表示值为字符串;
    - "number"表示值为数值;
    - "object"表示值为对象(而不是函数)或 null;
    - "function"表示值为函数;
    - "symbol"表示值为符号。
    
    下面是使用 typeof 操作符的例子:
    
    let message = "some string"; 
    console.log(typeof message); // "string"
    console.log(typeof(message)); // "string"
    console.log(typeof 95); // "number"
    
    【注意 typeof 在某些情况下返回的结果可能会让人费解，但技术上讲还是正确的。比如，调用 typeof null 返回的是"object"。
    这是因为特殊值 null 被认为是一个对空对象的引用。】
    【严格来讲，函数在ECMAScript中被认为是对象，并不代表一种数据类型。可是，函数也有自己特殊的属性。
    为此，就有必要通过 typeof 操作符来区分函数和其他对象。】
`)

// 3.4.2 Undefined 类型

console.log(`
    Undefined 类型只有一个值，就是特殊值 undefined。当使用 var 或 let 声明了变量但没有初始化时，
    就相当于给变量赋予了 undefined 值:
    
    let message;
    console.log(message == undefined); // true
    
    【即使未初始化的变量会被自动赋予 undefined 值，但我们仍然建议在声明变量的同时进行初始化。
    这样，当 typeof 返回"undefined"时，你就会知道那是因为给定的变 量尚未声明，而不是声明了但未初始化。】
`)

// 3.4.3 Null 类型

console.log(`
    Null 类型同样只有一个值，即特殊值 null。逻辑上讲，null 值表示一个空对象指针，
    这也是给 typeof 传一个 null 会返回"object"的原因:
    
    let car = null;
    console.log(typeof car); // "object"
    
    在定义将来要保存对象值的变量时，建议使用 null 来初始化，不要使用其他值。
    这样，只要检查这个变量的值是不是 null 就可以知道这个变量是否在后来被重新赋予了一个对象的引用，比如：
    
    if (car != null) {
        // car 是一个对象的引用
    }
    
    undefined 值是由 null 值派生而来的，因此 ECMA-262 将它们定义为表面上相等，如下面的例子所示:
    
    console.log(null == undefined); // true
`)

// 3.4.4 Boolean 类型

console.log(`
    Boolean(布尔值)类型是 ECMAScript 中使用最频繁的类型之一，有两个字面值:true 和 false。 
    这两个布尔值不同于数值，因此 true 不等于 1，false 不等于 0。下面是给变量赋布尔值的例子:
    
    let found = true;
    let lost = false;
    
    注意，布尔值字面量 true 和 false 是区分大小写的，因此 True 和 False (及其他大小混写形式) 是有效的标识符，但不是布尔值。
    
    let message = "Hello world!";
    let messageAsBoolean = Boolean(message);
    
    除 false, ""(空字符串), 0、NaN, null, undefined 外，其他值均可转换为 true
`)

// 3.4.5 Number 类型

console.log(`
    1. 浮点值
    要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。虽然小数点前面不 是必须有整数，但推荐加上。下面是几个例子:
    
    let floatNum1 = 1.1;
    let floatNum2 = 0.1;
    let floatNum3 = .1; // 有效，但不推荐
    
    因为存储浮点值使用的内存空间是存储整数值的两倍，所以 ECMAScript 总是想方设法把值转换为整数。
    对于非常大或非常小的数值，浮点值可以用科学记数法来表示。科学记数法用于表示一个应该乘以 10 的给定次幂的数值。
    ECMAScript 中科学记数法的格式要求是一个数值(整数或浮点数)后跟一个大写或小写的字母 e，再加上一个要乘的 10 的多少次幂。比如:
    
    let floatNum = 3.125e7; // 等于31250000
    
    在这个例子中，floatNum 等于 31 250 000，只不过科学记数法显得更简洁。
    这种表示法实际上相当于说: “以 3.125 作为系数，乘以 10 的 7 次幂。”
    
    【浮点值的精确度最高可达 17 位小数，但在算术计算中远不如整数精确。】
    例如：0.1 加 0.2 得到的不是 0.3, 而是 0.300 000 000 000 000 04
    【之所以存在这种舍入错误，是因为使用了IEEE754数值，这种错误并非ECMAScript 所独有。其他使用相同格式的语言也有这个问题。】
    
    2. 值的范围
    由于内存的限制，ECMAScript 并不支持表示这个世界上的所有数值。ECMAScript 可以表示的最小数值保存在 Number.MIN_VALUE 中，
    这个值在多数浏览器中是 5e-324;可以表示的最大数值保存在 Number.MAX_VALUE 中，这个值在多数浏览器中是 1.797 693 134 862 315 7e+308。
    如果某个计算得到的 数值结果超出了 JavaScript 可以表示的范围，那么这个数值会被自动转换为一个特殊的 Infinity(无穷)值。
    任何无法表示的负数以-Infinity(负无穷大)表示，任何无法表示的正数以 Infinity(正无穷大)表示。
    
    3. NaN
    有一个特殊的数值叫 NaN，意思是“不是数值”(Not a Number)，用于表示本来要返回数值的操作失败了（而不是抛出错误）
    
    4. 数值转换
    有 3 个函数可以将非数值转换为数值:Number()、parseInt()和 parseFloat()。
    Number()是转型函数，可用于任何数据类型。后两个函数主要用于将字符串转换为数值。对于同样的参数，这 3 个 函数执行的操作也不同。
    Number()函数基于如下规则执行转换。
    - 布尔值，true 转换为 1，false 转换为 0。
    - 数值，直接返回。
    - null，返回 0。
    - undefined，返回 NaN。
    - 对象，调用 valueOf()方法，并按照上述规则转换返回的值。如果转换结果是 NaN，则调用 toString()方法，再按照转换字符串的规则转换。
    - 字符串：
        - 如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值。
          因此，Number("1")返回 1，Number("123")返回 123，Number("011")返回 11(忽略前面 的零)。
        - 如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值(同样，忽略前面的零)。
        - 如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数值。
        - 如果是空字符串(不包含字符)，则返回 0。
        - 如果字符串包含除上述情况之外的其他字符，则返回 NaN。
        
    通常在需要得到整数时可以优先使用 parseInt()函数。parseInt()函数更专注于字符串是否包含数值模式。
    字符串最前面的空格会被忽略，从第一个非空格字符开始转换。如果第一个字符不是数值字符、加号或减号，parseInt()立即 返回 NaN。
    这意味着空字符串也会返回 NaN(这一点跟 Number()不一样，它返回 0)。如果第一个字符是数值字符、加号或减号，则继续依次检测每个字符，直到字符串末尾，或碰到非数值字符。
    比如， "1234blue"会被转换为 1234，因为"blue"会被完全忽略。类似地，"22.5"会被转换为 22，因为小数 6 点不是有效的整数字符。
    
    【因为不传底数参数相当于让 parseInt()自己决定如何解析，所以为避免解析出错，建议始终传给它第二个参数。多数情况下解析的应该都是十进制数，此时第二个参数就要传入10。】
    
    
    parseFloat() 函数的工作方式跟 parseInt() 函数类似，都是从位置 0 开始检测每个字符。
    同样，它也是解析到字符串末尾或者解析到一个无效的浮点数值字符为止。这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被忽略。
    因此，"22.34.5"将转换 成 22.34。    
`)

// 3.4.6 String类型

console.log(`
    String(字符串)数据类型表示零或多个 16 位 Unicode 字符序列。
    字符串可以使用双引号(")、 单引号(')或反引号(\`)标示，因此下面的代码都是合法的:
    
    let firstName = "John";
    let lastName = 'Jacob';
    let lastName = \`Schmidt\`
    
    以某种引号作为字符串开头，必须仍然以该种引号作为字符串结尾。
    
    let firstName = 'Nicholas"; // SyntaxError: Invalid or unexpected token
    
    1. 字符字面量
    字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符，
    
    let text = "This is the letter sigma: \u03a3.";
    
    在这个例子中，即使包含 6 个字符长的转义序列，变量 text 仍然是 28 个字符长。因为转义序列表 示一个字符，所以只算一个字符。
    
    2.字符串的特点
    ECMAScript 中的字符串是不可变的(immutable)，意思是一旦创建，它们的值就不能变了。
    要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量，如下所示:
    
    let lang = "Java";
    lang = lang + "Script";
    
    这里，变量 lang 一开始包含字符串"Java"。紧接着，lang 被重新定义为包含"Java"和"Script" 的组合，也就是"JavaScript"。
    整个过程首先会分配一个足够容纳 10 个字符的空间，然后填充上 "Java"和"Script"。
    最后销毁原始的字符串"Java"和字符串"Script"，因为这两个字符串都没有用了。
    
    3. 转换为字符串
    有两种方式把一个值转换为字符串。首先是使用几乎所有值都有的 toString()方法。这个方法唯一的用途就是返回当前值的字符串等价物。比如:
    
    let age = 11;
    let ageAsString = age.toString(); // 字符串"11"
    let found = true;
    let foundAsString = found.toString(); // 字符串"true"
    
    toString()方法可见于数值、布尔值、对象和字符串值。(没错，字符串值也有 toString()方法，该方法只是简单地返回自身的一个副本。)
    【null 和 undefined 值没有 toString() 方法。】
    多数情况下，toString()不接收任何参数。不过，在对数值调用这个方法时，toString()可以接收一个底数参数，即以什么底数来输出数值的字符串表示。
    默认情况下，toString()返回数值的十进制字符串表示。而通过传入参数，可以得到数值的二进制、八进制、十六进制，或者其他任何有效基数的字符串表示，比如:
    
    let num = 10; 
    console.log(num.toString()); // "10"
    console.log(num.toString(2)); // "1010"
    console.log(num.toString(8)); // "12"
    console.log(num.toString(10)); // "1"
    console.log(num.toString(16)); // "a"

    如果你不确定一个值是不是 null 或 undefined，可以使用 String()转型函数，它始终会返回表示相应类型值的字符串。
    String()函数遵循如下规则。
    - 如果值有 toString()方法，则调用该方法(不传参数)并返回结果。
    - 如果值是 null，返回"null"。
    - 如果值是 undefined，返回"undefined"。
    
    4. 模板字面量
    ECMAScript 6 新增了使用模板字面量定义字符串的能力。与使用单引号或双引号不同，模板字面量保留换行字符，可以跨行定义字符串:
    
    let myMultiLineString = 'first line\\n second line'; 
    let myMultiLineTemplateLiteral = \`first line 
    second line\`;
    
    console.log(myMultiLineString); 
    // first line
    // second line
    console.log(myMultiLineTemplateLiteral); 
    // first line
    // second line
    
    console.log(myMultiLineString === myMultiLineTemplateLiteral); // true
    
    5. 字符串插值

    let value = 5;
    let exponent = 'second';
    let interpolatedTemplateLiteral = \`\${value} to the \${exponent} power is \${value * value}\`;
    console.log(interpolatedTemplateLiteral); // 5 to the second power is 25
    
    所有插入的值都会使用 toString()强制转型为字符串，而且任何 JavaScript 表达式都可以用于插值。
`)

// 3.4.7 Symbol类型

console.log(`
    Symbol(符号)是 ECMAScript 6 新增的数据类型。符号是原始值，且符号实例是唯一、不可变的。 
    【符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。】
    
    let sym = Symbol(); 
    console.log(typeof sym); // symbol
    
    调用 Symbol()函数时，也可以传入一个字符串参数作为对符号的描述(description)，将来可以通过这个字符串来调试代码。
    但是，这个字符串参数与符号定义或标识完全无关:
    
    let genericSymbol = Symbol();
    let otherGenericSymbol = Symbol();
    let fooSymbol = Symbol('foo');
    let otherFooSymbol = Symbol('foo');
    console.log(genericSymbol == otherGenericSymbol); // false
    console.log(fooSymbol == otherFooSymbol); // false
    
    符号没有字面量语法，这也是它们发挥作用的关键。按照规范，你只要创建 Symbol()实例并将其用作对象的新属性，
    就可以保证它不会覆盖已有的对象属性，无论是符号属性还是字符串属性。
    
    let genericSymbol = Symbol(); 
    console.log(genericSymbol); // Symbol()
    let fooSymbol = Symbol('foo'); 
    console.log(fooSymbol); // Symbol(foo);
    
    最重要的是，Symbol()函数不能与 new 关键字一起作为构造函数使用。这样做是为了避免创建符号包装对象，
    像使用 Boolean、String 或 Number 那样，它们都支持构造函数且可用于初始化包含原始值的包装对象:
    
    let myBoolean = new Boolean(); 
    console.log(typeof myBoolean); // "object"
    
    let myString = new String();
    console.log(typeof myString); // "object"
    
    let myNumber = new Number(); 
    console.log(typeof myNumber); // "object"
    
    let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor
    
    如果你确实想使用符号包装对象，可以借用 Object()函数:
    
    let mySymbol = Symbol();
    let myWrappedSymbol = Object(mySymbol);
    console.log(typeof myWrappedSymbol); // "object"
`)

// 3.4.8 Object 类型

console.log(`
    ECMAScript 中的对象其实就是一组数据和功能的集合。对象通过 new 操作符后跟对象类型的名称来创建。
    开发者可以通过创建 Object 类型的实例来创建自己的对象，然后再给对象添加属性和方法:
    
    let o = new Object();
    
    这个语法类似 Java，但 ECMAScript 只要求在给构造函数提供参数时使用括号。如果没有参数，
    如上面的例子所示，那么完全可以省略括号(不推荐):
    
    
    let o = new Object; // 合法，但不推荐
    
    Object 的实例本身并不是很有用，但理解与它相关的概念非常重要。类似 Java 中的 java.lang.Object，
    ECMAScript 中的 Object 也是派生其他对象的基类。Object 类型的所有属性和方法在派生的对象上同样存在。
    每个 Object 实例都有如下属性和方法。
    
    - constructor: 用于创建当前对象的函数。在前面的例子中，这个属性的值就是 Object() 函数。
    - hasOwnProperty(propertyName): 用于判断当前对象实例(不是原型)上是否存在给定的属性。
      要检查的属性名必须是字符串(如 o.hasOwnProperty("name"))或符号。
    - isPrototypeOf(object): 用于判断当前对象是否为另一个对象的原型。
    - propertyIsEnumerable(propertyName): 用于判断给定的属性是否可以使用 for-in 语句枚举。
      与 hasOwnProperty()一样，属性名必须是字符串。
    - toLocaleString(): 返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
    - toString(): 返回对象的字符串表示。
    - valueOf(): 返回对象对应的字符串、数值或布尔值表示。通常与 toString() 的返回值相同。
    
    【浏览器环境中的 BOM 和 DOM 对象，都是由宿主环境定义和提供的宿主对象。
    而宿主对象 不受 ECMA-262 约束，所以它们可能会也可能不会继承 Object。】
`)