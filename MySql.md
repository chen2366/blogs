## MYSQL 学习笔记

### SQL语句备忘

#### 数据库操作

* 更新数据库密码：
`SET PASSWORD FOR 'root'@'localhost' = PASSWORD('newpass')`、
`USE mysql;UPDATE user SET password = PASSWORD('newpass') WHERE user = 'root';FLUSH PRIVILEGES`


#### 基本增删改查

* 插入数据：
`INSERT INTO user ('id', 'name', 'gander') VALUES ('1', '张三', '男')`、
`INSERT INTO user ('1', '张三', '男')`

* 更新数据：
`UPDATE user SET name='李四', gander='女' WHERE id = 1`

* 删除数据：
`DELETE FROM user WHERE id = 1`

* 查询：
`SELECT * FROM user`

#### 常用查询
* 使用数据中的一个字段更新另一个字段：
`UPDATE a INNER JOIN b on a.bid=b.id SET a.x=b.x,a.y=b.y `

* 创建临时表
```
DROP TABLE IF EXISTS tmp_coop;
CREATE TEMPORARY TABLE tmp_coop (
	id INTEGER NOT NULL PRIMARY KEY,
  attitude TINYINT NOT NULL,
  coop_status TINYINT NOT NULL
);
```

### 视图
#### 学习视图的目的：
简化查询操作，在设计数据库的时候可以分表设计，使用视图来组装对象所需要的数据，可以兼顾灵活性和便利性。
比如：比如设计的课程表，里面包含了老师id和教室id等信息，在实际的数据库查询需要使用连表查询，程序操作比较繁琐。将常用字段组装成视图，在程序操作查询的时候方便很多。

**注意：***由于更新视图可能有条件限制导致数据更新失败，在更新和写入数据的时候对基本表进行操作。视图增删一般使用图形工具操作,这贴下命令操作语句和示例备忘*

* 创建视图,例如：
    `CREATE ALGORITHM=UNDEFINED
    DEFINER=root@localhost
    SQL SECURITY DEFINER
    VIEW test_view AS
    SELECT danmu.id AS id,ecs_goods.goods_name AS goods_name,danmu.danmu AS danmuFROM (danmu join ecs_goods) WHERE (danmu.id = ecs_goods.goods_id)`

* 查询视图：视图的查询和基本表查询完全一致,例如:
`SELECT * FROM view`

* 查看视图,有两种方式:
`DESCRIBE view`、`SHOW table STATUS LIKE view`

* 删除视图
`DROP VIEW IF EXISTS view`

## 查询优化

### 分页查询优化(当查询表中记录比较多的时候，使用LIMIT查询时间随着起始记录的增加)

#### 原理：LIMIT查询时间跟记录起始位置成正比；查询主键的时间比查询整条记录时间短。

* 方法1：使用WHERE条件判断
`SELECT * FROM table WHERE id >= (SELECT id FROM table_name LIMIT 1000000,1) limit 20`

* 方法2：使用JOIN连表
`SELECT * FROM table a JOIN (SELECT id FROM table_name LIMIT 100000, 20) b ON a.id = b.id`


## 数据库维护操作

### 数据库远程访问权限
```
GRANT ALL PRIVILEGES ON 数据库名.数据表明 TO '用户名'@'%'IDENTIFIED BY '密码' WITH GRANT OPTION;

GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'%'IDENTIFIED BY 'mypassword' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```
## 技巧

### 蠕虫复制示例
```
\# 格式如：
INSERT into 表名(字段1,字段2,字段3) select 字段1,字段2,字段3 from 表名; -- 字段为非唯一字段

INSERT into user_info(version,create_user_count,create_pc_count) select version,create_user_count,create_pc_count from user_info;
```

### 查看表结构
```
# 仅查看表名和注释
select column_name, column_comment from information_schema.columns where table_schema ='db' and table_name = 'tablename' ;
```

