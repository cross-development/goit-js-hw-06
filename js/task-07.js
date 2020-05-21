'use strict';

import { default as users } from './users.js';

// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
// 	const totalBalance = users.reduce(
// 		(totalBalance, currentUser) => totalBalance + currentUser.balance,
// 		0,
// 	);

// 	return totalBalance;
// };

const calculateTotalBalance = users =>
	users.reduce((totalBalance, currentUser) => totalBalance + currentUser.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
