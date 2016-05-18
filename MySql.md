## MYSQL 学习笔记
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
