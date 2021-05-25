var arr = ['monitor_1.jpg', 'monitor_2.jpg', 'monitor_3.jpg'];
var i = 0;

function u(id) {
    var pic = document.getElementById(id);
    if (i == arr.length - 1) {
        i = 0;
    } else {
        i++;
    }
    pic.src = 'img/' + arr[i];
}

function b(id) {
    var pic = document.getElementById(id);
    if (i == 0) {
        i = 2;
    } else {
        i--;
    }
    pic.src = 'img/' + arr[i];
}