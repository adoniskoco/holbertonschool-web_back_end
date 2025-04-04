### 0. **Filename: `0-promise.js`**
**Task:** Return a Promise using the `getResponseFromAPI()` function.

- This task requires you to write a function that returns a Promise. The function should simulate making a request to an API and provide a response. You need to handle the asynchronous nature of the function by using Promises.

### 1. **Filename: `1-promise.js`**
**Task:** Return a promise based on a boolean parameter.

- In this task, you are to create a function that returns a Promise. The promise is resolved or rejected depending on whether the boolean argument passed to the function is true or false.

### 2. **Filename: `2-then.js`**
**Task:** Handle Promise resolution using the `.then()` method.

- In this file, you will use the `.then()` method to handle the resolution of a Promise. Your task is to chain a `.then()` method to the promise and manipulate the resolved value accordingly.

### 3. **Filename: `3-all.js`**
**Task:** Resolve multiple promises using `Promise.all()`.

- In this task, you will import two functions, `uploadPhoto` and `createUser` from `utils.js`. These functions return promises. You will use `Promise.all()` to resolve both promises and log the `firstName` and `lastName` to the console once both promises are settled.

### 4. **Filename: `4-user-promise.js`**
**Task:** Work with promises and user sign-up.

- This task involves handling promises in the context of user sign-up. You will write a function that uses a prototype to perform a user sign-up operation. This function should return a promise that resolves when the user data is successfully processed.

### 5. **Filename: `5-photo-reject.js`**
**Task:** Reject a promise with an error message.

- Write and export a function named `uploadPhoto` that takes a file name as an argument and returns a Promise that rejects with an error. The error should contain the message `"$fileName cannot be processed"`.

### 6. **Filename: `6-final-user.js`**
**Task:** Handle multiple promises and return results.

- Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`. Create a function named `handleProfileSignup` that accepts three arguments: `firstName`, `lastName`, and `fileName`. This function will invoke both `signUpUser` and `uploadPhoto`, then return an array with the results of both promises once they are all settled.

### 7. **Filename: `7-load_balancer.js`**
**Task:** Return the first resolved promise.

- Write and export a function named `loadBalancer` that accepts two promises, `chinaDownload` and `USDownload`. The function should return the value returned by the promise that resolves first.

### 8. **Filename: `8-try.js`**
**Task:** Handle division by zero.

- In this task, create a function named `divideFunction` that accepts a `numerator` and `denominator`. If the denominator is `0`, throw an error with the message "cannot divide by 0". Otherwise, return the result of dividing the `numerator` by the `denominator`.

### 9. **Filename: `9-try.js`**
**Task:** Handle errors and track function execution.

- Write a function named `guardrail` that accepts a function (`mathFunction`) as an argument. This function will execute `mathFunction` and append the result to an array named `queue`. If an error occurs during the execution of `mathFunction`, the error message should be appended to the `queue` instead. In every case, the message "Guardrail was processed" should be added to the queue.