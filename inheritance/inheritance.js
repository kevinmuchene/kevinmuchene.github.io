// Exercise 1:
String.prototype.filter = function (...bannedWords) {
  let newString = this;
  bannedWords.forEach((word) => {
    const index = newString.indexOf(word);
    if (index >= 0) {
      const regex = new RegExp(word + "\\s?");
      newString = newString.replace(regex, "");
    }
  });
  return newString;
};

console.log("This house is not nice!".filter("not"));

// Exercise 2 - BubbleSort
Array.prototype.bubbleSort = function () {
  let arrLength = this.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arrLength; i++) {
      if (this[i] > this[i + 1]) {
        let tmp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

// Exercise 3: Inheritance
const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

const Teacher = function () {};

Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

const me = new Teacher();
me.initialize("Mohammed", 78);
me.teach("WAP");
