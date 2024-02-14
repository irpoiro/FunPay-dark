// Изменяем фон и цвет текста
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// Функция для замены картинки
function replaceImage() {
    document.querySelectorAll('img[src="/img/layout/logo-funpay.svg"]').forEach(img => {
        img.src = 'https://psv4.userapi.com/c909328/u258240911/docs/d9/bff745f5b4ed/FunPay__Birzha_Igrovykh_Tsennostey-2.png?extra=V22soIkqCJjDC2wH62ADk-Ng-1Al_T4BDzMvQyvcSR4sdB9Bq1LuCOuYg20-NXMHl1eiOzIXvj7D6LF_J8arkxZtopV9QihCeLSG127Pwqi5vLZ0puWEd6IR98fF9pwsSdxoRN5BXczrRpLC0f6ViwZCpUs'; // Заменяем src на URL вашей новой картинки
    });
}

// Вызываем функцию замены картинки
replaceImage();

