'use strict';

import { default as users } from './users.js';

// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
// 	const usersWithGender = users.filter(user => user.gender === gender).map(user => user.name);
// 	return usersWithGender;
// };

const getUsersWithGender = (users, gender) =>
	users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log(users);
