# 基于Webpack的前端h5项目生成器

<div align="left">
    <div>
        <a href="https://www.npmjs.com/package/generator-h5package"><img alt="npm version" src="https://img.shields.io/npm/v/generator-h5package.svg"></a>
        <a href="https://travis-ci.org/Sanchez3/generator-h5package"><img alt="Travis CI Build Status" src="https://travis-ci.org/Sanchez3/generator-h5package.svg?branch=master"></a>
        <a href="https://david-dm.org/Sanchez3/generator-h5package"><img alt="dependencies status" src="https://david-dm.org/Sanchez3/generator-h5package/status.svg"></a>
        <a href="https://david-dm.org/Sanchez3/generator-h5package?type=dev"><img alt="devDependencies status" src="https://david-dm.org/Sanchez3/generator-h5package/dev-status.svg"/></a>
        <a href="https://codecov.io/gh/Sanchez3/generator-h5package"><img src="https://codecov.io/gh/Sanchez3/generator-h5package/branch/master/graph/badge.svg" /></a>
        <a href="https://www.npmjs.com/package/generator-h5package"><img alt="Downloads" src="https://img.shields.io/npm/dm/generator-h5package.svg"></a>
    </div>
</div>

**Translations: [English](https://github.com/Sanchez3/generator-h5package/blob/master/README.md)**

> Note: Webpack 4 正式发布。约定优于配置！！！
>
> `generator-h5package v4.0.0` 支持 `webpack 4`
>
> `generator-h5package < v4.0.0` 支持 `webpack 3`

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

### 安装 / Install

***



> Note: Install [Node.js](https://nodejs.org/en/) First

- **Get  [Yeoman](http://yeoman.io/) and `generator-h5package` via [npm](https://www.npmjs.com/).**

  ```sh
  npm install --global yo                    # Install Yeoman if you don't have it yet.
  npm install --global generator-h5package   # Install generator-h5package
  ```




### 使用 / Usage

***



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
   npm run start    # Launches the server and opens the page for live development.
   npm run build    # Prepare the h5 release for distribution.
   ```

The release in  `dist/`



### 文档结构 / Directory Structure

***



**开发时目录结构 npm run start**

```sh
    .
    ├── dist
    ├── src
    │   └── assets
    │       ├── img
    │       ├── media         # video audio resources
    │       ├── css
    │       │   ├── css.css
    │       │   └── sass.scss
    │       └── js
    │           ├── entities  
    │           └── main.js
    │   
    ├── node_modules
    ├── index.html
    ├── LICENSE
    ├── README.md
    ├── package.json
    ├── webpack.common.js      # "common" configuration
    ├── webpack.dev.js         # "development"
    └── webpack.prod.js        # "production"
```

**打包后目录结构 npm run build**

```sh
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



### 插件 / Plugins

***



通过npm管理插件，devDependencies 里面的插件只用于开发环境，不用于生产环境，而 dependencies 是需要发布到生产环境的。

#### devDependencies:

*Note: npm install <packages> --save-dev*

- webpack-plugins

  - [sass-loader](https://www.npmjs.com/package/sass-loader)  loads a SASS/SCSS file and compiles it to CSS
  - [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) Extract text from a bundle, or bundles, into a separate file
  - [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin) optimize \ minimize CSS assets
  - [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) simplifies creation of HTML files to serve your webpack bundles
  - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin), [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin), [commons-chunk-plugin](https://webpack.js.org/plugins/commons-chunk-plugin), [uglifyjs-webpack-plugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/), etc.

- [Babel](https://babeljs.io/) for the latest version of JavaScript through syntax transformers


#### dependencies:

*Note: npm install <packages>*

- [howler.js](https://howlerjs.com/) for audio
- [Gsap](https://greensock.com/gsap) for javascript animation
- [animate.css](https://daneden.github.io/animate.css/) for CSS animation style
- [ajax](https://github.com/fdaciuk/ajax)  for ajax
- ~~jQuery~~ [You-Dont-Need-jQuery](https://github.com/nefe/You-Dont-Need-jQuery) 

#### others:

*Note: Read Documentation For a Getting started guide, Usage , API docs, etc. check out or docs!*

- [slick](http://kenwheeler.github.io/slick/) for slider
- [Stats](https://github.com/mrdoob/stats.js) for JavaScript Performance Monitor

**Use the following ways Sometime:**

- Local In `webpack.common.js` Write entry vendor, Split your code into `vendor.js` and `main.js`:

  - 删除`CommonsChunkPlugin`，改为用 `optimization.splitChunks` 和 `optimization.runtimeChunk`

- Use `require(file)` or `import "module-name"` in `main.js`

- Cdn [jsDelivr](http://www.jsdelivr.com/), [cdnjs](https://cdnjs.com/), [bootcdn](http://www.bootcdn.cn/) 

  ​


### 生产环境构建 / Production

***

**webpack.common.js** (Don't repeat yourself - DRY)
”通用“配置
- `entry`
- `ouput`
- `module(babel-loader, css-loader, sass-loader, url-loader)`
- `plugins(CleanWebpackPlugin,HtmlWebpackPlugin)`

**webpack.dev.js** (development)

”开发“配置

- `devtool:source-map`  [more options](https://webpack.js.org/configuration/devtool/#development)
- `devServer`

**webpack.prod.js** (production)

”生产“配置

- `plugins(OptimizeCssAssetsPlugin, UglifyJsPlugin, etc.)`
- `devtool:none` Omit the `devtool` option [more options](https://webpack.js.org/configuration/devtool/#production)


## WHAT

### 版本 / Versions

#### 1.x.x 正式发布 

- **1.2.x Add `uglifyjs-webpack-plugin`**
- **1.3.x Add `CommonsChunkPlugin`**
- **1.4.x Add `url-loader`**

#### 2.x.x 分离开发和生产环境 
- **2.0.x add `webpack-merge`**
- **2.1.x Add Add Doc Translations**
- **2.2.x Reset `devtool`**

#### 3.x.x 重构生成器，修改测试用例
- **3.1.x Output Using [chunkhash]**

#### 4.x.x 支持 `webpack 4.0`



### 参考

[gulp & webpack整合，鱼与熊掌我都要！](http://www.jianshu.com/p/9724c47b406c)

[gulp与webpack的区别](http://www.cnblogs.com/lovesong/p/6413546.html)

[前端开发利器 webpack](https://github.com/BuptStEve/blog/issues/4)

[webpack 与RequireJS、browserify](https://www.amazon.cn/dp/B01MF8VAAR/ref=cm_sw_r_we_dp_0.3TzbBSB0JB1?original=1)

[webpack 从入门到工程实践](http://gitbook.cn/m/mazi/article/5992553a6a71a268a9128d7b?readArticle=yes)



### License

[MIT License](https://github.com/Sanchez3/generator-h5package/blob/master/LICENSE)