let dog = {
  name: "Spot",
  numLegs: 4,

// Using this keyword for accesing the numLegs value

   sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

console.log(dog.sayLegs());