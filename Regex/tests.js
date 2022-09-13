"use strict";

describe("password", function () {
  it(
    "Password at least contains 10 characters " +
      "at least one uppercase letter, lowercase letter and a number",
    () => {
      assert.isTrue(isValidPassword("jTcx2Pl89s"));
    }
  );
});

describe("url", function () {
  it("tests url begins with 'http://' or 'https://'", () => {
    assert.isTrue(isValidUrl("https://www.google.com"));
  });
});
