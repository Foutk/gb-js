var monitors = {
    monitor1: ['monitor_1.jpg', 'AOC', '15000 '],
    monitor2: ['monitor_2.jpg', 'AOC', '17000 '],
    monitor3: ['monitor_3.jpg', 'LG', '12000 ']
};

var divCont = document.querySelector('.container_mons');

for (let item in monitors) {
    var d = document.createElement('div');
    var img = document.createElement('img');
    var h3 = document.createElement('h3');
    var span = document.createElement('span');
    var buttun = document.createElement('button');

    d.className = 'container_mon';
    img.src = 'img/' + monitors[item][0];
    h3.innerHTML = monitors[item][1];
    span.innerHTML = monitors[item][2];
    buttun.innerHTML = 'Купить';
    d.innerHTML = img.outerHTML + h3.outerHTML + span.outerHTML;

    buttun.onclick = function (b) {
        var img = b.target.parentNode.querySelector('img').cloneNode(true);
        var price = b.target.parentNode.querySelector('span').cloneNode(true);
        var title = b.target.parentNode.querySelector('h3').cloneNode(true);
        var d2 = document.querySelector('.container_sum');
        var d3 = document.createElement('div');
        d3.className = 'container_mon';
        d3.innerHTML += img.outerHTML + title.outerHTML + price.outerHTML;
        d3.onclick = function () {
            d3.remove();
            total();
        };
        d2.prepend(d3);
        total();

    };
    d.append(buttun);
    divCont.append(d);
}

function total() {
    var d = document.querySelector('.container_sum h1');
    var price = document.querySelectorAll('.container_sum .container_mon span');
    var total = 0;
    for (var i = 0; i <= price.length - 1; i++) {
        total += +price[i].innerHTML;
    }
    d.innerHTML = 'Сумма:' + total.toFixed(2);
}

var cler = document.querySelector('.container_sum .delete');
cler.onclick = function total() {
    location.reload();
}