
const { writeToLog } = require('./utils/loggerToFile');
const app = require('./application');
const logger = require('./utils/logger');
const PORT = 666;

app.listen(PORT, () => {
    logger.info(`Server is serving on http://localhost:${PORT}`);
    writeToLog(`Server is serving on http://localhost:${PORT}`);
});