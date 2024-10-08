let express = require('express');
let app = express();

const cuisineController = require('./controllers/cuisinesController');

let port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/indexMongo.html');
});

app.use('/api', cuisineController);

app.listen(port, () => {
    console.log('express server started');
    console.log('Server is running on port ' + port);
});