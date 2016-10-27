# -op-cateran
op-red-line的前端代码

## Installation

> Based on `Cycle.js`、`draw2d.js` to develop.
> And use `webpack` to manage package and build application.

## Documentation

- [Use Installation](#use-installation)
- [Directory Structure](#directory-structure)
- [Resources](#resources)

### Use Installation

```command
// first to install dependencies library
npm install

// and then you can choose dev in server or build for app or test in server

// dev
npm run start

// build
// generated code will build into the `dist` folder
npm run build

// test
npm run test
```

### Directory Structure

Folder `script` is store the execution code in command line：

> The code for dev server is in the `start.js` file.

> The code for build application is in the `build.js` file.

> The code for unit test server is in the `test.js` file.

Folder `src` is store you write code:

> Folder `asserts` is store some static file.

> Folder `components` is store your component code.

> Folder `pages` is store your integration component code.

> Folder `utils` is store your tool code. such as plugin、driver ...

> File `app.js` Integrating the module code into an application.

> File `index.js` is the entry for your application. Usually to do mount the application and use of style.

> File `index.html` is the `html` build template.

> File `route.js` is the router for `pages`

Folder `test` is store your unit test.

### Resources
#[cyclejs](https://github.com/cyclejs)
#[es6-in-depth](https://ponyfoo.com/articles/tagged/es6-in-depth)
