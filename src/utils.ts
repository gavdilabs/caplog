import cds from "@sap/cds";

/**
 * Mapping of log level number value to human readable string version
 */
const _levels = ["SILENT", "ERROR", "WARN", "INFO", "DEBUG", "TRACE"];

/**
 * Translates the log level in the formatter function, which is given as a number,
 * to a human readable string variant.
 *
 * Potential values are:
 * 0 = 'SILENT'
 * 1 = 'ERROR'
 * 2 = 'WARN'
 * 3 = 'INFO'
 * 4 = 'DEBUG'
 * 5 = 'TRACE'
 *
 * @public
 * @param {number} logLevel
 * @returns string
 */
export function translateLogLevel(logLevel: number): string {
  switch (logLevel) {
    case 0:
      return _levels[logLevel];
    case 1:
      return _levels[logLevel];
    case 2:
      return _levels[logLevel];
    case 3:
      return _levels[logLevel];
    case 4:
      return _levels[logLevel];
    case 5:
      return _levels[logLevel];
    default:
      return _levels[3];
  }
}

export function legacyFormatter(id: string, level: number, args: any[]): any[] {
    return [`[${new Date().toISOString()}|::${translateLogLevel(level)}::|${
      cds.context?.tenant || "-"
    }|${cds.context?.id || "-"}|${id}] -`,
    ...args,]
}
