const { mongoose } = require('./../server/db/mongoose');
const { User } = require('./../server/models/user');

let id = '5b473ecb5c5407ac083b6691';

User.findById(id).then((user) => {
	if(!user){
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));