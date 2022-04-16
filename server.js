
const { writeToLog } = require('./utils/loggerToFile');
const app = require('./application');
const PORT = 666;

app.listen(PORT, () => {
    console.log(`Server is serving on http://localhost:${PORT}`);
    writeToLog(`Server is serving on http://localhost:${PORT}`);
});