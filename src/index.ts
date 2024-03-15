/**
 * -----------------------------------------------------
 * THIS IS THE NPM MODULE API DECLARATION FILE!
 * DO NOT IMPLEMENT LOGIC DIRECTLY IN THIS FILE!!!!!
 * -----------------------------------------------------
 */

import LoggerFactory from "./factory";
import { Log, Logger } from "./Logger";
import { Formatter, LogLevel } from "./types";
import { translateLogLevel } from "./utils";

export { LoggerFactory, Logger, Log, Formatter, translateLogLevel, LogLevel };
