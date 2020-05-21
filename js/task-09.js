'use strict';

import { default as users } from './users.js';

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
// 	const namesSortedByFriendsCount = [...users].sort((userA, userB) => {
// 		return userA.friends.length - userB.friends.length;
// 	});
// 	return namesSortedByFriendsCount.map(user => user.name);
// };

const getNamesSortedByFriendsCount = users =>
	[...users]
		.sort((userA, userB) => userA.friends.length - userB.friends.length)
		.map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.log(users);
