var li = [];
var wincells = [];
var ended = false;
var tbl = document.getElementById('tb');
function onpass(el) {
    if (ended || el.innerHTML != '&nbsp;') return;
    el.innerHTML = 'O';
    el.setAttribute('class', 'class_y');
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++) {
            if (li[i][j].innerHTML == 'O')
                if (checkwin('O', i, j)) return;


        }
    chooseans();
}
var tdes = document.getElementsByTagName('td');
for (var i = 0; i < 3; i++) {
    li[i] = [];
    for (var j = 0; j < 3; j++) {
        li[i].push(tdes[i * 3 + j]);
    }
}
for (var td of tdes) {
    td.setAttribute('onclick', 'onpass(this)');
    td.innerHTML = "&nbsp;";
}
function updstyle() {
    for (var td of tdes) {
        if (td.innerHTML == 'X') {
            td.setAttribute('class', 'class_x');
        } else {
            td.setAttribute('class', 'class_y');
        }
    }
}

//computer chooses X
var pvx = -1, pvy = -1;
function checkwin(player, pvx, pvy) {
    if (pvx != -1 && pvy != -1) {
        //  *
        //  *
        //  *
        if (li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy].innerHTML == player && li[(pvx + 1) % 3][pvy].innerHTML == player) {
            wincells = [
                li[(pvx + 1) % 3][pvy],
                li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy],
                li[pvx][pvy]
            ];
            win(player);
            return true;
        }
        if (li[(pvx + 1) % 3][pvy].innerHTML == player && li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy].innerHTML == player) {
            wincells = [
                li[(pvx + 1) % 3][pvy],
                li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy],
                li[pvx][pvy]
            ];


            win(player);
            return true;
        }


        // 
        // ***
        // 
        if (li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == player && li[pvx][(pvy + 1) % 3].innerHTML == player) {
            wincells = [
                li[pvx][(pvy + 1) % 3],
                li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3],
                li[pvx][pvy]
            ];

            win(player);
            return true;
        }
        if (li[pvx][(pvy + 1) % 3].innerHTML == player && li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == player) {
            wincells = [
                li[pvx][(pvy + 1) % 3],
                li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3],
                li[pvx][pvy]
            ];

            win(player);
            return true;
        }


        if (pvx == pvy || pvx != 1 && pvy != 1) {

            if (pvx + pvy == 2) {
                //   *
                //  *
                // *
                if (li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == player && li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3].innerHTML == player) {
                    wincells = [
                        li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3],
                        li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3],
                        li[pvx][pvy]
                    ];
                    win(player);
                    return true;
                }
                if (li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3].innerHTML == player && li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == player) {
                    wincells = [
                        li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3],
                        li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3],
                        li[pvx][pvy]
                    ];
                    win(player);
                    return true;
                }
            } else {

                // *
                //  *
                //   *
                if (li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == player && li[(pvx + 1) % 3][(pvy + 1) % 3].innerHTML == player) {
                    wincells = [
                        li[(pvx + 1) % 3][(pvy + 1) % 3],
                        li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3],
                        li[pvx][pvy]
                    ];
                    win(player);
                    return true;
                }
                if (li[(pvx + 1) % 3][(pvy + 1) % 3].innerHTML == player && li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3] == player) {
                    wincells = [
                        li[(pvx + 1) % 3][(pvy + 1) % 3],
                        li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3],
                        li[pvx][pvy]
                    ];
                    win(player);
                    return true;
                }
            }
        }

    }
    return false;

}
function chooseans() {
    if (pvx != -1 && pvy != -1) {
        //  *
        //  *
        //  *
        if (li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy].innerHTML == 'X' && li[(pvx + 1) % 3][pvy].innerHTML == '&nbsp;') {
            li[(pvx + 1) % 3][pvy].innerHTML = 'X';
            li[(pvx + 1) % 3][pvy].setAttribute('class', 'class_x');
            wincells = [
                li[(pvx + 1) % 3][pvy],
                li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy],
                li[pvx][pvy]
            ];
            win('X');
            return;
        }
        if (li[(pvx + 1) % 3][pvy].innerHTML == 'X' && li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy].innerHTML == '&nbsp;') {
            li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy].innerHTML = 'X';
            li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy].setAttribute('class', 'class_x');
            wincells = [
                li[(pvx + 1) % 3][pvy],
                li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy],
                li[pvx][pvy]
            ];
            win('X');

            return;
        }


        // 
        // ***
        // 
        if (li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == 'X' && li[pvx][(pvy + 1) % 3].innerHTML == '&nbsp;') {
            li[pvx][(pvy + 1) % 3].innerHTML = 'X';
            li[pvx][(pvy + 1) % 3].setAttribute('class', 'class_x');
            wincells = [
                li[pvx][(pvy + 1) % 3],
                li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3],
                li[pvx][pvy]
            ];

            win('X');
            return;
        }
        if (li[pvx][(pvy + 1) % 3].innerHTML == 'X' && li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == '&nbsp;') {
            li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML = 'X';
            li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3].setAttribute('class', 'class_x');
            wincells = [
                li[pvx][(pvy + 1) % 3],
                li[pvx][pvy == 0 ? 2 : (pvy - 1) % 3],
                li[pvx][pvy]
            ];

            win('X');
            return;
        }


        if (pvx == pvy || pvx != 1 && pvy != 1) {
            if (pvx + pvy == 2) {
                //   *
                //  *
                // *
                if (li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == 'X' && li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3].innerHTML == '&nbsp;') {
                    li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3].innerHTML = 'X';
                    li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3].setAttribute('class', 'class_x');
                    wincells = [
                        li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3],
                        li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3],
                        li[pvx][pvy]
                    ];

                    win('X');
                    return;
                }
                if (li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3].innerHTML == 'X' && li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == '&nbsp;') {
                    li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML = 'X';
                    li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].setAttribute('class', 'class_x');
                    wincells = [
                        li[pvx == 0 ? 2 : (pvx - 1) % 3][(pvy + 1) % 3],
                        li[(pvx + 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3],
                        li[pvx][pvy]
                    ];
                    win('X');
                    return;
                }
            } else {
                // *
                //  *
                //   *
                if (li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML == 'X' && li[(pvx + 1) % 3][(pvy + 1) % 3].innerHTML == '&nbsp;') {
                    li[(pvx + 1) % 3][(pvy + 1) % 3].innerHTML = 'X';
                    li[(pvx + 1) % 3][(pvy + 1) % 3].setAttribute('class', 'class_x');
                    wincells = [
                        li[(pvx + 1) % 3][(pvy + 1) % 3],
                        li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3],
                        li[pvx][pvy]
                    ];

                    win('X');
                    return;
                }
                if (li[(pvx + 1) % 3][(pvy + 1) % 3].innerHTML == 'X' && li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3] == '&nbsp;') {
                    li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].innerHTML = 'X';
                    li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3].setAttribute('class', 'class_x');
                    wincells = [
                        li[(pvx + 1) % 3][(pvy + 1) % 3],
                        li[pvx == 0 ? 2 : (pvx - 1) % 3][pvy == 0 ? 2 : (pvy - 1) % 3],
                        li[pvx][pvy]
                    ];
                    win('X');
                    return;
                }
            }
        }

    }
    var k = parseInt(Math.random() * tdes.length);
    var n = k;
    while (tdes[k].innerHTML != '&nbsp;') {
        k = (k + 1) % tdes.length;
        if (n == k) { ended = true; break; }
    }
    pvx = parseInt(k / 3); pvy = k % 3;
    tdes[k].innerHTML = 'X';
    tdes[k].setAttribute('class', 'class_x');
    if (ended) { draw(); }
}

function draw() {
    ended = true;
    document.getElementById('wl').style.display = 'block';
    for (wc of wincells) wc.style.borderRadius = '200px';

    var tryl = document.getElementById('tl');
    var el = document.getElementById('winner');
    tryl.style.bottom = '-20px'
    el.innerHTML = 'No';
    el.setAttribute('class', 'class_no');

}

function win(winner) {
    ended = true;
    document.getElementById('wl').style.display = 'block';
    for (wc of wincells) wc.style.borderRadius = '200px';

    var tryl = document.getElementById('tl');
    var el = document.getElementById('winner');
    tryl.style.bottom = '-20px'
    el.innerHTML = winner;
    el.setAttribute('class', winner == 'X' ? 'class_x' : 'class_y');

}

function tryagain() {
    ended = false;
    for (var td of tdes) td.innerHTML = '&nbsp;';
    for (wc of wincells) wc.style.borderRadius = '20px';
    wincells = [];
    pvy = pvx = -1;
    document.getElementById('wl').style.display = 'none';
    var tryl = document.getElementById('tl');
    tryl.style.bottom = '-120px';
}
