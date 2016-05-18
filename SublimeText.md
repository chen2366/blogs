# Sublime Text 3
## 常用插件
插件名称|介绍
:--|:--
Emmet|Html快速编写
Sftp|ftp工具
DocBlockr|函数快速生成注释,function 上方输入 /** 按Tab键
Git|版本控制器
GitGutter|编辑文件时在行左侧显示标示git修改
Trailing Space|高亮显示行末多余空白
Alignment|等号对齐
OmniMarkupPreviewer|预览MD文件
PHP Coder Sniffer|php语法提示
Tag|格式化代码
DeleteBlankLines|删除文件中的空白行,选中内容，Ctrl+Alt+BackSpace

## 常用技巧
1. 多光标，Ctrl+左键 插入多个光标；选中文字 Ctrl+D 选中下一个相同文字，可同时编辑；选中多行 Ctrl+Shift+L 在选中行末尾插入光标。
2. 格式化Html,选中一段Html代码 Ctrl+Alt+F 快速格式。（需要Tag插件）
3. ftp同步上传。在项目文件夹右键\>SFTP/FTP\>Map to remote,配置FTP信息并保存。上传：Ctrl+Alt+U Ctrl+Alt+F，下载：Ctrl+Alt+U Ctrl+Alt+I;
4. 快速编译PHP文件，快捷键：Ctrl+B。将php.exe路径加入系统环境变量，重启电脑；工具>编译系统>新编译系统粘贴如下代码，保存为 php.sublime_build
> {
"cmd": ["php", "$file"],
"file_regex": "^(...*?):([0-9]*):?([0-9]*)",
"selector": "source.php"
}
6. 文件内搜索，Ctrl+F 替换Ctrl+H，跨文件搜索：Ctrl+Shift+F。




