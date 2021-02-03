const path = require('path')
const pkg = require('./package.json')

module.exports = {
    pkg,
    paths: {
        src: path.resolve(__dirname, 'src'),
        dist: path.resolve(__dirname, 'dist'),
        public: path.resolve(__dirname, 'public'),
    },
}
