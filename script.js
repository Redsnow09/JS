// 1. Объявление функции multiply
//function sayHi() {
  // Тело функции
  //console.log("Hello, this is my first function!");
//}

// 2. Вызовы функции multiply
//sayHi(); // multiply function invocation
//sayHi(); // multiply function invocation
//sayHi(); // multiply function invocation



//function add(a, b, c) {
 // const result = a + b + c;
  //console.log("Addition result equals " + result);
//}

//add(15, 27, 10);
//add(10, 20, 30);
//add(5, 10, 15);




//function add(a, b, c) {
  // Change code below this line
//  return a + b + c;
  // Change code above this line
//}

//add(2, 5, 8); // 15

//console.log(add(15, 27, 10));
//console.log(add(10, 20, 30));
//console.log(add(5, 10, 15));




//function calculateTotalPrice(orderedQuantity, pricePerItem) {
  //let totalPrice = orderedQuantity * pricePerItem;
  //return totalPrice;
//}

//console.log(calculateTotalPrice(5, 100)); // 500
//console.log(calculateTotalPrice(8, 60)); // 480
//console.log(calculateTotalPrice(3, 400)); // 1200
//console.log(calculateTotalPrice(1, 3500)); // 3500
//console.log(calculateTotalPrice(12, 70)); // 840

//В этом коде функция calculateTotalPrice объявляет два параметра orderedQuantity и pricePerItem. Внутри функции создается переменная totalPrice, в которую записывается результат умножения orderedQuantity на pricePerItem. Затем функция возвращает значение переменной totalPrice.
//После объявления функции calculateTotalPrice, она вызывается с разными аргументами с помощью console.log(). Результаты вызовов выводятся в консоль.




//function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//  let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//  let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//  return message;
//}

//console.log(makeOrderMessage(2, 100, 50));
//console.log(makeOrderMessage(4, 300, 100));
//console.log(makeOrderMessage(10, 70, 200));

//В этом коде функция makeOrderMessage объявляет три параметра orderedQuantity, pricePerDroid и deliveryFee. 
//Внутри функции вычисляется общая стоимость заказа, умножая количество дроидов на цену одного дроида и добавляя стоимость доставки.
// Затем создается переменная message, в которую записывается сообщение о заказе, используя синтаксис шаблонных строк.

//После объявления функции makeOrderMessage, она вызывается с разными аргументами с помощью console.log(). 
//Результаты вызовов выводятся в консоль в ожидаемом формате сообщения о заказе.



//function isValidPassword(password) {
//  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
//  const isMatch = password ===  SAVED_PASSWORD;
//
  // Change code above this line
//  return isMatch;
//}

//console.log(isValidPassword("mangodab3st"));
//console.log(isValidPassword("kiwirul3z"));
//console.log(isValidPassword("jqueryismyjam"));

//В данном коде переменная SAVED_PASSWORD содержит сохраненный пароль 'jqueryismyjam'.
// В строке const isMatch = password === SAVED_PASSWORD;
//  происходит сравнение переданного пароля password со значением SAVED_PASSWORD. 
//  Если они совпадают, то переменная isMatch устанавливается в true, в противном случае - в false.
//   Затем функция возвращает значение isMatch.
//При вызове функции с разными паролями выводятся соответствующие
// результаты: false для неправильных паролей и true для правильного пароля 'jqueryismyjam'.


//function checkAge(age) {

 // let message;
 // if (age >= 18) { // Change this line
 //   message = 'You are an adult';
 // } else {
 //   message = 'You are a minor';
 // }

//  return message;
//}

//console.log(checkAge(20));
//console.log(checkAge(8));
//console.log(checkAge(14));
//console.log(checkAge(38));




//function checkStorage(available, ordered) {
//  let message;

//  if (ordered > available) {
 //   message = "Not enough goods in stock!";
 // } else {
 //   message = "Order is processed, our manager will contact you.";
 // }

//  return message;
//}

//console.log(checkStorage(100, 50));
//console.log(checkStorage(100, 130));
//console.log(checkStorage(200, 20));
//console.log(checkStorage(200, 150));
//console.log(checkStorage(150, 180));

//Данная функция checkStorage принимает два аргумента: available (доступное количество товаров на складе)
// и ordered (количество товаров, указанное в заказе).

//Функция сравнивает значение ordered с available. Если ordered превышает available,
// то в переменную message записывается сообщение "Not enough goods in stock!" (Недостаточно товаров на складе!).
 // Если же ordered не превышает available, то в переменную message записывается сообщение
 // "Order is processed, our manager will contact you." (Заказ обрабатывается, наш менеджер свяжется с вами).

//Затем функция возвращает значение переменной message.

//В блоке console.log вызывается функция checkStorage с различными значениями available и ordered,
// и выводятся результаты в консоль.




//function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//  let totalPrice = pricePerDroid * orderedQuantity;
//  let message;

