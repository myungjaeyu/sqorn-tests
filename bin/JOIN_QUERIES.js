const sq = require('sqorn-pg')()

module.exports = [
    sq.from`user`.join`item`,
    sq.from({ b: 'user' })
      .join({ a: 'item'})
      .on`b.item_id = a.id`,
    sq.from({ b: 'user' })
      .join({ a: 'item'})
      .on`b.item_id = a.id`
      .on`b.name = ${ 'u4bi' }`,
    sq.from({ b: 'user' })
      .join({ a: 'item'})
      .on({ 'b.item_id' : sq.raw('a.id') })
      .on({ 'b.name' : 'u4bi' }),
    sq.from({ b: 'user' })
      .join({ a: 'item'})
      .on`$${'b.item_id'} = $${'a.id'}`
      .and({ 'b.name': 'u4bi' }),
    sq.from({ b: 'user' })
      .join({ a: 'item'})
      .on`$${'b.item_id'} = $${'a.id'}`
      .and({ 'b.name': 'u4bi' })
      .or`b.admin = true`
]