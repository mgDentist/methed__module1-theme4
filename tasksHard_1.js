'use strict';

{
    const userSalary = Number(prompt('Введите свой доход в рублях (только цифры)'));

    if (
        !(Number.isFinite(userSalary))
    ) {
        console.log('Вы ввели некорректные данные');
    } else if (userSalary < 15000) {
        const tax13 = userSalary * 0.13;
        console.log(`Сумма вашего налога от вашей зарплаты в ${userSalary} составит ${tax13} руб.`);
    } else if (userSalary >= 15000 && userSalary < 50000) {
        const tax20 = userSalary * 0.2;
        console.log(`Сумма вашего налога от вашей зарплаты в ${userSalary} составит ${tax20} руб.`);
    } else if (userSalary >= 50000) {
        const tax30 = userSalary * 0.3;
        console.log(`Сумма вашего налога от вашей зарплаты в ${userSalary} составит ${tax30} руб.`);
    }
}