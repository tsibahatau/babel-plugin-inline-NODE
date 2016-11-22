# babel-plugin-inline-node

inline node-env value into js source

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-inline-node
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["inline-node"]
}
```

### Via CLI

```sh
$ babel --plugins inline-node script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["inline-node"]
});
```
