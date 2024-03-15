/**
 * Custom format function
 *
 * @param module - logger name
 * @param level - log level
 * @param args - additional arguments
 * @returns an array of arguments, which are passed to the logger (for example, `console.log()`)
 */
export type Formatter = (module: string, level: number, args: any[]) => any[];

/**
 * Logging levels enum
 */
export enum LogLevel {
  SILENT = 0,
  ERROR = 1,
  WARN = 2,
  INFO = 3,
  DEBUG = 4,
  TRACE = 5,
  SILLY = 5,
  VERBOSE = 5,
}
