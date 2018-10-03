Object.prototype.prop_access = function (prop) {
    if (!prop || typeof(prop) !== 'string') {
        return false;
    }

    /** @type {string} */
    let props = prop.split('.');

    /** @type {string} */
    let attr  = '';
    
    /** @type {boolean} */
    let first = true;

    for (let i = 0; i < props.length; i++) {
        if (first) {
            attr  = this[props[i]];
            first = false;
        } else {
            attr = attr[props[i]];
        }
    }

    if (attr == undefined) {
        return false;
    }

    return attr;
}

/**
 * Return property from path
 * 
 * @param {string} path 
 * @param {string} prop 
 * @param {object} object 
 * 
 * @return {boolean|string}
 */
function UndefinedPropertyError (path, prop, object)
{
    if (!prop || typeof(prop) !== 'string') {
        return false;
    }

    if (!path || typeof(path) !== 'string') {
        return false;
    }

    if (!object || typeof(object) !== 'object') {
        return false;
    }

    let available = [];

    for (let key in object) {
        if (key !== 'prop_access') {
            available.push(key);
        }
    } 

    let message = 'Property ' + prop 
        + ' not exists for the path ' + path 
        + ', expected one of : ' + available.toString();

    return message;
}

/**
 * Retrun property from path
 * 
 * @param {string} object 
 * @param {string} path
 * 
 * @return {string}
 * @throws {UndefinedPropertyError}
 */
function test(object, path)
{
    try {
        /** @type {string} */
        prop = object.prop_access(path);
        
        if (!prop) {
            /** @type {Array} */
            let props = path.split('.');

            throw new UndefinedPropertyError(path, props[ props.length - 1 ], object);
        }

        return prop;
    } catch (e) {
        if (e instanceof UndefinedPropertyError) {
            console.error('Exception caught');
        } else {
            JSON.stringify(e);
        }
    }
}

let prairie = {
    "animal": {
        "type": {
            "name": "test"
        }
    },
    "test": 1
}
console.log(prairie.prop_access('animal.type.name'));
console.log(prairie.prop_access('test'));

UndefinedPropertyError('animal.type.name', 'name', prairie);

console.log(test(prairie, 'animal.type.name'));
console.log(test(prairie, 'zboub'));