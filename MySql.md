## MYSQL 学习笔记
### 视图
#### 学习视图的目的：
简化查询操作

视图增删一般使用图形工具操作,这贴下命令操作语句和示例备忘

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
