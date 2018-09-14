/**
 * Check le type de l'argument
 * 
 * @param {*} arg 
 * @param {string} type 
 * 
 * @return {boolean}
 */
function type_check_v1(arg, type)
{
    if (!arg || !type) {
        return false;
    }

    if (typeof(arg) == type) {
        return true;
    }

    return false;
}

/**
 * Check le type de l'argument
 * 
 * @param {*} arg 
 * @param {object} conf 
 * 
 * @return {boolean}
 */
function type_check_v2(arg, conf)
{
    if (!arg || !conf || typeof(conf) !== 'object') {
        return false;
    }

    if (conf['type'] && typeof(arg) !== conf['type']) {
        return false;
    }

    if (conf['value'] && arg !== conf['value']) {
        return false;
    }

    if (conf['enum']) {
        for (let i = 0; i < conf['enum'].length; i++) {
            if (arg == conf['enum'][i]) {
                return true;
            }
        }

        return false;
    }

    return true;
}

/**
 * Check le type de l'argument / des arguments
 * 
 * @param {*} arg 
 * @param {object} conf 
 * 
 * @return {boolean}
 */
function type_check_v3(arg, conf)
{
    if (!arg || !conf) {
        return false;
    }

    if (conf['type'] && typeof(arg) !== conf['type']) {
        return false;
    }

    for (let prop in arg) {
        if (!type_check_v2(arg[prop], conf['properties'][prop])) {
            return false;
        }
    }

    return true;
}

/**
 * Check le type de l'argument / des arguments
 * 
 * @param {*} arg 
 * @param {*} conf 
 * 
 * @return {string}
 */
function type_check(arg, conf)
{
    if (!arg || !conf) {
        return false;
    }

    if (typeof(arg) !== 'object' && typeof(conf) !== 'object') {
        let result = type_check_v1(arg, conf);

        return result;
    }

    if (typeof(arg) !== 'object' && typeof(conf) == 'object') {
        let result = type_check_v2(arg, conf);

        return result;
    }
}

let object = {"test": "hello"}
/*
console.log(type_check_v1(1, 'number'));
console.log(type_check_v1('test', 'string'));
console.log(type_check_v1(object, 'object'));
console.log(type_check_v1(object, 'string'));
console.log(type_check_v1(null, 'number'));

console.log(type_check_v2(1, {type: 'number'}));
console.log(type_check_v2(3, {type: 'number', value: 3}));
console.log(type_check_v2(9, {type: 'number', value: 3}));
console.log(type_check_v2('bar', {type: 'string', value: 'foo'}));
console.log(type_check_v2(9, {enum: ['foo', 'bar', 9]}));
console.log(type_check_v2(9, {type: 'number', enum: ['foo', 'bar', 9]}));
console.log(type_check_v2(4, {type: 'number', value: 4, enum: ['foo', 'bar', 9]}));
console.log(type_check_v2(4, {type: 'number', value: 4, enum: ['foo', 'bar', 4]}));
console.log(type_check_v2(null, {enum: ['foo', 'bar', 9]}));
console.log(type_check_v2(4, null));
console.log(type_check_v2(object, {type: 'number', value: 4, enum: ['foo', 'bar', 9]}));
console.log(type_check_v2(4, 'zboub'));

let prop1 = {
    'prop1': 1
}
let conf1 = {
    type: 'object', 
    properties: {
        prop1: {
            type: 'number'
        }
    }
}
console.log(type_check_v3(prop1, conf1));
*/

console.log(type_check(1, {type: 'number'}));