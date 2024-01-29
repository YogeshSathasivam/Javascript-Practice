function calculateFLAMES() {
    let yourName = document.getElementById('yourName').value.toUpperCase();
    let partnerName = document.getElementById('partnerName').value.toUpperCase();

    let a = yourName.split("");
    let b = partnerName.split("");
    flame(a, b);
}

function flame(a, b) {
    let i, j, k, l = 1, yLength, pLength, sChar = 0, tChar, rChar = 0, lStop = 5;
    let c;
    let f = "flames";

    let yName = a.join("");
    let pName = b.join("");
    yLength = a.length;
    pLength = b.length;
    tChar = yLength + pLength;

    for (i = 0; i < yLength; i++) {
        c = a[i];
        for (j = 0; j < pLength; j++) {
            if (c == b[j]) {
                a[i] = -1;
                b[j] = -1;
                sChar = sChar + 2;
                break;
            }
        }
    }

    rChar = tChar - sChar;

    for (i = 0; ; i++) {
        if (l == rChar) {
            for (k = i; k < f.length; k++) {
                f = f.substring(0, k) + f.substring(k + 1);
            }
            lStop = lStop - 1;
            i = i - 1;
            l = 0;
        }
        if (i == lStop) {
            i = -1;
        }
        if (lStop == 0) {
            break;
        }
        l++;
    }

    let resultContainer = document.getElementById('result');
    if (f[0] == 'e')
        resultContainer.innerText = yName + " is ENEMY to " + pName;
    else if (f[0] == 'f')
        resultContainer.innerText = yName + " is FRIEND to " + pName;
    else if (f[0] == 'm')
        resultContainer.innerText = yName + " is going to MARRY " + pName;
    else if (f[0] == 'l')
        resultContainer.innerText = yName + " is in LOVE with " + pName;
    else if (f[0] == 'a')
        resultContainer.innerText = yName + " has more AFFECTION on " + pName;
    else
        resultContainer.innerText = yName + " and " + pName + " are SISTERS/BROTHERS ";
}

function clearFields() {
    document.getElementById('yourName').value = '';
    document.getElementById('partnerName').value = '';
    document.getElementById('result').innerText = '';
}