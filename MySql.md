## MYSQL 学习笔记

### sql语句备忘

#### 数据库操作

#####更新数据库密码
1. `SET PASSWORD FOR 'root'@'localhost' = PASSWORD('newpass');`
2. `use mysql;UPDATE user SET Password = PASSWORD('newpass') WHERE user = 'root';FLUSH PRIVILEGES;`


#### 基本增删改查

##### 插入数据
`INSERT INTO user ('id', 'name', 'gander') VALUES ('1', '张三', '男');`
`INSERT INTO user ('1', '张三', '男');`

##### 更新数据
`UPDATE user SET name='李四', gander='女' WHERE id = 1;`

##### 删除数据
`DELETE FROM user WHERE id = 1;`

##### 查询
`SELECT * FROM user;`

#### 常用查询
1. 使用数据中的一个字段更新另一个字段
`UPDATE a INNER JOIN b on a.bid=b.id SET a.x=b.x,a.y=b.y ;`

### 视图
#### 学习视图的目的：
简化查询操作，在设计数据库的时候可以分表设计，使用视图来组装对象所需要的数据，可以兼顾灵活性和便利性。
比如：比如设计的课程表，里面包含了老师id和教室id等信息，在实际的数据库查询需要使用连表查询，程序操作比较繁琐。将常用字段组装成视图，在程序操作查询的时候方便很多。

**注意：***由于更新视图可能有条件限制导致数据更新失败，在更新和写入数据的时候对基本表进行操作。视图增删一般使用图形工具操作,这贴下命令操作语句和示例备忘*

* 创建视图,例如：
> CREATE ALGORITHM=UNDEFINED
> DEFINER=\`root\`@\`localhost\`
> SQL SECURITY DEFINER
> VIEW \`test_view\` AS
> select \`danmu\`.\`id\` AS \`id\`,\`ecs_goods\`.\`goods_name\` AS \`goods_name\`,\`danmu\`.\`danmu\` AS \`danmu\`from (\`danmu\` join \`ecs_goods\`) where (\`danmu\`.\`id\` = \`ecs_goods\`.\`goods_id\`)

* 查询视图：视图的查询和基本表查询完全一致,例如:
> SELECT * FROM \`view_name\`

* 查看视图,有两种方式:
> DESCRIBE view_name
>
> show TABLE status LIKE 'view_name'

* 删除视图
> DROP VIEW IF EXISTS view_name

## 查询优化

* 分页查询优化(当查询表中记录比较多的时候，使用limit查询时间随着起始记录的增加)

原理：limit查询时间跟记录起始位置成正比；查询主键的时间比查询整条记录时间短。

方法1：使用where条件判断
`SELECT * FROM table_name WHERE id >= (SELECT id FROM table_name LIMIT 1000000,1) limit 20;`

方法2：使用join连表
`SELECT * FROM table_name a JOIN (SELECT id FROM table_name LIMIT 100000, 20) b ON a.id = b.id;`