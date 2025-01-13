# springboot_vite_starter

这个项目使用springboot和vite构建，使用springboot的强大的同时又可以使用vite带来的前端模块化开发和管理，它不仅是简单的使用vite来打包静态资源到springboot运行的static目录，同时也可以在开发阶段使用vite代理请求的方式直接访问springboot的thymeleaf模版。

## 技术栈

* springboot3
* thymeleaf
* i18n
* thymeleaf-layout
* vite6
* tailwind css
* prettier

## 项目结构

```
-- springboot_vite_starter [工程]
	-- frontend [前端thymeleaf(html),css,js,img目录]
		-- dist [编译后的静态工程目录]
		-- node_modules
		-- src [源码目录]
			-- assets [css,js,img]
			-- about.html [about页面]
			-- index.html [index页面]
			-- layout.html [thymeleaf-layout页面]
			-- svg.html [thymeleaf-component]
		-- package.json
		-- postcss.config.js
		-- tailwind.config.js
		-- vite.config.js [vite配置文件，前后端代理核心文件]
		-- .prettierrc
	-- src [java代码目录]
		-- main
			-- java
			-- resources
				-- application.properties
				-- application-dev.properties
				-- application-prod.properties
				-- messages.properties
				-- messages_en.properties
```

## 运行步骤

### 0.运行环境

* jdk17
* maven
* nodejs22

### 1.修改springboot配置文件

```
（1）修改application-dev.properties中的pring.thymeleaf.prefix和spring.web.resources.static-locations的路径为你的frontend/src目录路径
（2）修改application-prod.properties中的pring.thymeleaf.prefix和spring.web.resources.static-locations的路径为你的frontend/dist目录路径
```

### 2.运行App.java

```
mvn install 
注意：此时springboot运行在http://localhost:8080，不要浏览器直接访问这个路径，如果直接访问它静态资源css,js,img无法正常使用。
```

### 3.运行vite

```
进入frontend目录，运行
npm install
npm run dev
注意：此时vite运行在http://localhost:5173，当访问：
	- http://localhost:5173 将自动代理到 http://localhost:8080
	- http://localhost:5173/about.html 将自动代理到 http://localhost:8080/about.html
	- http://localhost:5173/*.js|css|img 不会被代理直接使用vite的管理模式
	
这样就可以体验使用thymeleaf+vite开发前端了。
```

### 4.编译运行

```
mvn clean package
npm run build
java -jar -Dspring.profiles.active=prod target/springboot-vite-0.0.1-SNAPSHOT.jar
```
		