const { Router } = require('express');
const path = require('path');
const fs = require('fs');
const homeRouter = Router();
const { itemData  } = require('../../services');
homeRouter.get('/', (req, res) => { 
    let template = '';
    let indexReader = fs.createReadStream(path.join(__dirname,'..','..','..','public','views','index.html'), { encoding: 'utf8' });
    indexReader.on('data', (data) => {
        template += data;
    });
    indexReader.on('end', async() => {
        const items = await itemData.getItem();
        const list = items.map( e => `<li>[${e.date}] ${e.value}</li>`).join('\n');
        template = template.replace('{%list%}', list);
        res.send(template);
    } );
});

homeRouter.get('/index.html', (req, res) => { 
    res.redirect('/');
});

homeRouter.get('error', (req, res) => { 
    res.status(500).send('Unexpected error');
});

homeRouter.post('/', (req, res) => {
    let body = '';
    req.on('data', data => {
        body += data;
    })

    req.on('end', async () => {
        const item = body.replace('itemValue=', '');
        await itemData.setItem({
            value: item,
            date: new Date().toISOString()
        })
        res.redirect('/');
    })
});

module.exports = homeRouter;