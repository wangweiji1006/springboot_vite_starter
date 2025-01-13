# springboot_vite_starter

[Click here to read in Chinese (中文)](README-zh.md)

This project is built with springboot and vite. It uses the power of springboot and the front-end modular development and management brought by vite. It not only simply uses vite to package static resources into the static directory of springboot, but also can directly access springboot's thymeleaf template by using vite proxy request in the development stage.

## Technology stack

* springboot3
* thymeleaf
* i18n
* thymeleaf-layout
* vite6
* tailwind css
* prettier

## Project structure

```
-- springboot_vite_starter [project]
	-- frontend [front-end thymeleaf (html), css, js, img directory]
		-- dist [compiled static project directory]
		-- node_modules
		-- src [source code directory]
			-- assets [css,js,img]
			-- about.html [about page]
			-- index.html [index page]
			-- layout.html [thymeleaf-layout page]
			-- svg.html [thymeleaf-component]
		-- package.json
		-- postcss.config.js
		-- tailwind.config.js
		-- vite.config.js [vite configuration file, front-end and back-end proxy core files]
		-- .prettierrc
	-- src [java code directory]
		-- main
			-- java
			-- resources
				-- application.properties
				-- application-dev.properties
				-- application-prod.properties
				-- messages.properties
				-- messages_en.properties
```

## Run steps

### 0. Run environment

* jdk17
* maven
* nodejs22

### 1. Modify springboot configuration file

```
(1) Modify the path of pring.thymeleaf.prefix and spring.web.resources.static-locations in application-dev.properties to your frontend/src directory path
(2) Modify the path of pring.thymeleaf.prefix and spring.web.resources.static-locations in application-prod.properties to your frontend/dist directory path
```

### 2. Run App.java

```
mvn install
Note: At this time, springboot is running on http://localhost:8080. Do not use the browser to directly access this path. If you directly access it, the static resources css, js, and img cannot be used normally.
```

### 3. Run vite

```
Enter the frontend directory and run
npm install
npm run dev
Note: At this time, vite is running on http://localhost:5173. When accessing:
- http://localhost:5173 will automatically proxy to http://localhost:8080
- http://localhost:5173/about.html will automatically proxy to http://localhost:8080/about.html
- http://localhost:5173/*.js|css|img will not be proxied and directly use the vite management mode

In this way, you can experience the use of thymeleaf+vite to develop the front end.
```

### 4. Compile and run

```
mvn clean package
java -jar -Dspring.profiles.active=prod target/springboot-vite-0.0.1-SNAPSHOT.jar
```