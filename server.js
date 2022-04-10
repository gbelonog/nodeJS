const fs = require('fs');
const { writeToLog } = require('./utils/loggerToFile');
const express = require('express');
const PORT = 666;
const app = express();
var multer  = require('multer');
var upload = multer();

app.listen(PORT, () => {
    console.log(`Server is serving on http://localhost:${PORT}`);
    writeToLog(`Server is serving on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    console.log('[Request] URL: ', req.url);
    writeToLog('[Request] URL: ', req.url);

    let todoReader = fs.createReadStream('./todoData.json');
    todoReader.on('data', function (chunk) {
        console.log('todoReader', chunk.toString());
        let todo = JSON.parse(chunk.toString());
        let indexReader = fs.createReadStream('./index.html');
        indexReader.on('data', function (chunk) {
            console.log('indexReader ', chunk.toString());
            let newIndex = chunk.toString().replace('point', `${Object.values(todo)}`);
            // let newIndex = chunk.toString()
            // console.log('--------------', newIndex.indexOf('point'))
            // let array = newIndex.split('');
            // array.splice(newIndex.indexOf('point')+5, 0, JSON.stringify(todo));
            // let t = JSON.stringify(array.join(''));
            // console.log("~~~~~~~~~~~~~~~~~~~~~~~", t)
            // let writer = fs.createWriteStream('./index.html', {encoding: 'utf8'});
            // writer.write(t);
            let writer = fs.createWriteStream('./index.html', {encoding: 'utf8'});
            writer.write(newIndex);
        })
    })
    fs.createReadStream('./index.html').pipe(res);
}); 

app.post('/form', upload.array(), function (req, res) {
    console.log("POST done");
    let todoReader = fs.createReadStream('./todoData.json');
    todoReader.on('data', function (chunk) {
        let todo = JSON.parse(chunk.toString());
        todo["todo"+2] = req.body.name;
        console.log('post todo', todo);
        t = JSON.stringify(todo);
        console.log('t', t)
        let writer = fs.createWriteStream('./todoData.json', {encoding: 'utf8'});
        writer.write(t);


        let todoReader = fs.createReadStream('./todoData.json');
        todoReader.on('data', function (chunk) {
        console.log('todoReader post', chunk.toString());
        let todo = JSON.parse(chunk.toString());
        let indexReader = fs.createReadStream('./index.html');
        indexReader.on('data', function (chunk) {
            console.log('indexReader post ', chunk.toString());
            let newIndex = chunk.toString().replace('point', `${Object.values(todo)}`);
            let writer = fs.createWriteStream('./index.html', {encoding: 'utf8'});
            writer.write(newIndex);
        })
    })
    fs.createReadStream('./index.html').pipe(res);


    });
});