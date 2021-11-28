
Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

Array.prototype.reduce2 = function(callback, initialValue) {
    let i = 0; 
    if (arguments.length < 2) {
        i = 1;
        initialValue = this[0];
    }
    for (; i < this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this);
    }
    return initialValue;
}

Array.prototype.some2 = function(callback) {
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) {
                return true;
                break;
            }
        }
    }
    return output;
}

Array.prototype.every2 = function(callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if(!callback(this[index], index, this)) {
                output = false;
                break;
            }
        }
    }
    return output;
}
