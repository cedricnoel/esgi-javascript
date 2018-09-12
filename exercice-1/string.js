/**
 * 1ere lettre en majuscule
 * 
 * @param {string} string
 * 
 * @returns {string}
 */
function ucfirst(string)
{
    if (!string || typeof(string) !== 'string') {
        return false;
    }

    let result = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();

    return result;
}

/**
 * Texte en majuscule
 * 
 * @param {string} string
 * 
 * @returns {string} 
 */
function capitalize(string)
{
    if (!string || typeof(string) !== 'string') {
        return false;
    }

    let result = string.toUpperCase();

    return result;
}

/**
 * Première lettre de chaque mot en majuscule
 * 
 * @param {string} string
 *  
 * @returns {string}
 */
function camelCase(string)
{
    if (!string || typeof(string) != 'string') {
        return false;
    }

    let words = string.split(' ');
    let result;

    for (let i = 0; i < words.length; i++) {
        words[i] = ucfirst(words[i]);
    }
    result = words.join('');

    return result;
}

/**
 * Inverse chaque mot d'une phrase
 * 
 * @param {string} string
 *  
 * @returns {string}
 */
function verlan(string)
{
    if (!string || typeof(string) !== 'string') {
        return false;
    }

    let result = string.split('').reverse().join('');

    return result;
}

/**
 * Joint les mots pas des tirets
 * 
 * @param {string} string
 * 
 * @returns {string}
 */
function snake_case(string)
{
    if (!string || typeof(string) !== 'string') {
        return false;
    }

    let words  = string.split(' ');
    let result = words.join('_');

    return result;
}

/**
 * Accès à une propriété
 * 
 * @param {object} obj 
 * @param {string} prop 
 * 
 * @return {*}
 */
function prop_access(obj, prop)
{
    if (!obj || !prop || typeof(obj) !== 'object' || typeof(prop) !== 'string') {
        return false;
    }

    let props = prop.split('.');
    let attr  = '';
    let first = true;

    for (let i = 0; i < props.length; i++) {
        if (first) {
            attr  = obj[props[i]];
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
 * Cryptage
 * 
 * @param {string} a 
 * @param {string} b 
 * @param {string} string 
 * 
 * @return {string}
 */
function leet(a, b, string)
{
    if (!a || !b || !string) {
        return false;
    }

    if (typeof(a) !== 'string' || typeof(b) !== 'string' || typeof(string) !== 'string') {
        return false;
    }

    let words = string.split('');
    let result;

    for (let i = 0; i < words.length; i++) {
        if (words[i] == a) {
            words[i] = b
        }        
    }
    result = words.join('');

    return result;
}

/**
 * Inverse les mots d'une phrase
 * 
 * @param {string} string
 * 
 * @return {string}
 */
function yoda(string)
{
    if (!string || typeof(string) != 'string') {
        return false;
    }

    let result = string.split(' ').reverse().join(' ');

    return result;
}

/**
 * Chiffre de vigenere
 * 
 * @param {string} string 
 * @param {string} key 
 * 
 * @return {string}
 */
function vig(string, key)
{
    if (!string || typeof(string) != 'string' || !key || typeof(key) != 'string') {
        return false;
    }

    let table   = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let index   = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,'H':7,'I':8,'J':9,'K':10,'L':11,'M':12,'N':13,'O':14,'P':15,'Q':16,'R':17,'S':18,'T':19,'U':20,'V':21,'W':22,'X':23,'Y':24,'Z':25}

    if (key.length < string.length) {
        for (let i = 0; i < string.length; i++) {
            key = key + key[i]
        }
    }

    let letters = string.toUpperCase().split('');
    let keys    = key.toUpperCase().split('');
    
    let cipher  = [];

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] != ' ') {
            cipher[i] = table[ (index[letters[i]] + index[keys[i]]) % 26 ];
        }
    }

    return cipher.join('');
}

let object = {
    "test": "coucou"
};
let array = [1,2,3];

console.log(ucfirst('test'));
console.log(ucfirst(null));
console.log(ucfirst(object));
console.log(ucfirst(array));

console.log(capitalize('test'));
console.log(capitalize(null));
console.log(capitalize(object));
console.log(capitalize(array));

console.log(camelCase('test test test'));
console.log(camelCase(null));
console.log(camelCase(object));
console.log(camelCase(array));

console.log(verlan('wesh alors'));
console.log(verlan(null));
console.log(verlan(object));
console.log(verlan(array));

console.log(snake_case('test test Bou'));
console.log(snake_case(null));
console.log(snake_case(object));
console.log(snake_case(array));

console.log(leet('a', '4', 'anaconda'));
console.log(leet(null, '4', 'anaconda'));
console.log(leet('a', object, 'anaconda'));
console.log(leet('a', '4', array));

console.log(yoda('Hello World'));
console.log(yoda(null));
console.log(yoda(object));
console.log(yoda(array));

let prairie = {
    "animal": {
        "type": {
            "name": "test"
        }
    },
    "test": 1
}
console.log(prop_access(prairie, 'animal.type.name'));
console.log(prop_access(prairie, 'test'));
console.log(prop_access(null, 'test'));
console.log(prop_access(array, 'test'));

console.log(vig('ecouter test', 'EMUSIQU'));
console.log(vig(null, 'EMUSIQU'));
console.log(vig('ecouter', object));
console.log(vig(array, 'EMUSIQU'));