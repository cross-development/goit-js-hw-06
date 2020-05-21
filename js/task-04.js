'use strict';

import { default as users } from './users.js';

// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
// 	const inactiveUsers = users.filter(user => !user.isActive);
// 	return inactiveUsers;
// };

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log(users);
