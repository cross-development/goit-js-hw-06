'use strict';

import { default as users } from './users.js';

// Получить пользователя (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
// 	const userWithEmail = users.find(user => user.email === email);
// 	return userWithEmail;
// };

const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
