// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 0;
const GET_MONEY = 200;
let limit_balance = 10000;
let max_limit = -1000;
let limit_message = 1000;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => setBalance(balance + GET_MONEY);
  const takeMoney = () => setBalance(balance - GET_MONEY);

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > limit_balance) {
      alert(`Ваш ліміт балансу: ${limit_balance}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < max_limit) {
      if (balance <= max_limit) {
        limit_message = limit_message + 1000;
      }
      alert(
        `Вітаємо! Ми підвищили Вам кредитний ліміт до ` +
          limit_message +
          ` грн.`
      );
      max_limit = max_limit - 1000;
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  // ця функція відкриває вікно в браузері з текстом
  const HelloWorld = () => alert("Hello world!");

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="Найкращий банк України" onClick={HelloWorld} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      <Balance balance={balance} />

      {/* Компонент меню з кнопками */}
      <Menu
        // ось сюди ми передаємо конфігурацію кнопок
        config={[
          {
            name: "Поповнити баланс",
            onClick: getMoney,
            img: "/icon/get.svg"
          },
          {
            name: "Зняти гроші",
            onClick: takeMoney,
            img: "/icon/another.svg"
          }
        ]}
      />
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      <Payment payment={[]} />
    </Page>
  );
}
