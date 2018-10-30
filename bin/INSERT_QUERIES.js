const sq = require('sqorn-pg')()

const user = sq`user`

module.exports = [
    user.insert(
        { name : 'u1bi', age : 16, team_id : 1 },
        { name : 'u2bi', age : 17, team_id : 1 },
        { name : 'u3bi', age : 14, team_id : 2 },
        { name : 'u4bi', age : 20, team_id : 2 }
    ),
    user.insert(
        { name : 'u1bi', age : 16, team_id : 1 },
        { name : 'u2bi', team_id : 1 },
        { name : 'u3bi', team_id : 2 },
        { name : 'u4bi', team_id : 2 }
    )
]