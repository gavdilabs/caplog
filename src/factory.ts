import { log, Service } from "@sap/cds";
import { Formatter } from "./types";
import { Logger as LoggerDefinition } from "./Logger";
import { Logger } from "cf-nodejs-logging-support";

/**
 * Static class containing the wrapping methods for creating a CAP Logging component.
 */
export default class LoggerFactory {
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
   * Creates a new logger targeting Cloud ALM standards.
   *
   * @public
   * @returns {Logger}
   */
  public static createCalmLogger(): Logger {
    return new Logger();
  }

  private static _determineLoggerName(
    relation: Service | string = "internal",
  ): string {
    if (relation instanceof Service) return relation.name;
    return relation;
  }
}
