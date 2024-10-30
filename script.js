window.addEventListener('load', function() {
    console.log('Script loaded');
    
    // Telegram WebApp ready
    Telegram.WebApp.ready(function() {
        console.log('Telegram WebApp is ready');
    });

    // Проверка наличия кнопки перед добавлением обработчика
    const tgButton = document.getElementById('tg-button');
    if (tgButton) {
        tgButton.addEventListener('click', function() {
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
    } else {
        console.log('Button not found');
    }
});
