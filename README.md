# SidOfc/webpack-spa-boilerplate

This boilerplate is set up for building single page applications
with **webpack** and **react**. Styling is managed via **stylus**.
Stylesheets can be imported globally or using css-modules via the
`[component-name].module` convention.

# Project structure

```
root
|-- dist/
|-- src/
    |-- assets/circle.svg
    |-- style/main.styl
    |-- js/
        |-- components/application/
            |-- application.jsx
            |-- application.module.styl
            |-- index.js
        |-- main.js
|-- .eslintrc.js
|-- .gitignore
|-- application.config.js
|-- babel.config.js
|-- postcss.config.js
|-- webpack.common.js
|-- webpack.dev.js
|-- webpack.prod.js
|-- package.json
|-- package-lock.json
|-- README.md
```

The **src/** directory contains source files including styling and assets.
Each type of resource is categorized under its own directory:

- **assets/** - project assets
- **style/** - global and shared stylus files
- **js/** - js and jsx files that make up your react app

# Configuration

This project uses **eslint** and **prettier** to ensure files
are formatted and no development artifacts remain.

## Imports

Eslint and webpack are set up so that neither `React`, `ReactDOM`
need to be imported every time jsx is used. In addition to that
the following exports from react are also auto-included by webpack:

- `useState`
- `useEffect`
- `useCallback`
- `useContext`
- `useReducer`
- `useRef`
- `useMemo`
- `useImperativeHandler`
- `useLayoutEffect`
- `forwardRef`
- `memo`
- `createContext`

Some aliases are also defined to make it easier to import files
across the project:

- **@src** => `./src`
- **@assets** => `./src/assets`
- **@style** => `./src/style`
- **@js** => `./src/js`
