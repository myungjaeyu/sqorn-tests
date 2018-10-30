const sq = require('sqorn-pg')()

const user = sq`user`

module.exports = [
    user.set`age = age + 1, admin = true`.set`name = ${ 'u4bi' }`.where({ id : 1 }),
    user.set({ age : 'age + 1', admin : true, name: 'u4bi' }).where({ id : 1 }),
    user.set({ age : 'age + 1' })
        .set({ admin : true })
        .set({ name: 'u4bi' })
        .where({ id : 1 })
]