---
title: vue在springboot中部署
date: 2021-11-08 12:57:33
tags:
---

[项目地址](https://gitee.com/Sneakydog/sneakydog-hello-vue3-demo)

把vue项目代码和springboot项目代码合并成一个目录如下:
![image](https://user-images.githubusercontent.com/5198378/140686780-62aaf972-c8ff-4d7d-9f9e-9274f4113425.png)

修改vite.config.ts生成目录

```
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:8080/'
  //   }
  // },
  build: {
    outDir: './src/main/resources/webapp',
  }
})

```

vue路由配置,简单使用hash路由
```

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            component: Login,
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/',
            component: Home,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/about',
            component: About,
            meta: {
                requireAuth: true
            }
        },
    ],
})

```

修改springboot配置
```
spring:
  web:
    resources:
      static-locations: classpath:/webapp/assets/
  mvc:
    log-request-details: true
    static-path-pattern: /assets/**.{js,css}
  thymeleaf:
    prefix: classpath:/webapp/
    cache: false
```

创建一个rest API
```
@GetMapping({"/", "/index", "/index.html"})
public String index(){
    return "index";
}
```
生成vue静态文件之后启动springboot
![image](https://user-images.githubusercontent.com/5198378/140687381-7e0159b0-9d83-4af5-828c-0bc37c481f70.png)

