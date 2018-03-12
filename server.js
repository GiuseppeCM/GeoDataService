var Express = require('express');
var fs = require('fs');
var cors = require('cors')

//istanzio express
var app = Express();

app.use(cors());
app.use(Express.static('public'));

//prendo l'istanza del router da express'
var router = Express.Router();


router.get('/menu', function(req, res){
    fs.readFile('./data/menu.json',function(err, data){
        if(err) res.send('error');
        else {
            var jsonMenu = JSON.parse(data); 
            res.send(jsonMenu);
        }
    });
});


router.get('/parcheggi', function(req, res){
    fs.readFile('./data/parcheggi.json',function(err, data){
        if(err) res.send('error');
        else res.send(JSON.parse(data));
    });
});
        
router.get('/ztl', function(req, res){
    fs.readFile('./data/ztl.json',function(err, data){
        if(err) res.send('error');
        else res.send(JSON.parse(data));
    });

});

router.get('/incidenti', function(req, res){
    fs.readFile('./data/incidenti.json',function(err, data){
        if(err) res.send('error');
        else res.send(JSON.parse(data));
    });

});


//registro le rotte
app.use('/geodata', router);       

//metto in ascolto express
app.listen(5000, () => {
    console.log('Awaiting on port 5000');
});

