'use strict';

import { default as users } from './users.js';

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
// 	const usersWithEyeColor = users.filter(user => user.eyeColor === color);
// 	return usersWithEyeColor;
// };

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log(users);
