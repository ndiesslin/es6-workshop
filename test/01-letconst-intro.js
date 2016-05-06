import test from 'ava';

test('`var` can be re-bound and re-assigned', t => {
  // With `var`, a single name can be declared multiple times in a block.

  var a = 1;
  t.is(a, 1);

  a = 2;       // <-- Re-assignment of `a`
  t.is(a, 2);

  var a = 3;   // <-- Re-declaration of `a`
  t.is(a, 3);
});

test('`let` can be re-assigned, but not re-bound', t => {
  // With `let`, each name can only be declared once per block.

  let b = 1;
  t.is(b, 1);

  b = 2;      // <-- Re-assignment of `b`. Uncomment.
  t.is(b, 2);

  b = 3;  // <-- Re-declaration of `b`. Uncomment and fix.
  t.is(b, 3);
});

test('`const` can\'t be re-assigned or re-bound', t => {
  // `const` works like `let`, except you can't re-assign to it within a scope.
  //
  // Uncomment each of the lines below and convince yourself that things break.
  // Make the test pass by commenting out the last 4 lines.

  const c = 1;
  t.is(c, 1);

  //c = 2;        // <-- Re-assignment of `c`.
  //t.is(c, 2);

  // const c = 3;  // <-- Re-declaration of `c`.
  //t.is(c, 3);
});

test('`const` is totally constant', t => {
  // We can't replace a `const` binding, but we can still mutate its properties.

  const book = { title: "The Winds of Winter", author: "George Martin" };

  // Oops! We forgot GRRM's middle initials!
  // Try to change the book's author to "George R. R. Martin". Does it work?

  book.author = "George R. R. Martin";

  // Can we add a new property? Set "published" to "Fall 2016". Does it work?

  book.published = "Fall 2016";

  t.deepEqual(book, { title: "The Winds of Winter",
                      author: "George R. R. Martin",
                      published: "Fall 2016" });
});

// ============================================================================

// REVIEW:
// - You can't re-declare a `let` or `const` binding in a single scope.
// - You *can* assign a new value to a `let` binding, but not to a `const` one.
// - You can still add, remove, and manipulate properties on a `const` binding.
