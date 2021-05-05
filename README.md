npx create-react-app .

cd 'my-app'

npm start

добавляем хаски, линтер и приттиер npm install --save-dev prettier husky
lint-staged

в корне проекта создаем файл .huskyrc и в нем: { "hooks": { "pre-commit":
"lint-staged" } }

в файле .lintstagedrc: { "src//_.{json,css,scss,md}": ["prettier --write"],
"src//_.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] }

в файле .prettierrc.json: { "printWidth": 80, "tabWidth": 2, "useTabs": false,
"semi": true, "singleQuote": true, "trailingComma": "all", "bracketSpacing":
true, "jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always"
}

Ссылки на документацию по интеграции плагинов в популярные редакторы.

Prettier editor integration ESLint editor integration Настройки VSCode Для
комфортной работы, после установки плагинов, нужно добавить несколько настроек
редактора для автосохранения и форматирования файлов.

{ "files.autoSave": "onFocusChange", "editor.formatOnSave": true,
"editor.codeActionsOnSave": { "source.fixAll.eslint": true } }

ABsolute import: create file "jsconfig.json" in file: { "compilerOptions": {
"baseUrl": "src" }, "include": ["src"] }

in file index.css: @import-normalize; /_ bring in normalize.css styles _/

or

use modern-normalize: in file index.js @import
'modern-normalize/modern-normalize.css';

sass(!!only fo mixins, pleceholders etc): npm install node-sass -save

DEPLOY

npm run build

in package.json add: "homepage":
"https://darya-ungvari.github.io/goit-react-hw-02-phonebook",

npm run build

npm install --save gh-pages

Add the following scripts in your package.json: "scripts": { "predeploy": "npm
run build", "deploy": "gh-pages -d build", }

npm run deploy

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
