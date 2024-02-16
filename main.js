'use strict';

{
    // Наименование товара
    const productName = prompt('Наименование товара');

    // Количество товара
    const productAmount = Number(prompt('Количество товара. Введите число.'));

    // Категория товара
    const productCategory = prompt('Категория товара');

    // Цена товара
    const productPrice = Number(prompt('Цена товара. Введите число.'));

    if (Number.isFinite(productAmount) && Number.isFinite(productPrice)) {
        console.log(`На складе ${productAmount} единиц товара "${productName}" из категории "${productCategory}" по цене ${productPrice} за единицу товара. Общая сумма ${productPrice * productAmount} руб.`);
    } else {
        console.log('Вы ввели некорректные данные');
    }
}