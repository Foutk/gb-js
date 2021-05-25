var answer;
var rightAnswers = 0;

for (var i = 0; i < questions.length; i++) {
    answer = +prompt('Вопрос ' + (i + 1) + ' ' + questions[i].v + '\n' + 'Ответы' + '\n' + questions[i].a1 + '\n' + questions[i].a2 + '\n' + questions[i].a3 + '\n' + questions[i].a4 + '\nВведите номер правильного ответа.\n\nДля выхода из игры введите -1');
    if (answer == -1) {
        break;
    }
    if (answer == questions[i].correctly) {
        alert('Поздровляю, это правильный ответ!');
        rightAnswers++;
    }
    else {
        alert('Вы ответили не верно!');
    }
}
alert('Вы ответили правильно ' + rightAnswers + ' из ' + questions.length);