const test = require('ava')

const tests = [
    'CRUD',
    'CHAIN_QUERIES',
    'JOIN_QUERIES',
    'LEFT_RIGHT_JOIN_QUERIES',
    'INSERT_QUERIES',
    'UPDATE_QUERIES'
]
.reduce((acc, cur) => acc.concat(require(`./bin/${ cur }`)), [])
.map(e => e.query)

tests.forEach(e => test(`${ e.text } [${ e.args }]`, t => t.pass()))