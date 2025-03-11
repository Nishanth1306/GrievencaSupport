import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    // winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    
    new winston.transports.File({ filename: "logs/requests.log" }), 
    new winston.transports.File({ filename: "logs/errors.log", level: "error" }) 
  ],
});

export default logger;
