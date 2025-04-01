import { log, Service } from "@sap/cds";
import { Formatter } from "./types";
import { Logger as LoggerDefinition } from "./Logger";
import CFLogging, { Framework, Logger } from "cf-nodejs-logging-support";

type LogLevel = "error" | "warn" | "info" | "verbose" | "debug" | "silly";

CFLogging.setFramework(Framework.Express);

/**
 * Static class containing the wrapping methods for creating a CAP Logging component.
 */
export default class LoggerFactory {
  private static calmLogger: Logger;

  /**
   * Creates a new logger connected to the CDS layer.
   *
   * @public
   * @param {Service | string | null} relation - optional
   * @param {Formatter} formatter - defaults to standard formatting
   * @returns {Logger}
   */
  public static createLogger(
    relation?: Service | string,
    formatter?: Formatter,
  ): LoggerDefinition {
    const logger = log(this._determineLoggerName(relation));

    if (formatter) {
      logger.setFormat(formatter);
    }

    return logger;
  }

  /**
   * Creates or fetches a logger targeting Cloud ALM standards.
   *
   * @public
   * @returns {Logger}
   */
  public static createCalmLogger(): Logger {
    if (!this.calmLogger) {
      this.calmLogger = new Logger();
      this.calmLogger.setLoggingLevel(this._determineLoggingLevel());
    }

    return this.calmLogger;
  }

  private static _determineLoggerName(
    relation: Service | string = "internal",
  ): string {
    if (relation instanceof Service) return relation.name;
    return relation;
  }

  private static _determineLoggingLevel(): LogLevel {
    const envCfg = process.env["CAPLOG_LEVEL"];
    return envCfg && envCfg !== "" ? (envCfg as LogLevel) : "info";
  }
}
