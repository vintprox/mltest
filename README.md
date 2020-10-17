# mltest

Тестовое приложение для Mobile Loyalty. Пример приложения на React Native для аутентификации через простой API.

## Прежде всего

Проект запускается при помощи [**Expo**](https://expo.io/). Для проверки приложения не потребуются SDK платформ на компьютере: достаточно эмулятора или приложения "Expo" на самом мобильном устройстве.

- Нужны [Node.js и npm](https://nodejs.org/ru/) и [Git](https://git-scm.com/downloads).

- Установите Expo CLI:
  ```
  $ npm install --global expo-cli
  ```

- Установите клиент "Expo" на мобильное устройство; доступен вариант с эмулятором: [подробнее](https://docs.expo.io/get-started/installation/#2-expo-client-app-for-ios-and).

- Сделайте локальную копию репозитория:
  ```
  $ git clone git@github.com:vintprox/mltest.git
  ```

## Запуск

1. Перейдите внутрь проекта и запустите Expo CLI:
   ```
   $ cd mltest
   $ npm start
   ```

2. Через клиент "Expo" отсканируйте выведенный в консоль QR-код или откройте следующий URL: `exp://127.0.0.1:19000`.

## Сборка в производство

Для сборки независимого от Expo SDK приложения воспользуйтесь [соответствующей инструкцией](https://docs.expo.io/distribution/building-standalone-apps/).
