const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logs/webhook.log');

exports.log = (message) => {
    const logMessage = `[${new Date().toISOString()}] ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
    console.log(logMessage);
};
