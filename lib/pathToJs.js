
function pathToJs(paths){
    return `export const API_URLS = ${JSON.stringify(paths, null, 4)};`
}

module.exports = { pathToJs };