
import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  isValidEmail,
  isRequired,
  hasMinLength,
} from "./validation.ts";

describe("Form validation", () => {
  it("accepts a valid email", () => {
    assert.equal(isValidEmail("abc@gmail.com"), true);
  });

  it("rejects an invalid email", () => {
    assert.equal(isValidEmail("abc"), false);
  });

  it("rejects an empty required field", () => {
    assert.equal(isRequired("   "), false);
  });

  it("accepts a non-empty required field", () => {
    assert.equal(isRequired("WorkSphere"), true);
  });

  it("checks minimum length", () => {
    assert.equal(hasMinLength("Task", 3), true);
    assert.equal(hasMinLength("Hi", 3), false);
  });
});
