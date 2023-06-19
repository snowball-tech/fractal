# Conventions

## Code style

Code style is enforced using Prettier, ESLint and all the configuration provided
by the packages in this repository.

See the [dedicated `TOOLING.md` documentation](./docs/TOOLING.md) for more
information.

### Special notes

#### On whitespacing and JSX components formatting

If you don't explicitly put the opening and closing markers on different lines,
Prettier will try to format it the wrong way since it considers your component
being an "inline" component (like spans), which results in something like that:

From

```html
<!-- prettier-ignore -->
<MyComponent class={style.component}>Content</MyComponent>
```

Into

```html
<!-- prettier-ignore -->
<MyComponent
  class={style.component}
  >Content</MyComponent
>
```

We see that we have weird break line characters, but this is the expected
behavior, and the reason can be found here:
<https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting>.

Until the point where <https://github.com/prettier/prettier/issues/5415> is
resolved, we can fix that by explicitly tell Prettier that our component is a
"block" component by adding a comment `<!-- display: block -->` but that would
dramatically overload the source code, so the temporary solution is to be
carefull and to explicitly add new lines within the component markers and not
let prettier auto correct the component formatting. To take the same example:

This

```html
<!-- prettier-ignore -->
<MyComponent class={style.component}>
  Content
</MyComponent>
```

Becomes

```html
<!-- prettier-ignore -->
<MyComponent
  class={style.component}
>
  Content
</MyComponent>
```

No more weird break line characters.

#### On quotes

We are using single quotes (`'`) in the codebase. Prettier and ESLint should
take care of this for you.

When you need to have single quotes inside of a string, you should use double
quotes (`"`)

Also note that
**you are not allowed to use backticks (`` ` ``) when the String Template doesn't hold any variable interpolations (`${myVar}`)**.

Don't worry though. If you mis-used a quote, your linter will warn you, will
auto-fix it for you on save and Prettier will auto-format everything for you
too.

## Typing

**Always prefer using TypeScript over JavaScript.**

This repository offers you all the toolings you need to use TypeScript in your
application or package, so please use it to enforce type checking and make your
code more reliable and self-documented.

Of course, you can configure/disable/extend the base TypeScript configuration at
the whole repository level
_(using the [`tsconfig.json`](./tsconfig.json) file at root)_ or in each of your
packages/applications
_(by adding a `tsconfig.json` file in the appropriate folder and extending the base configuration with `"extends": "<relative path to>/tsconfig.json"`)_.

When you want to use TypeScript in a package/application, you
**will have to add `typescript` as a development dependency**.  
Note however that `ts-node` is available as a global dependency if you need it.
All you have to do to use it is run `yarn run -T ts-node`.

### Special notes

#### On Booleans

To make the code easily redable and self-documentation, we need to ensure to use
the proper conventions and right types as much as possible.

For examples, on a code like this:

```js
if (isReady) {
  // Do something.
}
```

We definitely expect `isReady` to be `Boolean`. Of course, in JS it could be
anything, but it is misleading for everyone. So here are the rules:

- A variable name starting with `has` or `is` has to be a Boolean
- The output of a condition (`if`, `while`, ...) has to be a Boolean

A good practice is to use methods offered by Lodash to ensure some conditions.

❌

```js
if (array.length)
if (0)
if ('')

// Careful, this is true!
if ({})
```

✅

```js
import isEmpty from 'lodash/fp/isEmpty'

if (!isEmpty(array))
```

#### What's defined is not undefined

When resetting a value or putting a default value to something, always try to
use `null` instead of `undefined`.  
It does not make sense to specify an undefined value to a variable, right?

- `null`: has been declared & defined. Has simply no value.
- `undefined`: declared but not defined.

⚠️ When defining default parameters, `undefined` will use the default while `null`
does not.

Also, extensively use the optional chaining operator `?.` to avoid `undefined`
and the nullish coalescing operator `??` to avoid `null`.

### `FIXME`s and `TODO`s

We always want to keep track on what remains to do on the code base.

If you want to finish something later or clean part of the code, you just have
to add a `TODO` associated with a ticket number and a small description as done
in the example. If you want to highlight a potential code smell that needs to be
fixed ASAP, you just have to add a `FIXME` associated with a ticket number and a
small description as done in the example.

```js
/*
 * TODO [#1234]
 * Define a proper error state in case of failure inside
 */
```

## Components guidelines

### Self-responsibility

For a component-based architecture to be efficient, a component must have a
clear responsibility.

It should be only responsible for its own logic, style and templating.

### Readability

Readability makes a component easy to understand, to review and to re-use for
everyone.  
This will also greatly improve the self-documentation of your code.

Here are a few rules to ease the readability:

- If you have a big block of logic in a JSX block, try to extract it into a
  function and call it instead;
- If you have a static value to use in your component, add it as a constant so
  it's more explicit, adds context for the reviewers and is harder to remove it
  accidentally.
  You can also extract those constants in dedicated `constants.ts` files;
- The same applies for your TypeScript typings. Always create a dedicated type
  instead of inlining it in the code.
  If those types are used in multiple components, you can extract them in
  dedicated `types.ts` files;

### Avoid duplication

If a condition/computation is repeated more than once in your component, create
a function. This way, refactoring of the condition/computation will be easier.

### Attributes order

You should arrange HTML attributes in this order and follow the alphabetical
order:

2. `data-\*` attributes _(but try to avoid them as much as possible)_
3. class
4. standard attributes _(i.e., props/attributes without JSX binding between `{}`)_
5. bound attributes _(i.e., props with JSX bindings between `{}`)_
6. functions _(e.g. `onClick`, `onSubmit`, ...)_
