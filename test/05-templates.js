import test from 'ava';

test('template literals are strings', t => {
  // Template literals use `` marks as quotes, and turn into regular strings.

  let a = "Hello, World";
  let b = 'Hello, World';
  let c = `Hello, World`; // <-- Template literal!

  // They're all strings
  t.is(typeof a, 'string');
  t.is(typeof b, 'string');
  t.is(typeof c, 'string');

  // They're all equal to each other
  t.true(a === b && b === c);
});

test('template literals have super powers', t => {
  let who = 'World';

  let a = "Hello, ${who}";
  let b = 'Hello, ${who}';
  let c = `Hello, ${who}`;

  // Single- and double-quoted strings work the same.
  t.true(a === b);

  // But template literals work differently...
  t.true(a !== c);

  // What is `a`? What did `c` turn into?
  t.is(a, 'Hello, ${who}'); // <-- Fill in the blank with single-quoted string
  t.is(c, 'Hello, World'); // <-- Fill in the blank with single-quoted string
});

test('template literals can span multiple lines', t => {
  // Unlike normal strings, template literals can run across several lines.
  // Try filling in the blank below, without using the `\n` escape character.
  let x = `Hello,
  world!`;

  t.is(x, 'Hello,\n  world!');
});

test('template literals can compute arbitrary values', t => {
  // You can even evaluate arbitrary JavaScript inside `${ blocks }`.

  let what = 'hello, world';

  let x = `I like shouting "${what.toUpperCase()}!"`;
  t.is(x, 'I like shouting "HELLO, WORLD!"');

  let a = 1;
  let b = 2;
  t.is(`${a} + ${b} = ${a + b}`, '1 + 2 = 3')
});

test('Exercise: Construct a complex string', t => {
  let conf= {
    name: 'MinneWebCon',
    year: '2016',
    keynotes: ['Denise Jacobs', 'Sara Wachter-Boettcher']
  }

  let x = `In ${conf.year}, ${conf.name} had ${conf.keynotes.length} keynotes.`;
  let y = `The speakers were: ${conf.keynotes[0]}, ${conf.keynotes[1]}.`;

  t.is(x, 'In 2016, MinneWebCon had 2 keynotes.');
  t.is(y, 'The speakers were: Denise Jacobs, Sara Wachter-Boettcher.')
});

// ============================================================================

// REVIEW:
// - Template literals are written with backticks (``) as quotes.
// - They evaluate arbitrary statements inside `${ blocks }`.
// - They can even span multiple lines.
