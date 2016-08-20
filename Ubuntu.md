## Linux/Ubuntu 笔记

**免密码登录**
1. 服务端安装ssh服务:更新:`$ sudo apt-get update`;安装openssh-server:`$ sudo apt-get install openssh-server`;开启openssh服务:`$ sudo service ssh start`
2. 客户端生成密钥对`$ ssh-keygen -t rsa -C "123456@qq.com"`
3. 客户端上的公钥复制到SSH服务端 `$ ssh-copy-id user@ip_address`
