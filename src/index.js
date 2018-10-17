class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.num = initialValue + '';
  }

  add(number) {
    // your implementation
    this.num = `${this.num} + ${this.number}`;
    return this;
  }

  subtract(number) {
    // your implementation
    this.num = `${this.num} - ${this.number}`;
    return this;
  }

  multiply(number) {
    // your implementation
    this.num = `${this.num} * ${this.number}`;
    return this;
  }

  devide(number) {
    // your implementation
    this.num = `${this.num} / ${this.number}`;
    return this;
  }

  pow(number) {
    // your implementation
    this.num = `${this.num} ** ${this.number}`;
    return this;
  }

  toString() {
    return eval(this.num);
  }
}

module.exports = SmartCalculator;

