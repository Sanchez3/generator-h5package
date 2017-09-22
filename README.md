# 基于Webpack的前端h5项目生成器

<div align="left">
    <div>
        <a href="https://www.npmjs.com/package/generator-h5package"><img alt="npm version" src="https://img.shields.io/npm/v/generator-h5package.svg"></a>
        <a href="https://travis-ci.org/Sanchez3/generator-h5package"><img alt="Travis CI Build Status" src="https://travis-ci.org/Sanchez3/generator-h5package.svg?branch=master"></a>
        <a href="https://david-dm.org/Sanchez3/generator-h5package"><img alt="dependencies status" src="https://david-dm.org/Sanchez3/generator-h5package/status.svg"></a>
        <a href="https://david-dm.org/Sanchez3/generator-h5package?type=dev"><img alt="devDependencies status" src="https://david-dm.org/Sanchez3/generator-h5package/dev-status.svg"/></a>
        <a href="https://www.npmjs.com/package/generator-h5package"><img alt="Downloads" src="https://img.shields.io/npm/dm/generator-h5package.svg"></a>
    </div>
</div>

前端项目工程化，使用`Webpack+ Native Js` 方式开发项目，之前写过一个[基于gulp的前端h5项目生成器](https://github.com/Sanchez3/generator-phaser-h5)



## WHY

​[Gulp](https://gulpjs.com/) 只是个基于流的构建工具，优化前端工作流程，比如监控、压缩js、css、编译Sass等等。

​[Webpack](https://webpack.js.org/) 则是个模块化管理的工具，能够完成Gulp所实现的绝大多数功能，也能通过`webpack stream`将Webpack整合到Gulp中。

>Note: Gulp部分功能目前是强于Webpack，例如雪碧图。
>
>不过Webpack在模块化方案更为优秀。随着项目庞大，项目会分工分块开发，所有script模块/脚本都需要引入到网页中，大量外部文件会使得网页承担多个HTTP请求带来的开销，影响HTML的响应速度。

​此外，Webpack与[browserify](https://github.com/substack/node-browserify)，[RequireJS](http://requirejs.org/)相比，吸取了大量已有方案的优点与教训，也解决了很多前端开发过程中已存在的痛点，如代码的拆分与异步加载、对非 JavaScript 资源的支持等。当然另外两个打包工具也有可圈可点之处。

> Note: RequireJS  的模块规范 AMD 并不兼容 JS 未来的模块化方案。

​目前webpack与越来越多的框架相容，也可以通过npm添加你所需要的前端框架以及插件 `eg. React, Angular, Vue AND JQuery, gsap, animate.css, howler, etc. `





## HOW 

### 安装

> Note:  Install [Node.js](https://nodejs.org/en/) First

- **Get  [Yeoman](http://yeoman.io/) and `generator-h5package` via [npm](https://www.npmjs.com/).**

  ```sh
  npm install --global yo                    # Install Yeoman if you don't have it yet.
  npm install --global generator-h5package   # Install generator-h5package
  ```




### 使用

1. **Create a directory to keep your project contents and go into it.**

   ```sh
   mkdir myproject
   cd myproject
   ```

2. **Create your new project.**

   ```sh
   yo h5package
   ```

3. **Launch it!**

   ```sh
   npm run start    #Launches the server and opens the page for live development.
   npm run build    #Prepare the h5 release for distribution.
   ```

The release in  `dist/`



### 文档结构

**开发时目录结构 npm run start**

```
    .
    ├── dist
    ├── src
    │   └── assets
    │       ├── img
    │       ├── media         #video audio resources
    │       ├── css
    │       │   ├── css.css
    │       │   └── sass.scss
    │       └── js
    │           ├── entities  
    │           └── main.js
    │   
    ├── node_modules
    ├── index.html
    ├── package.json
    └── webpack.config.js
    
```

**打包后目录结构 npm run build**

```
   dist
    ├── assets
    │   ├── img
    │   ├── media
    │   ├── css
    │   │   ├── css.min.css
    │   │   └── sass.min.css
    │   └── js
    │       └── main.min.js
    │
    └── index.html
```





## WHAT

### 版本

#### 1.x.x 正式发布

- **1.2.x Add `uglifyjs-webpack-plugin`**




### 参考

[gulp & webpack整合，鱼与熊掌我都要！](http://www.jianshu.com/p/9724c47b406c)

[gulp与webpack的区别](http://www.cnblogs.com/lovesong/p/6413546.html)

[前端开发利器 webpack](https://github.com/BuptStEve/blog/issues/4)

[webpack 与RequireJS、browserify](https://www.amazon.cn/dp/B01MF8VAAR/ref=cm_sw_r_we_dp_0.3TzbBSB0JB1?original=1)

[webpack 从入门到工程实践](http://gitbook.cn/m/mazi/article/5992553a6a71a268a9128d7b?readArticle=yes)



### License

[MIT License](https://github.com/Sanchez3/generator-h5package/blob/master/LICENSE)