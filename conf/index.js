const _confDef = require('./dist/conf.js');

function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}

function mergeDeep(target, source) {
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isObject(source[key])) {
                if (!(key in target)) Object.assign(output, { [key]: source[key] });
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}


/**@type {_confDef} */
var mConf;
try {
    // @ts-ignore
    var _conf = require('./conf.js');

    let toMerge;
    if (_conf.default) {
        toMerge = _conf.default;
    } else {
        toMerge = _conf;
    }

    delete _confDef.default;

    mConf = mergeDeep(_confDef, toMerge);
} catch (ex) {
    mConf = _confDef;
}

module.exports = {
    conf: mConf
}
