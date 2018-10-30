# sqorn-tests

```sql
  ✔ select * from user []
  ✔ select * from user where (age < $1) [13]
  ✔ select * from user where (id = $1) [13]
  ✔ delete from user where (id = $1) [7]
  ✔ insert into user (age) values ($1) [7]
  ✔ update user set age = $1 where (id = $2) [11,3]
  ✔ select * from user where (genre = $1) and (language = $2) [Fantasy,French]
  ✔ select * from user where (genre = $1) and (language = $2) [Fantasy,French]
  ✔ select age genre language from user where (genre = $1) and (language = $2) and (age = $3) [Fantasy,French,12]
  ✔ select * from user natural join item []
  ✔ select * from user as b join item as a on (b.item_id = a.id) []
  ✔ select * from user as b join item as a on (b.item_id = a.id) and (b.name = $1) [u4bi]
  ✔ select * from user as b join item as a on (b.item_id = a.id) and (b.name = $1) [u4bi]
  ✔ select * from user as b join item as a on (b.item_id = a.id) and (b.name = $1) [u4bi]
  ✔ select * from user as b join item as a on (b.item_id = a.id) and (b.name = $1) or (b.admin = true) [u4bi]
  ✔ select * from user as b left join item as a on (b.item_id = a.id) []
  ✔ select * from user as b right join item as a on (b.item_id = a.id) []
  ✔ select * from user as b join item as a on (b.item_id = a.id) []
  ✔ select * from user as b join item as a on (b.item_id = a.id) []
  ✔ insert into user (name, age, team_id) values ($1, $2, $3), ($4, $5, $6), ($7, $8, $9), ($10, $11, $12) [u1bi,16,1,u2bi,17,1,u3bi,14,2,u4bi,20,2]
  ✔ insert into user (name, age, team_id) values ($1, $2, $3), ($4, default, $5), ($6, default, $7), ($8, default, $9) [u1bi,16,1,u2bi,1,u3bi,2,u4bi,2]
  ✔ update user set age = age + 1, admin = true, name = $1 where (id = $2) [u4bi,1]
  ✔ update user set age = $1, admin = $2, name = $3 where (id = $4) [age + 1,true,u4bi,1]
  ✔ update user set age = $1, admin = $2, name = $3 where (id = $4) [age + 1,true,u4bi,1]

  24 tests passed
```