# Laravel 学习

## 常用命令

composer安装:`composer create-project laravel/laravel --prefer-dist ~5.1.*`

生成模型：`php artisan make:model User`

生成数据表migration:`php artisan make:migration create_artiles_table --create=articles`

填充字段之后运行`php artisan migrate`

生成播种器：`php artisan make:seeder ArticleTableSeeder`

执行播种器：`php artisan db:seed`

auth认证：`php artisan make:auth`

## 常用工具

LaravelDebugbar 调试工具 安装代码：`composer require barryvdh/laravel-debugbar`

