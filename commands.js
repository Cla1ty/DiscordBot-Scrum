import "dotenv/config";
import { InstallGlobalCommands } from "./utils.js";

export const DAILY_COMMAND = {
  name: "daily",
  description: "Siapa yang memimpin daily",
  type: 1,
};

const ALL_COMMANDS = [DAILY_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
