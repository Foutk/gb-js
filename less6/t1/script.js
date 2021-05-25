function showImg(img) {
    var c = img.src.replace('small', 'big');
    console.log(c);


    var b = document.getElementById("big_img");
    b.src = c;

}

function imgErr() {
    alert('Картинки нету!');
}