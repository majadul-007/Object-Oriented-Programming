// Using Parameter For Recieve Argument

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

// Set the Parameter Value

const terrier = new Dog("puppy", "red");
console.log(terrier.name);
