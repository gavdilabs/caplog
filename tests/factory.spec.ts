import { LoggerFactory } from "../src/index";

test("LoggerFactory exists", () => {
  expect(LoggerFactory).toBeDefined();
});

test("LoggerFactory contains createLogger method", () => {
  expect(LoggerFactory.createLogger).toBeDefined();
});

test("LoggerFactory can create a new logger with default name", () => {
  const logger = LoggerFactory.createLogger();

  expect(logger).toBeDefined();
});

test("LoggerFactory can create a new logger with defined name", () => {
  const logger = LoggerFactory.createLogger("custom");

  expect(logger).toBeDefined();
});

test("LoggerFactory can create a new logger with all required methods", () => {
  const logger = LoggerFactory.createLogger();

  expect(logger).toBeDefined();
  expect(logger.log).toBeDefined();

  expect(logger.trace).toBeDefined();
  expect(logger.debug).toBeDefined();
  expect(logger.info).toBeDefined();
  expect(logger.warn).toBeDefined();
  expect(logger.error).toBeDefined();

  expect(logger._trace).toBeDefined();
  expect(logger._debug).toBeDefined();
  expect(logger._info).toBeDefined();
  expect(logger._warn).toBeDefined();
  expect(logger._error).toBeDefined();
});
