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

  19 tests passed
```