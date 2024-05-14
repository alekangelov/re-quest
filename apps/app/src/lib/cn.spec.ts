import cn from "./cn";
import { expect, test, describe } from "vitest";

describe("cn", () => {
  test("should return an object", () => {
    expect(cn("foo")).toEqual({ foo: true });
  });

  test("should return positive booleans if given objects", () => {
    expect(
      cn("bar", {
        foo: true,
        zix: false,
      })
    ).toEqual({ foo: true, bar: true });
  });
});
