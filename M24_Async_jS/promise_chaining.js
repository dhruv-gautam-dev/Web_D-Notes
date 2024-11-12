// Promise chaining in JavaScript is a technique used to execute multiple asynchronous operations in sequence,
// where each operation starts only when the previous one completes. 
// This is achieved by returning a promise from a .then() handler and attaching another .then() to handle the subsequent operation. 
// This approach helps maintain readable and manageable code for operations that need to be executed one after another.

/**How Promise Chaining Works:
 *  When a .then() method is called on a promise, it returns a new promise.
 *  This returned promise can have its own .then() chained to it.
 *  Each .then() receives the result of the previous promise, allowing sequential data processing or actions.
 */
doSomething()
  .then(result => {
    console.log(result);
    return doSomethingElse(result); // Returns a new promise
  })
  .then(newResult => {
    console.log(newResult);
    return doAnotherThing(newResult); // Returns another promise
  })
  .then(finalResult => {
    console.log(finalResult);
  })
  .catch(error => {
    console.error('Error:', error); // Catches any error in the chain
  });

  /**Benefits of Promise Chaining:
   * Readability
   * Ensures that each operation waits for the previous one to complete before starting.
   * A single .catch() block can handle errors for the entire chain.
   */

  // Example:
  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data received:', data);
    return processData(data); // Assume this function returns a promise
  })
  .then(processedData => {
    console.log('Processed Data:', processedData);
    return saveData(processedData); // Assume this also returns a promise
  })
  .then(() => {
    console.log('Data saved successfully');
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
  // In this example, each .then() ensures that the next step is executed only after the previous one completes. This keeps the code structured and avoids nested function calls.