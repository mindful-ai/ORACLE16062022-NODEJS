C:\Users\Purushotham\Desktop\oracle_nodejs>node
Welcome to Node.js v12.14.0.
Type ".help" for more information.
> var a = 10;
undefined
> var b = 20;
undefined
> a + b
30
> a - b
-10
> a * b
200
> a / b
0.5
> a > b
false
> a && b
20
> var c = a + b;
undefined
>
>
> var c = 150
undefined
> var in = c / 2.94
Thrown:
var in = c / 2.94
    ^^

SyntaxError: Unexpected token 'in'
> var inch = c / 2.94
undefined
> inch
51.02040816326531
> // ------------------------------------------------------------
undefined
>
>
> var x = 5;
undefined
> var y = "apples";
undefined
> typeof(x)
'number'
> typeof(y)
'string'
> var z = {};
undefined
> typefo(z)
Thrown:
ReferenceError: typefo is not defined
> typeof(z)
'object'
> typeof(y) == 'string'
true
> typeof(y) == 'object'
false
> x + y
'5apples'
> // ---------------------------------------- Strings
undefined
>
> y
'apples'
> y[0]
'a'
> y[1]
'p'
> y[0] = 'A'
'A'
> y
'apples'
> // ---------------------- strings are immutable
undefined
>
> var m = "mary had a little lamb"
undefined
> m.length
22
> m.indexOf('little')
11
> m.lastIndexOf('little')
11
> m.indexOf("good")
-1
> m.search("good")
-1
> m.search(/.litt./gi)
10
> m.replace('lamb', 'kitten')
'mary had a little kitten'
> m
'mary had a little lamb'
>
>
> m.substring(11, 16)
'littl'
> m.substr(11, 6)
'little'
>
>
> m.toUpperCase()
'MARY HAD A LITTLE LAMB'
> m.toLowerCase()
'mary had a little lamb'
>
>
> var x = '   hello world! '
undefined
> x
'   hello world! '
> x.trim()
'hello world!'
>
>
> m
'mary had a little lamb'
> var w = m.split(' ')
undefined
> w
[ 'mary', 'had', 'a', 'little', 'lamb' ]
> var k = ['sky', 'is', 'blue']
undefined
> k.join('-')
'sky-is-blue'
>