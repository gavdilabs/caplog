import { translateLogLevel } from "../src/index";

test("translateLogLevel should exist", () => {
  expect(translateLogLevel).toBeDefined();
});

test("translateLogLevel should return 'SILENT' when log level is 0", () => {
  const result = translateLogLevel(0);

  expect(result).toBeDefined();
  expect(result).toEqual("SILENT");
});

test("translateLogLevel should return 'ERROR' when log level is 1", () => {
  const result = translateLogLevel(1);

  expect(result).toBeDefined();
  expect(result).toEqual("ERROR");
});

test("translateLogLevel should return 'WARN' when log level is 2", () => {
  const result = translateLogLevel(2);

  expect(result).toBeDefined();
  expect(result).toEqual("WARN");
});

test("translateLogLevel should return 'INFO' when log level is 3", () => {
  const result = translateLogLevel(3);

  expect(result).toBeDefined();
  expect(result).toEqual("INFO");
});

test("translateLogLevel should return 'DEBUG' when log level is 4", () => {
  const result = translateLogLevel(4);

  expect(result).toBeDefined();
  expect(result).toEqual("DEBUG");
});

test("translateLogLevel should return 'TRACE' when log level is 5", () => {
  const result = translateLogLevel(5);

  expect(result).toBeDefined();
  expect(result).toEqual("TRACE");
});

test("translateLogLevel should return 'INFO' when log level is out of range", () => {
  const result = translateLogLevel(100);

  expect(result).toBeDefined();
  expect(result).toEqual("INFO");
});

test("translateLogLevel should return 'INFO' when log level is negative range", () => {
  const result = translateLogLevel(-100);

  expect(result).toBeDefined();
  expect(result).toEqual("INFO");
});
