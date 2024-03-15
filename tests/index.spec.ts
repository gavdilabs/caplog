import { LoggerFactory, translateLogLevel } from "../src/index";

test("Includes LoggerFactory class", () => {
  expect(LoggerFactory).toBeDefined();
});

test("LoggerFactory export includes createLogger method", () => {
  expect(LoggerFactory.createLogger).toBeDefined();
});

test("Includes translateLogLevel utility function", () => {
  expect(translateLogLevel).toBeDefined();
});
