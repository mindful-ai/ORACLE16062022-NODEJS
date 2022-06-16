Welcome to Node.js v12.14.0.      
Type ".help" for more information.
> let x = new String('Hardik')
undefined
> let y = new String('Hardik')
undefined
> x
[String: 'Hardik']
> y
[String: 'Hardik']
> x==y
false
> x===y
false
> x()
Thrown:
TypeError: x is not a function
> x.toString() == y.toString()
true
> x.toString() === y.toString()
true
> var x = 'Hardik'
Thrown:
SyntaxError: Identifier 'x' has already been declared
> var a = 'Hardik'
undefined
> var b = 'Hardik'
undefined
> a == b
true
> x 
[String: 'Hardik']
> z = x
[String: 'Hardik']
> z
[String: 'Hardik']
> z == x
true
> z == y
false
> Number.MAX_VALUE
1.7976931348623157e+308
> Number.MIN_VALUE
5e-324
> Number.POSITIVE_INFINITY
Infinity
> Number.NEGATIVE_INFINITY
-Infinity
> .exit