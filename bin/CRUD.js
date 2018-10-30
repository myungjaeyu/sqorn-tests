const sq = require('sqorn-pg')()

const user = sq`user`

module.exports = [
    user,
    user`age < ${ 13 }`,
    user({ id : 13 }),
    user.delete({ id : 7 }),
    user.insert({ age : 7 }),
    user({ id: 3 }).set({ age : 11 })
].map(e => e.query)