const { aliasWebpack, aliasJest } = require('react-app-alias')

const aliasMap = {
    "@": "src",
    "@components": "src/components",
    "@services": "src/services",
    "@hooks": "src/hooks",
    "@pages": "src/pages",
    "@rtk": "src/redux"
}

const options = {
    alias: aliasMap
}

module.exports = aliasWebpack(options)
module.exports.jest = aliasJest(options)