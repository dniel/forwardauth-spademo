import {Environment, getEnvironment, getConfig} from "./config-utils";

describe("getEnvironment", () => {
  test.each`
    value                               | expectedResult
    ${"http://localhost:3000"}          | ${Environment.LOCAL}
    ${"https://spademo.dev.nordlab.io"}   | ${Environment.DEV}
    ${"https://spademo.test.nordlab.io"}  | ${Environment.TEST}
    ${"https://spademo.stage.nordlab.io"} | ${Environment.STAGING}
    ${"https://spademo.nordlab.io"}       | ${Environment.PROD}
  `("should return $expectedResult for $value", ({ expectedResult, value }) => {
    expect(getEnvironment(value)).toEqual(expectedResult);
  });
});

describe("getConfig", () => {
  test("should fetch config for local environment", () => {
    const config = getConfig("http://localhost:3000");

    expect(config.environment).toBe(Environment.LOCAL);
  });

  test("should fetch config for staging environment", () => {
    const config = getConfig("https://demo.stage.nordlab.io");

    expect(config.environment).toBe(Environment.STAGING);
  });

  test("should fetch config for test environment", () => {
    const config = getConfig("https://demo.test.nordlab.io");

    expect(config.environment).toBe(Environment.TEST);
  });

  test("should fetch config for dev environment", () => {
    const config = getConfig("https://demo.dev.nordlab.io");

    expect(config.environment).toBe(Environment.DEV);
  });

  test("should fetch config for prod environment", () => {
    const config = getConfig("https://demo.prod.nordlab.io");

    expect(config.environment).toBe(Environment.PROD);
  });
});
