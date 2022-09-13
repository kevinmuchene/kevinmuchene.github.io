"use strict";

describe("sum", () => {
  it("sums all elements in a array and returns it", () => {
    assert.equal(10, sum([1, 2, 3, 4]));
  });
});

describe("multiply", () => {
  it("mulitplies all elements in a array and returns it", () => {
    assert.equal(24, multiply([1, 2, 3, 4]));
  });
});

describe("Reverse", () => {
  it("reverses a string and returns it", () => {
    assert.equal("kevin", reverse("nivek"));
  });
});

describe("FilterLongWords", () => {
  it("filterLongWords filters words that are longer than integer i and returns", () => {
    expect(["mimi", "mom"]).to.eql(filterLongWords(["mimi", "mom", "hi"], 2));
  });
});
