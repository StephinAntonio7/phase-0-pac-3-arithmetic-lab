function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  function makeInt(string) {
    // Parse the string into an integer using base 10
    const parsedInt = parseInt(string, 10);
  
    // Return the parsed integer
    return parsedInt;
  }
  function preserveDecimal(string) {
    // Parse the string into a floating-point number
    const parsedFloat = parseFloat(string);
  
    // Return the parsed float
    return parsedFloat;
  }
  function increment(n) {
    return n + 1;
  }
  function decrement(n) {
    return n - 1;
  }