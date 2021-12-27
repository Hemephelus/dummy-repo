const loaddd = require('lodash')

const items = [1,[2,[3,[4]]]]
const newitems = loaddd.flattenDeep(items)
console.log(newitems)

var stats = require('statistics')
 
console.log([1,2,3].reduce(stats))
