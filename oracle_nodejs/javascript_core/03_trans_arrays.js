Welcome to Node.js v12.14.0.      
Type ".help" for more information.
> var fruits = ["Banana", "Orange", "Apple", "Mango"];
undefined
> typeof(fruits)
'object'
> // ---------------- Add elements to the array
undefined
> var f = ["Banana", "Orange", "Apple", "Mango"];
undefined
> f
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
> f.push('Cherries')
5
> f
[ 'Banana', 'Orange', 'Apple', 'Mango', 'Cherries' ]
> f.shift('Water Melon')
'Banana'
> f
[ 'Orange', 'Apple', 'Mango', 'Cherries' ]
> f.unshift('Water Melon')
5
> f
[ 'Water Melon', 'Orange', 'Apple', 'Mango', 'Cherries' ]
> f.shift()
'Water Melon'
> f
[ 'Orange', 'Apple', 'Mango', 'Cherries' ]
> f.pop()
'Cherries'
> f
[ 'Orange', 'Apple', 'Mango' ]
> f.splice(1, 0, 'Cherries')
[]
> f
[ 'Orange', 'Cherries', 'Apple', 'Mango' ]
> f.splice(2, 1)
[ 'Apple' ]
> f
[ 'Orange', 'Cherries', 'Mango' ]
>
>
>
> f.splice(2, 2, 'Bananas', 'WAter Melon')
[ 'Mango' ]
> f
[ 'Orange', 'Cherries', 'Bananas', 'WAter Melon' ]
> f = [ 'Orange', 'Cherries', 'Mango' ]
[ 'Orange', 'Cherries', 'Mango' ]
> f.splice(2, 0, 'Bananas', 'Water Melons')
[]
> f
[ 'Orange', 'Cherries', 'Bananas', 'Water Melons', 'Mango' ]
> f.splice(1, 3, ['red', 'green', 'blue'])
[ 'Cherries', 'Bananas', 'Water Melons' ]
> f
[ 'Orange', [ 'red', 'green', 'blue' ], 'Mango' ]
>
>
> // ------------------------------------ search/find
undefined
>
> f.indexOf('Mango')
2
> f = [ 'Orange', 'Cherries', 'Bananas', 'Water Melons', 'Mango' ]
[ 'Orange', 'Cherries', 'Bananas', 'Water Melons', 'Mango' ]
> f.find(e => e == 'Cherries')
'Cherries'
> f.findIndex(e => e == 'Cherries')
1
> f.filter(function(e){ return e == 'Cherries'})
[ 'Cherries' ]
> f.push('Cherries')
6
> f.filter(function(e){ return e == 'Cherries'})
[ 'Cherries', 'Cherries' ]
>
> f.includes('Bananas')
true
>
>
> // --------------------------------------------- re-arrange elements
undefined
>
> f
[
  'Orange',
  'Cherries',
  'Bananas',
  'Water Melons',
  'Mango',
  'Cherries'
]
> f.sort()
[
  'Bananas',
  'Cherries',
  'Cherries',
  'Mango',
  'Orange',
  'Water Melons'
]
> f.reverse()
[
  'Water Melons',
  'Orange',
  'Mango',
  'Cherries',
  'Cherries',
  'Bananas'
]
> var L = [10, 3, 4, 1, 67, 100]
undefined
> L.sort()
[ 1, 10, 100, 3, 4, 67 ]
> L.sort(function(a, b){ return a-b; })
[ 1, 3, 4, 10, 67, 100 ]
> L.sort((a, b) => (b-a))
[ 100, 67, 10, 4, 3, 1 ]
>
>
> // ------------------------------------ iterate
undefined
> for(item of L){ console.log(item); 
... }
100
67
10
4
3
1
undefined
> for(item of f){ console.log(item); }
Water Melons
Orange
Mango
Cherries
Cherries
Bananas
undefined
>