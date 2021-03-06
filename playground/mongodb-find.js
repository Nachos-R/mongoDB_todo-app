const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');

	const db = client.db('TodoApp');

	db.collection('Users').find({
		name: 'Nova'
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	client.close();
});