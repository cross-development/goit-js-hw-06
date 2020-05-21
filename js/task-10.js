'use strict';

import { default as users } from './users.js';

// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
	return users
		.reduce((allSkills, user) => {
			allSkills.push(...user.skills);

			return allSkills;
		}, [])
		.sort()
		.reduce((uniqueSkills, skill) => {
			if (!uniqueSkills.includes(skill)) {
				uniqueSkills.push(skill);
			}

			return uniqueSkills;
		}, []);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

console.log(users);
