
function pathToJs(paths){
    return `API_URLS = ${JSON.stringify(paths, null, 4)};`
}

module.exports = { pathToJs };