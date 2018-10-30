const test = require('ava')
const CRUD = require('./bin/CRUD')

const tests = [
    ...CRUD
]

tests.forEach((e, i) => test(`${ e.text } [${ e.args }]`, t => t.pass()))