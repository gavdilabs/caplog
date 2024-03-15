/**
 * Logs a message
 *
 * @param message - text to log
 * @param optionalParams - additional parameters, same as in `console.log(text, param1, ...)`
 */
export declare type Log = (message?: any, ...optionalParams: any[]) => void;

export declare class Logger {
  /**
   * Logs with 'trace' level
   */
  trace: Log;

  /**
   * Logs with 'debug' level
   */
  debug: Log;

  /**
   * Logs with 'info' level
   */
  info: Log;

  /**
   * Logs with 'warn' level
   */
  warn: Log;

  /**
   * Logs with 'error' level
   */
  error: Log;

  /**
   * Logs with default level
   */
  log: Log;

  /**
   * @returns whether 'trace' level is active
   */
  _trace: boolean;

  /**
   * @returns whether 'debug' level is active
   */
  _debug: boolean;

  /**
   * @returns whether 'info' level is active
   */
  _info: boolean;

  /**
   * @returns whether 'warn' level is active
   */
  _warn: boolean;

  /**
   * @returns whether 'error' level is active
   */
  _error: boolean;
}
