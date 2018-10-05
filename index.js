// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// initialise express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// defining contacts array
const contacts = [
    {name: 'Jane Doe', phone: '01234567890'},
    {name: 'Jon Doe', phone: '01234567890'}

];

// root endpoint
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/pages/index.html'));
});
app.get('/contacts', (req, res) => res.send(contacts));
app.post('/contacts', (req, res) => {
    contacts.push(req.body);
    res.send();
});

// select the port in which the node.js app will run
const port = 5000;

// listen to the selected port
app.listen(port, () => console.log(`Server is running on port ${port}`));