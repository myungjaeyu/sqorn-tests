const sq = require('sqorn-pg')()

const user = sq`user`

module.exports = [
    user.where({ genre : 'Fantasy' })
        .where({ language : 'French' }),
    user.return`*`
        .where({ genre : 'Fantasy' })
        .where({ language : 'French' }),
    user.return`age genre language`
        .where({ genre : 'Fantasy' })
        .where({ language : 'French' })
        .where({ age : 12 })
]