const path = require('path')
const {paths} = require('./application.config.js')

module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'prettier'],
    ignorePatterns: [`${path.basename(paths.dist)}/`],
    env: {node: true},
    overrides: [
        {
            files: ['src/**/*.{js,jsx}'],
            extends: ['plugin:react/recommended'],
            env: {browser: true, commonjs: true, node: false},
            settings: {
                react: {version: 'detect'},
            },
            globals: {
                React: true,
                ReactDOM: true,
                useState: true,
                useEffect: true,
                useCallback: true,
                useContext: true,
                useReducer: true,
                useRef: true,
                useMemo: true,
                useImperativeHandler: true,
                useLayoutEffect: true,
                forwardRef: true,
                memo: true,
                createContext: true,
            },
            rules: {
                'react/react-in-jsx-scope': 'off',
                'react/prop-types': 'off',
            },
        },
    ],
}