//  if (totalPrice > customerCredits) {
//    message = "Insufficient funds!";
//  } else {
 //   customerCredits -= totalPrice;
//    message = "You ordered " + orderedQuantity + " droids, you have " + customerCredits + " credits left";
//  }

//  return message;
//}

//console.log(makeTransaction(3000, 5, 23000));
//console.log(makeTransaction(1000, 3, 15000));
//console.log(makeTransaction(5000, 10, 8000));
//console.log(makeTransaction(2000, 8, 10000));
//console.log(makeTransaction(500, 10, 5000));

//Теперь функция makeTransaction выполняет следующие действия:

//Рассчитывает общую сумму заказа, умножая цену одного дроида (pricePerDroid)
// на количество заказанных дроидов (orderedQuantity) и сохраняет результат в переменную totalPrice.
//Проверяет, достаточно ли у клиента средств на счету (customerCredits) для оплаты заказа:
//Если общая сумма заказа (totalPrice) превышает количество средств на счету клиента,
// то в переменную message записывается строка "Insufficient funds!".
//В противном случае, сумма покупки (totalPrice) вычитается из средств на счету клиента (customerCredits),
// и в переменную message записывается сообщение с указанием количества заказанных дроидов и оставшегося количества средств на счету клиента.
//Функция возвращает значение переменной message.
//После выполнения кода в блоке console.log будут выведены ожидаемые результаты:



//function checkPassword(password) {
 // const ADMIN_PASSWORD = 'jqueryismyjam';
//  let message;

 // if (password === ADMIN_PASSWORD) {
 //   message = 'Welcome!';
 // } else if (password === null) {
//    message = 'Canceled by user!';
//  } else {
 //   message = 'Access denied, wrong password!';
 // }

//  return message;
//}

//console.log(checkPassword("mangohackzor"));
//console.log(checkPassword(null));
//console.log(checkPassword("polyhax"));
//console.log(checkPassword("jqueryismyjam"));




//function checkStorage(available, ordered) {
 // let message;

 // if (ordered === 0) {
 //   message = "There are no products in the order!";
//  } else if (ordered > available) {
 //   message = "Your order is too large, there are not enough items in stock!";
 // } else {
 //   message = "The order is accepted, our manager will contact you";
 // }

//  return message;
//}

//console.log(checkStorage(100, 50));
//console.log(checkStorage(100, 130));
//console.log(checkStorage(70, 0));
//console.log(checkStorage(200, 20));
//console.log(checkStorage(200, 250));
//console.log(checkStorage(150, 0));
//Изменения, внесенные в код:

//В условии первого оператора if добавлена проверка ordered === 0,
// чтобы определить, равно ли количество товаров в заказе нулю. Если да, 
// то в переменную message присваивается строка "There are no products in the order!".
//В условии второго оператора else if добавлена проверка ordered > available,
// чтобы определить, превышает ли количество товаров в заказе доступное количество на складе.
 // Если да, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
//В блоке console.log добавлены вызовы функции checkStorage с различными значениями available и ordered, 
//чтобы проверить различные случаи.
//Теперь код должен работать правильно и выводить ожидаемые результаты:





//function isNumberInRange(start, end, number) {
//  let isInRange = number >= start && number <= end;
//  return isInRange;
//}

//console.log(isNumberInRange(10, 30, 17));  // Output: true
//console.log(isNumberInRange(10, 30, 5));   // Output: false
//console.log(isNumberInRange(20, 50, 24));  // Output: true
//console.log(isNumberInRange(20, 50, 76));  // Output: false

//Теперь функция isNumberInRange выполняет следующие действия:

//Вычисляет выражение number >= start && number <= end, которое проверяет, 
//входит ли число number в числовой промежуток от start до end. Если число number больше или равно start и меньше или равно end,
// то результат выражения будет true. В противном случае, результат будет false.
//Возвращает значение переменной isInRange,
// которая содержит результат проверки вхождения числа number в числовой промежуток.
//После выполнения кода в блоке console.log будут выведены ожидаемые результаты:





function checkIfCanAccessContent(subType) {
  let canAccessContent = subType === "pro" || subType === "vip";
  return canAccessContent;
}

console.log(checkIfCanAccessContent("pro"));      // Output: true
console.log(checkIfCanAccessContent("starter"));  // Output: false
console.log(checkIfCanAccessContent("vip"));      // Output: true
console.log(checkIfCanAccessContent("free"));     // Output: false


//Теперь функция checkIfCanAccessContent выполняет следующие действия:
//Вычисляет выражение subType === "pro" || subType === "vip", которое проверяет,
 //соответствует ли значение параметра subType строкам "pro" или "vip".
 // Если значение subType равно "pro" или "vip", то результат выражения будет true.
//   В противном случае, результат будет false.
//Возвращает значение переменной canAccessContent, которая содержит результат проверки доступа к контенту.