import fs from "fs";
import { Writable } from "stream";

// Define the interface for the log object
interface LogData {
  level: string;
  message: string;
}

// Custom Writable stream class for logging
class LogStream extends Writable {
  constructor(private logFilePath: string) {
    super({ objectMode: true });
  }

  _write(
    logData: LogData,
    encoding: BufferEncoding,
    callback: (error?: Error | null) => void
  ): void {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} [${logData.level}]: ${logData.message}\n`;

    // Write the log entry to the file
    fs.appendFile(this.logFilePath, logEntry, (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
        return callback(err);
      }
      callback();
    });
  }
}

// Instantiate the LogStream
// const logger = new LogStream("application.log");

function createLogStream(logFilePath: string) {
  return new Writable({
    objectMode: true,
    write(
      logData: LogData,
      encoding: BufferEncoding,
      callback: (error?: Error | null) => void
    ) {
      const timestamp = new Date().toISOString();
      const logEntry = `${timestamp} [${logData.level}]: ${logData.message}\n`;

      // Write the log entry to the file
      fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
          console.error("Error writing to log file:", err);
          return callback(err);
        }
        callback();
      });
    },
  });
}

const logger = createLogStream("application.log");
// Handle process shutdown and clean up resources
function handleShutdown() {
  logger.end();
  console.log("Process is shutting down. Closing log stream.");
}

// Setup signal handlers for graceful shutdown
process.on("SIGINT", handleShutdown);
process.on("SIGTERM", handleShutdown);
process.on("exit", handleShutdown);

// Error handling for the logger
logger.on("error", (error) => {
  console.error("Stream error:", error);
});

// Test the logging system
function testLoggingSystem() {
  logger.write({ level: "INFO", message: "This is an info message" });

  // Simulate an error
  logger.destroy(new Error("Simulated stream error"));

  // Simulate more logs after stream destruction to test error handling
  logger.write({ level: "INFO", message: "This log should not be written" });
}

// Run the test function
testLoggingSystem();
