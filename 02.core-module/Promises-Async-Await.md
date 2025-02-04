# Promises and Async/Await

Promises and Async/Await are used to handle asynchronous operations effectively. They allow us to perform non-blocking operations, such as fetching data from an API, reading files, or executing database queries.

## 1. Promises

A Promise represents a value that may be available now, in the future, or never. It has three states:

- Pending → Initial state, not fulfilled or rejected.
- Fulfilled → The operation was completed successfully.
- Rejected → The operation failed.

  ```
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data!");
        }
    }, 2000);
});
```

```
myPromise
.then((message) => console.log(message))  // If resolved
.catch((error) => console.log(error));   // If rejected
```
