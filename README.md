# generator-h5package

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

**Translations: [简体中文](https://github.com/Sanchez3/generator-h5package/blob/master/README.zh-CN.md)**

> Note: `webpack 4.0` Release. Convention over Configuration!!! 
>
>  [`generator-h5package@3.x.x`](https://github.com/Sanchez3/generator-h5package/tree/for-webpack3) supports webpack v3.
>
>  [`generator-h5package@4.x.x`](https://github.com/Sanchez3/generator-h5package/) supports webpack v4.

`generator-h5package` is a [Yeoman](http://yeoman.io/) plugin that uses `Webpack+ Native Js` to make starting up Web projects simple, quick and easy, the same as [`generator-phaser-h5`](https://github.com/Sanchez3/generator-phaser-h5)

## WHY

[gulp](https://gulpjs.com/) is a toolkit for automating painful or time-consuming tasks in your development workflow, including watch, uglify Js, optimize Css, etc.

[webpack](https://webpack.js.org/) is a static module bundler for modern JavaScript applications, do pretty much the same job as *gulp*. Also, use `webpack stream` to run *webpack* as a stream to conveniently integrate with *gulp*.

In [browserify](https://github.com/substack/node-browserify), you use *gulp/grunt* and a long list of transforms and plugins to get the job done. *webpack* offers enough power out of the box that you typically don’t need `Grunt` or `Gulp` at all.



## HOW 

### Install

***



> Note: Install [Node.js](https://nodejs.org/en/) First

- **Get  [Yeoman](http://yeoman.io/) and `generator-h5package` via [npm](https://www.npmjs.com/).**

  ```sh
  npm install --global yo                    # Install Yeoman if you don't have it yet.
  npm install --global generator-h5package   # Install generator-h5package
  ```




### Usage

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



### Directory Structure

***

**In development, run `npm run start`:**

```sh
    .
    ├── dist
    ├── src
    │   ├── index.html
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
    ├── LICENSE
    ├── README.md
    ├── package.json
    ├── webpack.common.js      # "common" configuration
    ├── webpack.dev.js         # "development"
    └── webpack.prod.js        # "production"
```

**In production, run `npm run build`:**

```sh
   dist
    ├── assets
    │   ├── img
    │   ├── fonts
    │   ├── media
    │   ├── css
    │   │   └── main.[chunkhash].min.css
    │   └── js
    │       └── main.[chunkhash].min.js
    ├── favicon.ico
    └── index.html
```



### Plugins

***

[npm](https://www.npmjs.com/) manages plugins.

`devDependencies` are for the development-related scripts, e.g. unit testing, packaging scripts, documentation generation, etc.

`dependencies` are required for production use, and assumed required for dev as well.

#### devDependencies:

*Note: npm install <packages> --save-dev*

- webpack-plugins

  - [sass-loader](https://www.npmjs.com/package/sass-loader)  loads a SASS/SCSS file and compiles it to CSS.
  - [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin) extracts CSS into separate files.
  - [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin) optimize \ minimize CSS assets.
  - [uglifyjs-webpack-plugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/) uses [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony)[(`uglify-es`)](https://npmjs.com/package/uglify-es) to minify your JavaScript. 
  - [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) simplifies creation of HTML files to serve your webpack bundles.
  - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin), [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin), [HashedModuleIdsPlugin](https://webpack.js.org/plugins/hashed-module-ids-plugin/), ~~[commons-chunk-plugin](https://webpack.js.org/plugins/commons-chunk-plugin)~~, etc.

- [Babel](https://babeljs.io/) for the latest version of JavaScript through syntax transformers

- [Node-sass](https://www.npmjs.com/package/node-sass) provides binding for Node.js to [LibSass](https://github.com/sass/libsass)
  > Note:Install from mirror in China
  >
  > ```Sh
  > npm install -g mirror-config-china --registry=http://registry.npm.taobao.org
  > npm install node-sass
  > ```


#### dependencies:

*Note: npm install <packages>*

- [howler.js](https://howlerjs.com/) for audio
- [Gsap](https://greensock.com/gsap) for javascript animation
- [animate.css](https://daneden.github.io/animate.css/) for CSS animation style
- [ajax](https://github.com/fdaciuk/ajax)  for ajax
- ~~jQuery~~ [You-Dont-Need-jQuery](https://github.com/nefe/You-Dont-Need-jQuery) 

#### others:

*Note: Read Documentation For a Getting started guide, Usage , API docs, etc. check out or docs!*

- [slick](http://kenwheeler.github.io/slick/) or [swiper](http://idangero.us/swiper/) for slider
- [Stats](https://github.com/mrdoob/stats.js) for JavaScript Performance Monitor

**Use the following ways Sometime:**

- Local In `webpack.common.js` Split your code into `vendor.js` and `main.js`:

  - remove  `CommonsChunkPlugin`, add  `optimization.splitChunks`  and  `optimization.runtimeChunk`

- Use `require(file)` or `import "module-name"` in `main.js`

- Cdn [jsDelivr](http://www.jsdelivr.com/), [cdnjs](https://cdnjs.com/), [bootcdn](http://www.bootcdn.cn/) 



### Production

***

**webpack.common.js** (Don't repeat yourself - DRY)

"common" configuration

-  `entry`
-  `ouput`
-  `module(babel-loader, css-loader, sass-loader, MiniCssExtractPlugin.loader, url-loader, postcss-loader)`

**webpack.dev.js** (development)

"development" configuration

-  `devtool:eval`  [more options](https://webpack.js.org/configuration/devtool/#development)
-  `devServer`

**webpack.prod.js** (production)

"production" configuration

-  `optimization.minimizer(OptimizeCssAssetsPlugin, UglifyJsPlugin, etc.)` 
-  `devtool:source-map` Omit the  `devtool` option  [more options](https://webpack.js.org/configuration/devtool/#production)


## WHAT

### Versions

#### 1.x.x Inital Publish 

- **1.2.x Add `uglifyjs-webpack-plugin`**
- **1.3.x Add `CommonsChunkPlugin`**
- **1.4.x Add `url-loader`**

#### 2.x.x Separate webpack configurations for each environment. 

- **2.0.x Add `webpack-merge`**
- **2.1.x Add Doc Translations**
- **2.2.x Reset `devtool`**

#### 3.x.x Refactor Generator , Fix tests

- **3.1.x Output Using [chunkhash]**

#### 4.x.x Refactor Generator for `webpack 4`

- **4.0.x For `webpack 4`**
- **4.1.x Add `postcss-loader`** for `autoprefixer`


### Reference

[gulp & webpack整合，鱼与熊掌我都要！](http://www.jianshu.com/p/9724c47b406c)

[gulp与webpack的区别](http://www.cnblogs.com/lovesong/p/6413546.html)

[前端开发利器 webpack](https://github.com/BuptStEve/blog/issues/4)

[webpack 与RequireJS、browserify](https://www.amazon.cn/dp/B01MF8VAAR/ref=cm_sw_r_we_dp_0.3TzbBSB0JB1?original=1)

[webpack 从入门到工程实践](http://gitbook.cn/m/mazi/article/5992553a6a71a268a9128d7b?readArticle=yes)



### License

[MIT License](https://github.com/Sanchez3/generator-h5package/blob/master/LICENSE)