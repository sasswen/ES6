

* 数据库

* SQL 语句

  * 插入

  ```
  INSERT INTO 表名(字段1, 字段2, ...) VALUES ("字段1的值","字段2的值",...)
  ```

  * 删除表中所有数据

```
DELETE FROM USER
```

* ​
  * 删除某个数据

```
DELETE FROM 表名 WHERE 条件1 AND 条件2
```

* ​
  * 更改

```
UPDATE 表名 SET 更改后字段="更改后字段的值" WHERE 更改前字段="更改前字段的值"
```

* ​
  * 查询所有

```
SELECT * FROM USER
```

* ​
  * 按条件查询

```
SELECT * FROM USER WHERE AGE <> 55
```

* ​
  * 按指定内容查询

```
SELECT NAME FROM USER WHERE AGE SEX="女"
```

* ​
  * 按限制条件查询

```
SELECT * FROM USER LIMIT 2,3
```

* ​
  * 模糊查询

```
SELECT * FROM USER WHERE NAME LIKE "老%"
```

* %: 零到多个字符"%包%"   包含  "包"  字的
  ​
  * 升序排序

```
SELECT * FROM USER ORDER BY AGE
```

* ​
  * 降序排列

```
SELECT * FROM USER ORDER BY AGE DESC
```



?>


