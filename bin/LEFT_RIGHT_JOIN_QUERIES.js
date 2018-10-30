const sq = require('sqorn-pg')()

module.exports = [
    sq.from({ b: 'user' })
        .left.join({ a: 'item'})
        .on`b.item_id = a.id`,
    sq.from({ b: 'user' })
        .right.join({ a: 'item'})
        .on`b.item_id = a.id`,
    sq.from({ b: 'user' })
        .inner.join({ a: 'item'})
        .on`b.item_id = a.id`,
    sq.from({ b: 'user' })
        .join({ a: 'item'})
        .on`b.item_id = a.id`
]