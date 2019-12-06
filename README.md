# rwa-faker

This is a simple npm package that generates massive amounts of realistic fake data in Rwanda native language (Ikinyarwanda)

[![Build Status](https://travis-ci.org/knowbee/rwa-faker.svg?branch=master)](https://travis-ci.org/knowbee/rwa-faker)
[![Maintainability](https://api.codeclimate.com/v1/badges/3f5c5282ff06934496dd/maintainability)](https://codeclimate.com/github/knowbee/rwa-faker/maintainability)
[![npm](https://img.shields.io/npm/dt/rwa-faker.svg)](https://www.npmjs.com/package/rwa-faker)
[![Dependency Status](https://david-dm.org/knowbee/rwa-faker.svg)](https://david-dm.org/knowbee/rwa-faker)
[![npm](https://img.shields.io/npm/v/rwa-faker.svg)](https://www.npmjs.com/package/rwa-faker)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

[![NPM](https://nodei.co/npm/rwa-faker.png)](https://nodei.co/npm/rwa-faker/)

## Installation

> npm install rwa-faker

> yarn add rwa-faker

## Usage

```js
const { rwafaker } = require("rwa-faker");

// Generate random first name
const fname = rwafaker.firstName(); // 'Bisamaza'

// Generate random email
const email = rwafaker.email(); // 'bisamaza_trev@gmail.com'
```

For all generators you need to use function call operator

## Embedded generators

### Single output

```js
// Person

rwafaker.firstName(); // 'Kampayana'
rwafaker.lastName(); // 'Schrom'
rwafaker.fullName(); // 'Kampayana Schrom'
rwafaker.email(); // 'kampayana_sch@ur.ac.rw'
```

### Multiple outputs (array) - max(100)

Above 100, a generator will return error

```js
// Person

rwafaker.firstName(2); // [ 'Semahe', 'Kayitesi' ]
rwafaker.lastName(2); // [ 'Casteneda', 'Haberl' ]
rwafaker.fullName(2); // [ 'Karani Laris', 'Uwizeye Drawbridge' ]
rwafaker.email(2); // [ 'kavuna.lari@rwandaonline.rw', 'gatesi_draw@rra.gov.rw' ]
```

## Contributing

- Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

# License

MIT License

Copyright (c) 2019 Igwaneza Bruce <knowbeeinc@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
