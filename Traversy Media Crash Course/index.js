import { Logger } from "./reference/logger.js";

const logger = new Logger();

logger.on("message", (data) => {
  console.log(`Called listener:`, data);
});

logger.log("Hello, World!");
