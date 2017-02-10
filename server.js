const express = require('express');
const app = express();
var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => {
    res.render('index');
})
app.listen(port, () => {
    console.log('running')
})