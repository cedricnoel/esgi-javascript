String.prototype.ucfirst = function () {
    let result = this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();

    return result;
};

String.prototype.capitalize = function () {
    let result = this.toUpperCase();

    return result;
}

String.prototype.camelCase = function () {
    let words = this.split(' ');
    let result;

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }
    result = words.join('');

    return result;
}

String.prototype.verlan = function () {
    let result = this.split('').reverse().join('');

    return result;
}

String.prototype.snake_case = function () {
    let result = this.split(' ').join('_');

    return result;
}

String.prototype.leet = function (a, b) {
    if (!a || !b || typeof(b) !== 'string' || typeof(a) !== 'string') {
        return false;
    }

    let words = this.split('');
    let result;

    for (let i = 0; i < words.length; i++) {
        if (words[i] == a) {
            words[i] = b
        }        
    }
    result = words.join('');

    return result;
}

String.prototype.yoda = function () {
    let result = this.split(' ').reverse().join(' ');

    return result;
}

String.prototype.vig = function (key) {
    if (!key || typeof(key) != 'string') {
        return false;
    }

    let table   = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let index   = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,'H':7,'I':8,'J':9,'K':10,'L':11,'M':12,'N':13,'O':14,'P':15,'Q':16,'R':17,'S':18,'T':19,'U':20,'V':21,'W':22,'X':23,'Y':24,'Z':25}

    if (key.length < this.length) {
        for (let i = 0; i < this.length; i++) {
            key = key + key[i]
        }
    }

    let letters = this.toUpperCase().split('');
    let keys    = key.toUpperCase().split('');
    
    let cipher  = [];

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] != ' ') {
            cipher[i] = table[ (index[letters[i]] + index[keys[i]]) % 26 ];
        }
    }

    return cipher.join('');
}

Object.prototype.prop_access = function (prop) {
    if (!prop || typeof(prop) !== 'string') {
        return false;
    }

    let props = prop.split('.');
    let attr  = '';
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

console.log('test'.ucfirst());
console.log('test'.capitalize());
console.log('test test'.camelCase());
console.log('verlan'.verlan());
console.log('snake case'.snake_case());
console.log('anaconda'.leet('a', '4'));
console.log('ecouter test'.vig('emusiqu'));

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