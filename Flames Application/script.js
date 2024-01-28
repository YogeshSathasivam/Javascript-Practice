function calculateFLAMES() {
    let yourName = document.getElementById('yourName').value.toUpperCase();
    let partnerName = document.getElementById('partnerName').value.toUpperCase();

    let a = yourName.split("");
    let b = partnerName.split("");
    flame(a, b);
}

function clearFields() {
    document.getElementById('yourName').value = '';
    document.getElementById('partnerName').value = '';
    document.getElementById('result').innerText = '';
}

function flame(a, b) {
    let i, j, k, l = 1, n, m, sc = 0, tc, rc = 0, fc = 5;
    let c;
    let f = "flames";

    let q = a.join("");
    let w = b.join("");
    n = a.length;
    m = b.length;
    tc = n + m;

    for (i = 0; i < n; i++) {
        c = a[i];
        for (j = 0; j < m; j++) {
            if (c == b[j]) {
                a[i] = -1;
                b[j] = -1;
                sc = sc + 2;
                break;
            }
        }
    }

    rc = tc - sc;

    for (i = 0; ; i++) {
        if (l == rc) {
            for (k = i; k < f.length; k++) {
                f = f.substring(0, k) + f.substring(k + 1);
            }
            fc = fc - 1;
            i = i - 1;
            l = 0;
        }
        if (i == fc) {
            i = -1;
        }
        if (fc == 0) {
            break;
        }
        l++;
    }

    let resultContainer = document.getElementById('result');
    if (f[0] == 'e')
        resultContainer.innerText = q + " is ENEMY to " + w;
    else if (f[0] == 'f')
        resultContainer.innerText = q + " is FRIEND to " + w;
    else if (f[0] == 'm')
        resultContainer.innerText = q + " is going to MARRY " + w;
    else if (f[0] == 'l')
        resultContainer.innerText = q + " is in LOVE with " + w;
    else if (f[0] == 'a')
        resultContainer.innerText = q + " has more AFFECTION on " + w;
    else
        resultContainer.innerText = q + " and " + w + " are SISTERS/BROTHERS ";
}