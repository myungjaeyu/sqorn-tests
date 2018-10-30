const test = require('ava')

const tests = [
    ...require('./bin/CRUD'),
    ...require('./bin/CHAIN_QUERIES'),
    ...require('./bin/JOIN_QUERIES'),
    ...require('./bin/LEFT_RIGHT_JOIN_QUERIES'),
    ...require('./bin/INSERT_QUERIES'),
    ...require('./bin/UPDATE_QUERIES')
].map(e => e.query)

tests.forEach((e, i) => test(`${ e.text } [${ e.args }]`, t => t.pass()))