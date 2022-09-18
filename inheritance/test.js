describe("String Filter", () => {
  it(
    "Filter takes an array of banned words and returns " +
      "the string after removing all the banned words",
    () => {
      assert.equal(
        "This house is not nice!".filter("not"),
        "This house is nice!"
      );
    }
  );
});
describe("Array BubbleSort", () => {
  it("Bubble sorts any array using bubble sort algorithm", () => {
    expect([-2, 0, 1, 3, 4, 6]).to.eql([6, 4, 0, 3, -2, 1].bubbleSort());
  });
});
describe("Inheritance", () => {
  it("Teacher object derived from the Person class", () => {
    const me = new Teacher();
    me.initialize("Mohammed", 78);
    expect(me instanceof Person).to.be.true;
    expect("Mohammed, 78 years old.").to.eql(me.describe());
  });
});
