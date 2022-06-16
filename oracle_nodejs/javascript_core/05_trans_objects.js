Welcome to Node.js v12.14.0.
Type ".help" for more information.
>
> var person = {'name':'Anil', 'age':30, 'company':'Oracle', 'country':'India'};
undefined
> person
{ name: 'Anil', age: 30, company: 'Oracle', country: 'India' }
> typeof(person)
'object'
> person['name']
'Anil'
> person.name
'Anil'
> person.name = 'Sunil'
'Sunil'
> person
{ name: 'Sunil', age: 30, company: 'Oracle', country: 'India' }
> person.salary
undefined
> person.salary = 'INER 1000000'
'INER 1000000'
> person
{
  name: 'Sunil',
  age: 30,
  company: 'Oracle',
  country: 'India',
  salary: 'INER 1000000'
}
> delete person.age
true
> person
{
  name: 'Sunil',
  company: 'Oracle',
  country: 'India',
  salary: 'INER 1000000'
}
> Object.keys(person)
[ 'name', 'company', 'country', 'salary' ]
> OBject.values(person)
Thrown:
ReferenceError: OBject is not defined
> Object.values(person)
[ 'Sunil', 'Oracle', 'India', 'INER 1000000' ]
>
>
> person.lname = 'Kumar'
'Kumar'
> person
{
  name: 'Sunil',
  company: 'Oracle',
  country: 'India',
  salary: 'INER 1000000',
  lname: 'Kumar'
}
> person.fullname = function(){ return person.name + ' ' + person.lname; }
[Function]
> person
{
  name: 'Sunil',
  company: 'Oracle',
  country: 'India',
  salary: 'INER 1000000',
  lname: 'Kumar',
  fullname: [Function]
}
> person.fullname()
'Sunil Kumar'
>