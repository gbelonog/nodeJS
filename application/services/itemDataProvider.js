const fs = require('fs');
const path = require('path');

class ItemDataProvider {
    constructor(){
        this.cash = null;
        this.dataFile = path.join(__dirname, '..', '..','./todoData.json');
    };
    async getItem(){
        console.log('getItem');
        if(this.cash){
            console.log('this.cash first', this.cash);
            return this.cash; 
        };
        if (!fs.accessSync(this.dataFile)){
            this.cash = [];
            return this.cash;
        }
        let todoReader = fs.createReadStream(this.dataFile, { encoding: 'utf8' });
        
        const data = await new Promise((res, rej) => {
            let result = '';
            todoReader.on('data', data => {
                result += data;
            });
            todoReader.on('end', () => { res(result) });
            todoReader.on('error', rej);
        });
        this.cash = JSON.parse(data);
        console.log('this.cash last ', this.cash);
        return this.cash;
    };
    
    async setItem(item){
        console.log('this.cash', this.cash)
        if (!this.cash){
            console.log('!this.cash');
            this.cash = await this.getItem();
        }
        this.cash.push(item);
        const file = fs.createWriteStream( this.dataFile, { encoding: 'utf8' });
        file.end(JSON.stringify(this.cash));
        return this.cash;
    };
}

const itemData = new ItemDataProvider();
module.exports = itemData;