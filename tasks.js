'use strict';

// {
//     const rain = Math.round(Math.random());

//     if (rain === 1) {
//         console.log('Пошёл дождь. Возьмите зонт!');
//     }

//     if (rain === 0) {
//         console.log('Дождя нет!');
//     }

//     //Максим сказал что предпочтительнее использовать отдельные блоки if, нежели if else.
// }

// {
//     const mathScores = Number(prompt('Введите кол-во баллов по математике:'));
//     const russianLanguageScores = Number(prompt('Введите кол-во баллов по русскому языку:'));
//     const computerScienceScores = Number(prompt('Введите кол-во баллов по информатике:'));

//     const sumOfScores = mathScores + russianLanguageScores + computerScienceScores;

//     if (
//         !(Number.isFinite(mathScores)
//             && Number.isFinite(russianLanguageScores)
//             && Number.isFinite(computerScienceScores))
//     ) {
//         console.log('Вы ввели некорректные данные')
//     }
//     else if (sumOfScores >= 265) {
//         console.log(`Поздравляю, вы поступили на бюджет! Ваш общий балл: ${sumOfScores}`);
//     } else {
//         console.log(`Вы не поступили на бюджет! Ваш общий балл: ${sumOfScores}`);
//     }
// }

{
    const moneyToRecieve = Number(prompt('Сколько денег вы желаете снять?'));

    const toGiveCash = moneyToRecieve / 100;

    if (
        !(Number.isFinite(moneyToRecieve))
    ) {
        console.log('Вы ввели некорректные данные');
    } else if (Number.isInteger(toGiveCash)) {
        console.log('Заберите деньги')
    } else {
        console.log('Извините, введите сумму кратную 100');
    }
}
