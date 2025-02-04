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
myPromise
.then((message) => console.log(message))  // If resolved
.catch((error) => console.log(error));   // If rejected
```

## 2. Async/Await

Async/Await is a modern and cleaner way to handle promises in JavaScript.

- async makes a function return a promise.
- await pauses the execution until the promise is resolved.

```
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched Data!");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching...");
    let data = await fetchData(); // Waits for fetchData() to complete
    console.log(data);
}
getData();
```





