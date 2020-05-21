'use strict';

import { default as users } from './users.js';

// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
// 	const usersWithFriend = users
// 		.filter(user => user.friends.includes(friendName))
// 		.map(user => user.name);
// 	return usersWithFriend;
// };

const getUsersWithFriend = (users, friendName) =>
	users.filter(user => user.friends.includes(friendName)).map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Sharron Pace')); // [ 'Moore Hensley', 'Sharlene Bush' ]
console.log(getUsersWithFriend(users, 'Naomi Buckner')); // [ 'Ross Vazquez']

console.log(users);
