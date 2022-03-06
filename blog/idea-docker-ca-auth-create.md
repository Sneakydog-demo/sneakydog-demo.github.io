---
slug: 在idea中一键部署项目到Docker及CA认证
title: 在idea中一键部署项目到Docker及CA认证
authors:
  name: Sneakydog
  title: 在idea中一键部署项目到Docker及CA认证
  url: https://github.com/Sneakydog-demo
  image_url: https://github.com/wgao19.png
tags: [docker,ca, docusaurus]
---


#### 1.创建ca文件夹工作目录

```
mkdir -p /usr/local/ca
cd /usr/local/ca/
```

#### 2.创建 CA 私钥和公钥

###### 创建密码

```
openssl genrsa -aes256 -out ca-key.pem 4096
```

输出

```
...................++
.................................................................................................++
e is 65537 (0x10001)
Enter pass phrase for ca-key.pem:  # 此处输入密码
Verifying - Enter pass phrase for ca-key.pem: # 此处输入密码
```

###### 依次输入密码、国家、省、市、组织名称等

```
openssl req -new -x509 -days 365 -key ca-key.pem -sha256 -out ca.pem
```

###### 生成 server-key.pem

```
openssl genrsa -out server-key.pem 4096
```

输出

```
Generating RSA private key, 4096 bit long modulus
...........................++
................++
e is 65537 (0x10001)
```

###### 把下面的$Host换成你自己服务器外网的IP或者域名

```
openssl req -subj "/CN=www.xxx.com" -sha256 -new -key server-key.pem -out server.csr
```

###### 配置白名单

```
echo subjectAltName = DNS:www.xxx.com,IP:0.0.0.0 >> extfile.cnf
```

###### 执行命令，将Docker守护程序密钥的扩展使用属性设置为仅用于服务器身份验证

```
echo extendedKeyUsage = serverAuth >> extfile.cnf
```

###### 执行命令，并输入之前设置的密码，生成用到头秃签名证书

```
openssl x509 -req -days 36500 -sha256 -in server.csr -CA ca.pem -CAkey ca-key.pem \-CAcreateserial -out server-cert.pem -extfile extfile.cnf
```

输出

```
Signature ok
subject=/CN=x.x.x.x
Getting CA Private Key
Enter pass phrase for ca-key.pem: 
```

###### 生成客户端的key.pem，到时候把生成好的几个公钥私钥拷出去即可

```
openssl genrsa -out key.pem 4096
```

输出

```
Generating RSA private key, 4096 bit long modulus (2 primes)
.......................................++++
...............................................................................................................................++++
e is 65537 (0x010001)
```

执行命令

```
openssl req -subj '/CN=client' -new -key key.pem -out client.csr
```

###### 执行命令，要使密钥适合客户端身份验证，请创建扩展配置文件

```
echo extendedKeyUsage = clientAuth >> extfile.cnf
```

###### 生成cert.pem,需要输入前面设置的密码，生成签名证书

```
openssl x509 -req -days 365 -sha256 -in client.csr -CA ca.pem -CAkey ca-key.pem \-CAcreateserial -out cert.pem -extfile extfile.cnf
```

输出

```
Signature ok
subject=CN = client
Getting CA Private Key
Enter pass phrase for ca-key.pem:
```

###### 删除不需要的文件，两个证书签名请求

```
rm -v client.csr server.csr
```

输出

```
removed 'client.csr'
removed 'server.csr
```

###### 修改权限，要保护您的密钥免受意外损坏，请删除其写入权限。要使它们只能被您读取，更改文件模式

```
chmod -v 0400 ca-key.pem key.pem server-key.pem
```

输出

```
mode of 'ca-key.pem' changed from 0600 (rw-------) to 0400 (r--------)
mode of 'key.pem' changed from 0600 (rw-------) to 0400 (r--------)
mode of 'server-key.pem' changed from 0600 (rw-------) to 0400 (r--------)
```

###### 证书可以是对外可读的，删除写入权限以防止意外损坏

```
chmod -v 0444 ca.pem server-cert.pem cert.pem
```

输出

```
mode of 'ca.pem' changed from 0644 (rw-r--r--) to 0444 (r--r--r--)
mode of 'server-cert.pem' changed from 0644 (rw-r--r--) to 0444 (r--r--r--)
mode of 'cert.pem' changed from 0644 (rw-r--r--) to 0444 (r--r--r--)
```

#### 3.docker 及 idea 的配置

###### 归集服务器证书

```
cp server-*.pem  /etc/docker/
cp ca.pem /etc/docker/
```

###### 修改Docker配置，使Docker守护程序仅接受来自提供CA信任的证书的客户端的连接

```
vim /lib/systemd/system/docker.service
```

```
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target docker.socket firewalld.service
Wants=network-online.target
Requires=docker.socket

[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
EnvironmentFile=-/etc/default/docker
ExecStart=/usr/sbin/dockerd -H fd:// $DOCKER_OPTS
ExecReload=/bin/kill -s HUP $MAINPID
LimitNOFILE=1048576
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNPROC=infinity
LimitCORE=infinity
# Uncomment TasksMax if your systemd version supports it.
# Only systemd 226 and above support this version.
TasksMax=infinity
TimeoutStartSec=0
# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes
# kill only the docker process, not all processes in the cgroup
KillMode=process
# restart the docker process if it exits prematurely
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s

[Install]
WantedBy=multi-user.target
```

###### 添加如下代码到配置文件中EnvironmentFile=-/etc/default/docker

```
DOCKER_OPTS="-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock --tlsverify --tlscacert=/etc/docker/ca.pem --tlscert=/etc/docker/server-cert.pem --tlskey=/etc/docker/server-key.pem"
```

###### 重新加载daemon并重启docker

```
systemctl daemon-reload 
systemctl restart docker
```

###### 开放2375端口，到qcloud安全组里去开放端口

​      


