const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');

	const db = client.db('TodoApp');

	// db.collection('Users').deleteMany({name: 'Nova'}).then((result) => {
	//     console.log(result);
	// });

	// db.collection('TodoApp').deleteOne({text: 'eat lunch'}).then((result) => {
	//     console.log(result);
	// });

	db.collection('Users').findOneAndDelete({_id: ObjectID('5b45cd0dbc26060fac02d73f'),}).then((result) => {
		console.log(result);
	});

	client.close();
});