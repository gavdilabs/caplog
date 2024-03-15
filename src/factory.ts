import * as cds from "@sap/cds";
import { log, Service } from "@sap/cds";
import { Formatter } from "./types";
import { Logger } from "./Logger";
import { translateLogLevel } from "./utils";

/**
 * Static class containing the wrapping methods for creating a CAP Logging component.
 */
export default class LoggerFactory {
  private static _loggerFormat: Formatter = (id, level, ...args) => [
    `[${new Date().toISOString()}|::${translateLogLevel(level)}::|${
      cds.context?.tenant || "-"
    }|${cds.context?.id || "-"}|${id}] -`,
    ...args,
  ];

  /**
   * Creates a new logger connected to the CDS layer.
   *
   * @public
   * @param {Service | string | null} relation - optional
   * @param {Formatter} format - defaults to standard formatting
   * @returns {Logger}
   */
  public static createLogger(
    relation?: Service | string | null,
    format: Formatter = this._loggerFormat,
  ): Logger {
    const logger = log(this._determineLoggerName(relation));
    logger.setFormat(format);

    return logger;
  }

  private static _determineLoggerName(
    relation: Service | string = "internal",
  ): string {
    if (relation instanceof Service) return relation.name;
    return relation;
  }
}
