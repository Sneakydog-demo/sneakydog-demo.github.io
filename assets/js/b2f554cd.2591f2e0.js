"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"archlinux i3wm\u5b89\u88c5\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5","metadata":{"permalink":"/blog/archlinux i3wm\u5b89\u88c5\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5","source":"@site/blog/archlinux-i3-config-input-method.md","title":"archlinux i3wm\u5b89\u88c5\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5","description":"fcitx5: \u8f93\u5165\u6cd5\u57fa\u7840\u6846\u67b6\u4e3b\u7a0b\u5e8f","date":"2022-03-07T11:52:43.000Z","formattedDate":"March 7, 2022","tags":[{"label":"archlinux","permalink":"/blog/tags/archlinux"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":1.08,"truncated":false,"authors":[{"name":"Sneakydog","title":"archlinux i3wm\u5b89\u88c5\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5","url":"https://github.com/Sneakydog-demo","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"archlinux i3wm\u5b89\u88c5\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5","title":"archlinux i3wm\u5b89\u88c5\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5","authors":{"name":"Sneakydog","title":"archlinux i3wm\u5b89\u88c5\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5","url":"https://github.com/Sneakydog-demo","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["archlinux","docusaurus"]},"nextItem":{"title":"\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1","permalink":"/blog/\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1"}},"content":"```\\nsudo pacman -Rs $(pacman -Qsq fcitx)\\nsudo pacman -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-gtk fcitx5-chinese-addons fcitx5-material-color\\n```\\n\\n>fcitx5: \u8f93\u5165\u6cd5\u57fa\u7840\u6846\u67b6\u4e3b\u7a0b\u5e8f\\n>fcitx5-configtool(kcm-fcitx5)\uff1a\u8f93\u5165\u6cd5\u914d\u7f6e\u7a0b\u5e8f(KDE\u684c\u9762\u73af\u5883\u7684\u652f\u6301)\\n>fcitx5-qt: QT5\u7a0b\u5e8f\u7684\u652f\u6301 \\n>fcitx5-gtk: GTK\u7a0b\u5e8f\u7684\u652f\u6301 \\n>fcitx5-chinese-addons: \u7b80\u4f53\u4e2d\u6587\u8f93\u5165\u7684\u652f\u6301\uff0c\u4e91\u62fc\u97f3\\n>fcitx5-material-color\uff1a\u4e00\u6b3e\u4f7f\u7528 Material Design \u914d\u8272\u7684 fcitx5 \u76ae\u80a4\uff0c\u65e8\u5728\u6a21\u4eff Windows 10 \u81ea\u5e26\u8f93\u5165\u6cd5\u7684 UI\\n\\n\u4fee\u6539\u8f93\u5165\u6cd5\u73af\u5883\u53d8\u91cf\uff0c\u4f7f\u5e94\u7528\u53ef\u4ee5\u8c03\u7528Fcitx5\u8f93\u5165\u6cd5,\u5c06\u4e0b\u9762\u7684\u5185\u5bb9\u7c98\u8d34\u5230`~/.pam_environment`\\n```\\nGTK_IM_MODULE DEFAULT=fcitx\\nQT_IM_MODULE  DEFAULT=fcitx\\nXMODIFIERS    DEFAULT=@im=fcitx\\n```\\n\\ni3\u914d\u7f6e\u81ea\u52a8\u542f\u52a8,`\uff5e/.i3/config`\\n```\\nexec --no-startup-id fcitx5\\n```\\n\\n\u914d\u7f6e\u8f93\u5165\u6cd5\u4e3b\u9898,\u4fee\u6539 `~/.config/fcitx5/conf/classicui.conf`\\nps: \u4f7f\u7528`fcitx5-material-color`\u8fd9\u4e2a\u4e3b\u9898,\u53ef\u4ee5\u53c2\u7167: https://github.com/hosxy/Fcitx5-Material-Color\\n\\n```\\n# \u5782\u76f4\u5019\u9009\u5217\u8868\\nVertical Candidate List=False\\n# \u6309\u5c4f\u5e55 DPI \u4f7f\u7528\\nPerScreenDPI=True\\n# Font (\u8bbe\u7f6e\u6210\u4f60\u559c\u6b22\u7684\u5b57\u4f53)\\nFont=\\"\u601d\u6e90\u9ed1\u4f53 CN Medium 13\\"\\n# \u4e3b\u9898\\nTheme=Material-Color-DeepPurple\\n```\\n\\n![2021-08-07_10-10](https://user-images.githubusercontent.com/5198378/128584769-7cb6493a-210e-41f3-9431-20ca283b03c1.png)"},{"id":"\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1","metadata":{"permalink":"/blog/\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1","source":"@site/blog/idea-docker-ca-auth-create.md","title":"\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1","description":"1.\u521b\u5efaca\u6587\u4ef6\u5939\u5de5\u4f5c\u76ee\u5f55","date":"2022-03-07T11:52:43.000Z","formattedDate":"March 7, 2022","tags":[{"label":"docker","permalink":"/blog/tags/docker"},{"label":"ca","permalink":"/blog/tags/ca"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":4.315,"truncated":false,"authors":[{"name":"Sneakydog","title":"\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1","url":"https://github.com/Sneakydog-demo","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1","title":"\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1","authors":{"name":"Sneakydog","title":"\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1","url":"https://github.com/Sneakydog-demo","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["docker","ca","docusaurus"]},"prevItem":{"title":"archlinux i3wm\u5b89\u88c5\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5","permalink":"/blog/archlinux i3wm\u5b89\u88c5\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5"},"nextItem":{"title":"vue\u5728springboot\u4e2d\u90e8\u7f72","permalink":"/blog/vue\u5728springboot\u4e2d\u90e8\u7f72"}},"content":"#### 1.\u521b\u5efaca\u6587\u4ef6\u5939\u5de5\u4f5c\u76ee\u5f55\\n\\n```\\nmkdir -p /usr/local/ca\\ncd /usr/local/ca/\\n```\\n\\n#### 2.\u521b\u5efa CA \u79c1\u94a5\u548c\u516c\u94a5\\n\\n###### \u521b\u5efa\u5bc6\u7801\\n\\n```\\nopenssl genrsa -aes256 -out ca-key.pem 4096\\n```\\n\\n\u8f93\u51fa\\n\\n```\\n...................++\\n.................................................................................................++\\ne is 65537 (0x10001)\\nEnter pass phrase for ca-key.pem:  # \u6b64\u5904\u8f93\u5165\u5bc6\u7801\\nVerifying - Enter pass phrase for ca-key.pem: # \u6b64\u5904\u8f93\u5165\u5bc6\u7801\\n```\\n\\n###### \u4f9d\u6b21\u8f93\u5165\u5bc6\u7801\u3001\u56fd\u5bb6\u3001\u7701\u3001\u5e02\u3001\u7ec4\u7ec7\u540d\u79f0\u7b49\\n\\n```\\nopenssl req -new -x509 -days 365 -key ca-key.pem -sha256 -out ca.pem\\n```\\n\\n###### \u751f\u6210 server-key.pem\\n\\n```\\nopenssl genrsa -out server-key.pem 4096\\n```\\n\\n\u8f93\u51fa\\n\\n```\\nGenerating RSA private key, 4096 bit long modulus\\n...........................++\\n................++\\ne is 65537 (0x10001)\\n```\\n\\n###### \u628a\u4e0b\u9762\u7684$Host\u6362\u6210\u4f60\u81ea\u5df1\u670d\u52a1\u5668\u5916\u7f51\u7684IP\u6216\u8005\u57df\u540d\\n\\n```\\nopenssl req -subj \\"/CN=www.xxx.com\\" -sha256 -new -key server-key.pem -out server.csr\\n```\\n\\n###### \u914d\u7f6e\u767d\u540d\u5355\\n\\n```\\necho subjectAltName = DNS:www.xxx.com,IP:0.0.0.0 >> extfile.cnf\\n```\\n\\n###### \u6267\u884c\u547d\u4ee4\uff0c\u5c06Docker\u5b88\u62a4\u7a0b\u5e8f\u5bc6\u94a5\u7684\u6269\u5c55\u4f7f\u7528\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u4ec5\u7528\u4e8e\u670d\u52a1\u5668\u8eab\u4efd\u9a8c\u8bc1\\n\\n```\\necho extendedKeyUsage = serverAuth >> extfile.cnf\\n```\\n\\n###### \u6267\u884c\u547d\u4ee4\uff0c\u5e76\u8f93\u5165\u4e4b\u524d\u8bbe\u7f6e\u7684\u5bc6\u7801\uff0c\u751f\u6210\u7528\u5230\u5934\u79c3\u7b7e\u540d\u8bc1\u4e66\\n\\n```\\nopenssl x509 -req -days 36500 -sha256 -in server.csr -CA ca.pem -CAkey ca-key.pem \\\\-CAcreateserial -out server-cert.pem -extfile extfile.cnf\\n```\\n\\n\u8f93\u51fa\\n\\n```\\nSignature ok\\nsubject=/CN=x.x.x.x\\nGetting CA Private Key\\nEnter pass phrase for ca-key.pem: \\n```\\n\\n###### \u751f\u6210\u5ba2\u6237\u7aef\u7684key.pem\uff0c\u5230\u65f6\u5019\u628a\u751f\u6210\u597d\u7684\u51e0\u4e2a\u516c\u94a5\u79c1\u94a5\u62f7\u51fa\u53bb\u5373\u53ef\\n\\n```\\nopenssl genrsa -out key.pem 4096\\n```\\n\\n\u8f93\u51fa\\n\\n```\\nGenerating RSA private key, 4096 bit long modulus (2 primes)\\n.......................................++++\\n...............................................................................................................................++++\\ne is 65537 (0x010001)\\n```\\n\\n\u6267\u884c\u547d\u4ee4\\n\\n```\\nopenssl req -subj \'/CN=client\' -new -key key.pem -out client.csr\\n```\\n\\n###### \u6267\u884c\u547d\u4ee4\uff0c\u8981\u4f7f\u5bc6\u94a5\u9002\u5408\u5ba2\u6237\u7aef\u8eab\u4efd\u9a8c\u8bc1\uff0c\u8bf7\u521b\u5efa\u6269\u5c55\u914d\u7f6e\u6587\u4ef6\\n\\n```\\necho extendedKeyUsage = clientAuth >> extfile.cnf\\n```\\n\\n###### \u751f\u6210cert.pem,\u9700\u8981\u8f93\u5165\u524d\u9762\u8bbe\u7f6e\u7684\u5bc6\u7801\uff0c\u751f\u6210\u7b7e\u540d\u8bc1\u4e66\\n\\n```\\nopenssl x509 -req -days 365 -sha256 -in client.csr -CA ca.pem -CAkey ca-key.pem \\\\-CAcreateserial -out cert.pem -extfile extfile.cnf\\n```\\n\\n\u8f93\u51fa\\n\\n```\\nSignature ok\\nsubject=CN = client\\nGetting CA Private Key\\nEnter pass phrase for ca-key.pem:\\n```\\n\\n###### \u5220\u9664\u4e0d\u9700\u8981\u7684\u6587\u4ef6\uff0c\u4e24\u4e2a\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42\\n\\n```\\nrm -v client.csr server.csr\\n```\\n\\n\u8f93\u51fa\\n\\n```\\nremoved \'client.csr\'\\nremoved \'server.csr\\n```\\n\\n###### \u4fee\u6539\u6743\u9650\uff0c\u8981\u4fdd\u62a4\u60a8\u7684\u5bc6\u94a5\u514d\u53d7\u610f\u5916\u635f\u574f\uff0c\u8bf7\u5220\u9664\u5176\u5199\u5165\u6743\u9650\u3002\u8981\u4f7f\u5b83\u4eec\u53ea\u80fd\u88ab\u60a8\u8bfb\u53d6\uff0c\u66f4\u6539\u6587\u4ef6\u6a21\u5f0f\\n\\n```\\nchmod -v 0400 ca-key.pem key.pem server-key.pem\\n```\\n\\n\u8f93\u51fa\\n\\n```\\nmode of \'ca-key.pem\' changed from 0600 (rw-------) to 0400 (r--------)\\nmode of \'key.pem\' changed from 0600 (rw-------) to 0400 (r--------)\\nmode of \'server-key.pem\' changed from 0600 (rw-------) to 0400 (r--------)\\n```\\n\\n###### \u8bc1\u4e66\u53ef\u4ee5\u662f\u5bf9\u5916\u53ef\u8bfb\u7684\uff0c\u5220\u9664\u5199\u5165\u6743\u9650\u4ee5\u9632\u6b62\u610f\u5916\u635f\u574f\\n\\n```\\nchmod -v 0444 ca.pem server-cert.pem cert.pem\\n```\\n\\n\u8f93\u51fa\\n\\n```\\nmode of \'ca.pem\' changed from 0644 (rw-r--r--) to 0444 (r--r--r--)\\nmode of \'server-cert.pem\' changed from 0644 (rw-r--r--) to 0444 (r--r--r--)\\nmode of \'cert.pem\' changed from 0644 (rw-r--r--) to 0444 (r--r--r--)\\n```\\n\\n#### 3.docker \u53ca idea \u7684\u914d\u7f6e\\n\\n###### \u5f52\u96c6\u670d\u52a1\u5668\u8bc1\u4e66\\n\\n```\\ncp server-*.pem  /etc/docker/\\ncp ca.pem /etc/docker/\\n```\\n\\n###### \u4fee\u6539Docker\u914d\u7f6e\uff0c\u4f7fDocker\u5b88\u62a4\u7a0b\u5e8f\u4ec5\u63a5\u53d7\u6765\u81ea\u63d0\u4f9bCA\u4fe1\u4efb\u7684\u8bc1\u4e66\u7684\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\\n\\n```\\nvim /lib/systemd/system/docker.service\\n```\\n\\n```\\n[Unit]\\nDescription=Docker Application Container Engine\\nDocumentation=https://docs.docker.com\\nAfter=network-online.target docker.socket firewalld.service\\nWants=network-online.target\\nRequires=docker.socket\\n\\n[Service]\\nType=notify\\n# the default is not to use systemd for cgroups because the delegate issues still\\n# exists and systemd currently does not support the cgroup feature set required\\n# for containers run by docker\\nEnvironmentFile=-/etc/default/docker\\nExecStart=/usr/sbin/dockerd -H fd:// $DOCKER_OPTS\\nExecReload=/bin/kill -s HUP $MAINPID\\nLimitNOFILE=1048576\\n# Having non-zero Limit*s causes performance problems due to accounting overhead\\n# in the kernel. We recommend using cgroups to do container-local accounting.\\nLimitNPROC=infinity\\nLimitCORE=infinity\\n# Uncomment TasksMax if your systemd version supports it.\\n# Only systemd 226 and above support this version.\\nTasksMax=infinity\\nTimeoutStartSec=0\\n# set delegate yes so that systemd does not reset the cgroups of docker containers\\nDelegate=yes\\n# kill only the docker process, not all processes in the cgroup\\nKillMode=process\\n# restart the docker process if it exits prematurely\\nRestart=on-failure\\nStartLimitBurst=3\\nStartLimitInterval=60s\\n\\n[Install]\\nWantedBy=multi-user.target\\n```\\n\\n###### \u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\u5230\u914d\u7f6e\u6587\u4ef6\u4e2dEnvironmentFile=-/etc/default/docker\\n\\n```\\nDOCKER_OPTS=\\"-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock --tlsverify --tlscacert=/etc/docker/ca.pem --tlscert=/etc/docker/server-cert.pem --tlskey=/etc/docker/server-key.pem\\"\\n```\\n\\n###### \u91cd\u65b0\u52a0\u8f7ddaemon\u5e76\u91cd\u542fdocker\\n\\n```\\nsystemctl daemon-reload \\nsystemctl restart docker\\n```\\n\\n###### \u5f00\u653e2375\u7aef\u53e3\uff0c\u5230qcloud\u5b89\u5168\u7ec4\u91cc\u53bb\u5f00\u653e\u7aef\u53e3\\n\\n\u200b"},{"id":"vue\u5728springboot\u4e2d\u90e8\u7f72","metadata":{"permalink":"/blog/vue\u5728springboot\u4e2d\u90e8\u7f72","source":"@site/blog/vue-springboot-bushu.md","title":"vue\u5728springboot\u4e2d\u90e8\u7f72","description":"\u9879\u76ee\u5730\u5740","date":"2022-03-07T11:52:43.000Z","formattedDate":"March 7, 2022","tags":[{"label":"spring","permalink":"/blog/tags/spring"},{"label":"java","permalink":"/blog/tags/java"},{"label":"spring boot","permalink":"/blog/tags/spring-boot"},{"label":"vue","permalink":"/blog/tags/vue"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.89,"truncated":false,"authors":[{"name":"Sneakydog","title":"vue\u5728springboot\u4e2d\u90e8\u7f72","url":"https://github.com/Sneakydog-demo","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"vue\u5728springboot\u4e2d\u90e8\u7f72","title":"vue\u5728springboot\u4e2d\u90e8\u7f72","authors":{"name":"Sneakydog","title":"vue\u5728springboot\u4e2d\u90e8\u7f72","url":"https://github.com/Sneakydog-demo","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["spring","java","spring boot","vue","docusaurus"]},"prevItem":{"title":"\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1","permalink":"/blog/\u5728idea\u4e2d\u4e00\u952e\u90e8\u7f72\u9879\u76ee\u5230Docker\u53caCA\u8ba4\u8bc1"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"[\u9879\u76ee\u5730\u5740](https://gitee.com/Sneakydog/sneakydog-hello-vue3-demo)\\n\\n\u628avue\u9879\u76ee\u4ee3\u7801\u548cspringboot\u9879\u76ee\u4ee3\u7801\u5408\u5e76\u6210\u4e00\u4e2a\u76ee\u5f55\u5982\u4e0b:\\n![image](https://user-images.githubusercontent.com/5198378/140686780-62aaf972-c8ff-4d7d-9f9e-9274f4113425.png)\\n\\n\u4fee\u6539vite.config.ts\u751f\u6210\u76ee\u5f55\\n\\n```\\nimport {defineConfig} from \'vite\'\\nimport vue from \'@vitejs/plugin-vue\'\\n\\n// https://vitejs.dev/config/\\nexport default defineConfig({\\n  plugins: [vue()],\\n  // server: {\\n  //   proxy: {\\n  //     \'/api\': \'http://localhost:8080/\'\\n  //   }\\n  // },\\n  build: {\\n    outDir: \'./src/main/resources/webapp\',\\n  }\\n})\\n\\n```\\n\\nvue\u8def\u7531\u914d\u7f6e,\u7b80\u5355\u4f7f\u7528hash\u8def\u7531\\n```\\n\\nexport const router = createRouter({\\n    history: createWebHashHistory(),\\n    routes: [\\n        {\\n            path: \'/login\',\\n            component: Login,\\n            meta: {\\n                requireAuth: false\\n            }\\n        },\\n        {\\n            path: \'/\',\\n            component: Home,\\n            meta: {\\n                requireAuth: true\\n            }\\n        },\\n        {\\n            path: \'/about\',\\n            component: About,\\n            meta: {\\n                requireAuth: true\\n            }\\n        },\\n    ],\\n})\\n\\n```\\n\\n\u4fee\u6539springboot\u914d\u7f6e\\n```\\nspring:\\n  web:\\n    resources:\\n      static-locations: classpath:/webapp/assets/\\n  mvc:\\n    log-request-details: true\\n    static-path-pattern: /assets/**.{js,css}\\n  thymeleaf:\\n    prefix: classpath:/webapp/\\n    cache: false\\n```\\n\\n\u521b\u5efa\u4e00\u4e2arest API\\n```\\n@GetMapping({\\"/\\", \\"/index\\", \\"/index.html\\"})\\npublic String index(){\\n    return \\"index\\";\\n}\\n```\\n\u751f\u6210vue\u9759\u6001\u6587\u4ef6\u4e4b\u540e\u542f\u52a8springboot\\n![image](https://user-images.githubusercontent.com/5198378/140687691-d4f603f1-541a-4d4d-9a46-813ce3425938.png)"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"vue\u5728springboot\u4e2d\u90e8\u7f72","permalink":"/blog/vue\u5728springboot\u4e2d\u90e8\u7f72"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.175,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":2.05,"truncated":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.12,"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);