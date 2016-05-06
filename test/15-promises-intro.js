import test from 'ava';

test('Creating Promises with `Promise.resolve`', t => {
  // `Promise.resolve(x)` creates a Resolved Promise holding `x`

  let p = Promise.resolve(42); // <-- Create a Promise that passes the test
  return p.then(val => t.is(val, 42));
});

test('Creating Promises with `Promise.reject`', t => {
  // `Promise.reject(x)` creates a Resolved Promise with "reason" `x`.

  let x = 'boom'
  let p = Promise.reject(x); // <-- Create a Promise that passes the test
  return p.catch(reason => t.is(reason, 'boom'));
});

test('Creating Promises with `new Promise(fn)`', t => {
  // `new Promise` creates a new Pending Promise
  // Calling its `resolve` or `reject` callbacks has an effect similar to above.

  function slowPromise(x) {
    return new Promise((resolve, reject) => {
      // Your Code Here
      // Resolve the promise to `x` after 50 ms.
      setTimeout( function() {
        resolve(x)
      }, 50);
    });
  }

  let start = Date.now();

  return slowPromise(64).then(x => {
    t.is(x, 64);
    t.true(Date.now() - start >= 50);
  });
});

// ============================================================================

// REVIEW:
// - Promises are a new alternative to callbacks for asynchronous actions.
// - Promises act like containers for values.
// - Promises have three states: pending, resolved, and rejected.
//     - Promises that have resolved or rejected are said to have "settled".
// - Three constructors: `Promise.resolve`, `Promise.reject`, and `new Promise`.
