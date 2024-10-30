console.log('Script loaded');

document.getElementById('tg-button').addEventListener('click', function() {
    console.log('Button clicked');
    Telegram.WebApp.init();
    console.log('Telegram WebApp initialized');
    if (Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user) {
        const user = Telegram.WebApp.initDataUnsafe.user;
        console.log('User data:', user);
        alert(`Привет, ${user.first_name}!`);
    } else {
        console.log('Failed to get user data');
        Telegram.WebApp.showAlert("Не удалось получить информацию о пользователе.");
    }
});
