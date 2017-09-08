var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();

app.engine('html', mustacheExpress());

app.set('view engine', 'html');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/app/dist'));

var port = process.env.PORT || 24548;

app.get('/', function(req, res) {
    res.render('index', {
        head: {
            title: 'page title'
        },
        content: {
            title: 'post title',
            description: 'description'
        }
    });
});

app.listen(port);
