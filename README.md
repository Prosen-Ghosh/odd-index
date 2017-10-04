# odd-index
Returns an array with items oddly indexed

![npm](https://img.shields.io/npm/v/odd-index.svg) ![license](https://img.shields.io/npm/l/odd-index.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/odd-index.svg) 

![nodei.co](https://nodei.co/npm/odd-index.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/odd-index.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/odd-index.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/odd-index.svg)

## Features


## Install

`npm install --save odd-index`


## Script Tag

#### For Development
```js
<script src=""></script>
```

#### For Production
```js
<script src=""></script>
```

## Usage

```js

const oddIndex = require('odd-index');

oddIndex([]);
//=> []

oddIndex([1]);
//=> []

oddIndex([1,2,3,4]);
//=> [ 2, 4 ]

oddIndex(["foo","bar","baz","bob"]);
//=> [ 'bar', 'bob' ]

oddIndex(["foo","bar","baz","bob",[1,2],[3,4]]);
//=> [ 'bar', 'bob', [ 3, 4 ] ]

oddIndex(["foo","bar","baz","bob",[1,2],{a : 10}]);
//=> [ 'bar', 'bob', { a: 10 } ]

oddIndex(["foo","bar","baz","bob",[1,2],{a : 10},100,function(){}]);
//=> [ 'bar', 'bob', { a: 10 }, [Function] ]

oddIndex(); // without parameter thid function will throw a type error
//=> TypeError: expect an array got undefined

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**