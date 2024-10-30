document.getElementById('tg-button').addEventListener('click', function() {
    Telegram.WebApp.init();
    Telegram.WebApp.showAlert("Авторизация через Telegram!");

    // Получение информации о пользователе
    const user = Telegram.WebApp.initDataUnsafe.user;
    console.log(user);
    
    alert(`Привет, ${user.first_name}!`);
});
