class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.reversCalc = [initialValue];
  }

  add(number) {
    // your implementation
    number = '+' + number;
    this.reversCalc.push(number);
    return this;
  }

  subtract(number) {
    // your implementation
    number = '-' + number;
    this.reversCalc.push(number);
    return this;
  }

  multiply(number) {
    // your implementation
    number = '*' + number;
    this.reversCalc.push(number);
    return this;
  }

  devide(number) {
    // your implementation
    number = '/' + number;
    this.reversCalc.push(number);
    return this;
  }

  pow(number) {
    // your implementation
    let temp = this.reversCalc.pop();
    let mCount = 0;

    // number = /[+-/*]/g.test(temp.toString().charAt(0)) ? (temp.toString().charAt(0) + 'Math.pow(' + temp.toString().slice(1) + ', ' + number + ')') : ('Math.pow(' + temp + ', ' + number + ')');
    let changedPrev = /[+-/*]/g.test(temp.toString().charAt(0)) ? (temp.toString().charAt(0) + 'Math.pow(' + temp.toString().slice(1).replace(/[)]/g, '') + ', ') : ('Math.pow(' + temp.toString().replace(/[)]/g, '') + ', ');
    this.reversCalc.push(changedPrev);
    if (this.reversCalc.length >1 && this.reversCalc[this.reversCalc.length - 2].toString().replace(/[^M]/g, "").length != 0){
      this.reversCalc.forEach(function (v) {
        let count = v.toString().replace(/[^M]/g, "").length;
        if (count > 0) {
          mCount += count;
        }
        else {
          mCount = 0;
        }
      });
    } 
    else {
      mCount = 1;
    }
    this.reversCalc.push(number + ')'.repeat(mCount));
    return this;
  }
  valueOf() {
    let kolbasa = '';
    for (var i = this.reversCalc.length - 1; i >= 0; i--) {
      kolbasa = this.reversCalc[i] + kolbasa;
    }
    console.log(kolbasa);
    this.reversCalc.push(eval(kolbasa));
    return this.reversCalc.pop();
  }
}

module.exports = SmartCalculator;
