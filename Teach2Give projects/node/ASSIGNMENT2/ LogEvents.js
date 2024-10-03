const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs').promises;
const fsSync = require('fs'); 
const path = require('path');

// Async function to log events
const LogEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    const logsDir = path.join(__dirname, 'Logs');
    if (!fsSync.existsSync(logsDir)) { 
      await fs.mkdir(logsDir);
    }

    const logFilePath = path.join(logsDir, 'eventLogs.txt');
    await fs.appendFile(logFilePath, logItem);
  } catch (err) {
    console.error('Error writing log:', err);
  }
};

module.exports = LogEvents;
