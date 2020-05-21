'use strict';

import { default as users } from './users.js';

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
// 	const usersWithAge = users.filter(user => user.age >= min && user.age <= max);
// 	return usersWithAge;
// };

const getUsersWithAge = (users, min, max) =>
	users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log(users);
