# @gavdi/caplog - Easy CAP Logging Utility

> Current Version: 2.0.0
>
> **NOTE:** This version contains breaking changes from the previous 1.0.1 version!
>
> @gavdi/caplog no longer makes use of any external logging component to integrate with the CAP environment.
> This change has been made to ensure full compatability with telemetry offerings in the cloud environment.

> Maintainer: Simon Laursen - svl@gavdilabs.com

## How It Works

```@gavdi/caplog``` is a small and tiny logging package that provides a simple and clean logging output to allow for better readability on BTP.

In the new 2.0 version of the logging package, the package abstracts away the logging facade native within CAP and provides type declarations.

The logger is intended for providing concise and clear information to the developer concerning their service, and with the new version now also through open telemetry.

### Installation

To install the package, run the following command:

```bash
npm install --save @gavdi/caplog
```

Once NPM (or your package manager of choice) is done installing the dependency, you can then add a logger like so:

```typescript
import { LoggerFactory } from "@gavdi/caplog";

// Default logger
LoggerFactory.createLogger();

// Custom named logger
LoggerFactory.createLogger("custom");

// Service bound logger
LoggerFactory.createLogger(Service);
```

The format you'll receive on your logged messages will look as follows:

```txt
[2024-01-03T11:42:38.045Z |::TRACE::| <tenant-id> | <ctx-id> | <log-id> ] Your message will be here
[2024-01-03T11:42:38.045Z |::DEBUG::| <tenant-id> | <ctx-id> | <log-id> ] Your message will be here
[2024-01-03T11:42:38.045Z |::INFO ::| <tenant-id> | <ctx-id> | <log-id> ] Your message will be here
[2024-01-03T11:42:38.045Z |::WARN ::| <tenant-id> | <ctx-id> | <log-id> ] Your message will be here
[2024-01-03T11:42:38.045Z |::ERROR::| <tenant-id> | <ctx-id> | <log-id> ] Your message will be here
```

## Configuration

The logging component can be configured using the following:

1. In the service' environment, add the environment variable ```LOG_LEVEL``` and set the desired level at which the logger should operate. Options are:
    - ```TRACE``` - Outputs all possible loggings to the application log
    - ```DEBUG``` - Outputs debug level logs and above to the application log
    - ```INFO``` - Only outputs info logs and above to the application console
    - ```WARN``` - Only outputs warning logs and above to the application console
    - ```ERROR``` - Only outputs error logs to the application console
    - ```SILENT``` - No output to the application console, i.e. no visible trace of any internal logs
2. When creating the logger instance, a custom format can be setup.
   This format is specifically tied to the logger that you create at that point in time.
    - Example:
        ```typescript
        // Creating and formatting the new logger
        import { LoggerFactory } from "@gavdi/caplog";

        const logger = LoggerFactory.createInstance("custom-format", (id: string, level: number, ...args) => [
            `[${(new Date).toISOString()}]`,
            `[${level}]`,
            `[${id}]`,
            " -> ",
            ..args
        ]);

        logger.trace("Your message", "will be here");
        ```
        ```shell
        -- output
        [2024-01-03T11:42:38.045Z][5][<log-id>] -> Your message will be here
        ```
        Internally the log levels are translated from numbers  into text using a dictionary.
        This dictionary can be utilized through the utility function ```translateLogLevel(logLevel)```.

## API

To provide the safest and easiest logging utility out there, this neat little package only comes with the following API:

### LoggerFactory Methods

| Method              | Parameters             | Description                                                       |
|---------------------|----------------------- |-------------------------------------------------------------------|
| Logger.createLogger | relation = cds.Service or string | Creates new logger instance. Relation input is optional | 


### Logger Methods

| Method              | Parameters             | Description                                                       |
|---------------------|----------------------- |-------------------------------------------------------------------|
| Logger.trace | args = unlimited input of any type | Log trace level message |
| Logger.debug | args = unlimited input of any type | Log debug level message |
| Logger.info  | args = unlimited input of any type | Log info level message  | 
| Logger.warn  | args = unlimited input of any type | Log warn level message  | 
| Logger.error | args = unlimited input of any type | Log error level message  | 

----------------------------------------------------------------
(c) Copyright by Gavdi Labs 2024 - All Rights Reserved

