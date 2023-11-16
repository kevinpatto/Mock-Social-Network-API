const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
	console.log('connected');
	// Delete the collections if they exist
	let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
	if (usersCheck.length) {
		await connection.dropCollection('users');
	}

	let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
	if (thoughtsCheck.length) {
		await connection.dropCollection('thoughts');
	}

	const users = [
		{
			username: 'johnsmith',
			email: 'johnsmith@gmail.com',
			thoughts: [],
		},
		{
			username: 'jacknicholson',
			email: 'jacknicholson@gmail.com',
			thoughts: [],
		},
		{
			username: 'wizard',
			email: 'growplants@yahoo.com',
			thoughts: [],
		},
		{
			username: 'bob',
			email: 'bob@bob.com',
			thoughts: [],
		},
	];

	await User.collection.insertMany(users);
	
	console.log('seeding complete');
	process.exit(0);
});
