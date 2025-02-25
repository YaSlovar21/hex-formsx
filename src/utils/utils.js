function  checkResponseIsOk(response) {
       
}

export function login(userName, password) {
    return fetch('https://api.hexie.ru/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username: userName,
        password: password
      }),
      headers: {
        // Добавляем необходимые заголовки
        "Authorization": "Bearer 234",
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log('Ошибка на этапе проверки response ok', response);
            return Promise.reject(`Ошибка: ${response.status}`);
        }
    })
}