function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1)
            symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 &&
            parseInt(bits[i - 1].value) == 1)
            symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0)
            symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 &&
            parseInt(bits[i - 1].value) == 0)
            symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getNRZL(bits) {
    var result = [];

    var prev = '▁';
    
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';

        if (parseInt(bits[i].value) == 1 && (prev == '▁')) {
            symbol = '∣▔▔';
            prev = '▔';
        }
        else if (parseInt(bits[i].value) == 1 && (prev == '▔'))
            symbol = '▔▔';
        else if (parseInt(bits[i].value) == 0 && (prev == '▔')) {
            symbol = '∣▁▁';
            prev = '▁';
        }
        else if (parseInt(bits[i].value) == 0 && (prev == '▁')) {
            symbol = '▁▁';
        }

        result.push(symbol);
    }

    return result;
}

function getNRZ(bits) {
    var result = [];

    var prev = '▁';
    for (var i = 0; i < bits.length; i++) {
        let symbol = '---';

        if (parseInt(bits[i].value) == 1) {
            if (prev == '▁') {
                symbol = '∣▔▔';
                prev = '▔';
            } else {
                symbol = '∣▁▁';
                prev = '▁';
            }
        } else {
            if (prev == '▁')
                symbol = '▁▁';
            else
                symbol = '▔▔';
        }

        result.push(symbol);
    }

    return result;
}

function getNRZS(bits) {
    var result = [];

    var prev = '▁';
    
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';

        if (parseInt(bits[i].value) == 0 && (prev == '▁')) {
            symbol = '∣▔▔';
            prev = '▔';
        }
        else if (parseInt(bits[i].value) == 1 && (prev == '▔'))
            symbol = '▔▔';
        else if (parseInt(bits[i].value) == 0 && (prev == '▔')) {
            symbol = '∣▁▁';
            prev = '▁';
        }
        else if (parseInt(bits[i].value) == 1 && (prev == '▁')) {
            symbol = '▁▁';
        }

        result.push(symbol);
    }

    return result;
}

function getRZ(bits) {
    var result = [];
    var prev = '▁';

    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) {
            symbol = '▁∣▔∣';
        } else {
            symbol = '▁▁';
        }
        result.push(symbol);
    }

    return result;
}
