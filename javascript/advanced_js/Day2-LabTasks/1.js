function numericalSequence(start, end, step) {
    // private properties
    var sequence = [];
  
    // private method to fill the sequence
    function fillSequence() {
      for (var i = start; i <= end; i += step) {
        sequence.push(i);
      }
    }
    fillSequence();
  
    // public getters and setters
    this.getSequence = function() {
      return sequence;
    }
  
    // public method to set a new sequence --- way1
    this.setSequence1 = function(newSequence) {
      step = newSequence[1] - newSequence[0];
      for (var i = 1; i < newSequence.length - 1; i++) {
        if (newSequence[i + 1] - newSequence[i] !== step) {
          step = sequence[1] - sequence[0];
          throw "Error: New sequence does not have a consistent step size.";
        }
      }
      sequence = newSequence;
    }

    // public method to set a new sequence --- way2
    this.setSequence2 = function(start, end, step) {
      sequence = [];
      for (var i = start; i <= end; i += step) {
        sequence.push(i);
      }
    }

    // public methods to modify the sequence
    this.appendValue = function(value) {
      if (sequence.includes(value)) {
        throw new Error("Error: Value already exists in the sequence.");
      }
      else if (value === sequence[sequence.length - 1] + step) {
        sequence.push(value);
      } else {
        throw new Error("Error: Value is not part of the same numerical sequence.");
      }
    }
  
    this.prependValue = function(value) {
      if (sequence.includes(value)) {
        throw new Error("Error: Value already exists in the sequence.");
      }
      else if (value === sequence[0] - step) {
        sequence.unshift(value);
      } else {
        throw new Error("Error: Value is not part of the same numerical sequence.");
      }
    }
  
    this.dequeueValue = function() {
      if (sequence.length > 0) {
        return sequence.shift();
      } else {
        throw new Error("Error: Sequence is empty.");
      }
    }
  
    this.popValue = function() {
      if (sequence.length > 0) {
        return sequence.pop();
      } else {
        throw new Error("Error: Sequence is empty.");
      }
    }
  
    // public property
    this.length = sequence.length;
  }
  

  // create a new sequence with start=1, end=9, step=2
var sequence = new numericalSequence(1, 9, 2);

// get the current sequence
console.log(sequence.getSequence()); // [1, 3, 5, 7, 9]

// set a new sequence using setSequence1
sequence.setSequence1([2, 4, 6, 8, 10]);
console.log(sequence.getSequence()); // [2, 4, 6, 8, 10]

// try to set a new sequence with inconsistent step size
// sequence.setSequence1([1, 5, 7, 10]); // should throw an error

// set a new sequence using setSequence2
sequence.setSequence2(0, 12, 2);
console.log(sequence.getSequence()); // [0, 2, 4, 6, 8, 10, 12]

// try to append a value that already exists in the sequence
// sequence.appendValue(8); // should throw an error

// try to append a value that is part of the same sequence
// sequence.appendValue(16); // should throw an error

// append a new value to the sequence
sequence.appendValue(14);
console.log(sequence.getSequence()); // [0, 2, 4, 6, 8, 10, 12, 14]

// try to prepend a value that already exists in the sequence
// sequence.prependValue(0); // should throw an error

// try to prepend a value that is part of the same sequence
// sequence.prependValue(-1); // should throw an error

// prepend a new value to the sequence
sequence.prependValue(-2);
console.log(sequence.getSequence()); // [-2, 0, 2, 4, 6, 8, 10, 12, 13]

// dequeue the first value in the sequence
console.log(sequence.dequeueValue()); // -2
console.log(sequence.getSequence()); // [0, 2, 4, 6, 8, 10, 12, 13]

// pop the last value in the sequence
console.log(sequence.popValue()); // 14
console.log(sequence.getSequence()); // [0, 2, 4, 6, 8, 10, 12]

// get the length of the sequence
console.log(sequence.length); // 7
