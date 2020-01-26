# Node WebIDL

[![NPM Version][npm-image]][npm-url] [![Build Status][ci-image]][ci-url] [![NPM Dependencies][deps-image]][deps-url] ![Maintenance Status][maintain-image]

Bindings generator for Node Addons given a WebIDL document.

## Installation

```sh
$ npm install --global node-webidl
```

## Usage

Generate a Node Addon binding given a C header and annotated Web IDL.

```sh
$ webidl-bind [options] [files]
```

### Options

| | |
| -------------------------- | --- |
| `-V, --version`            | print the version number  |
| `-o, --out-file <path>`    | redirect generated output to a file |
| `-h, --help`               | print usage information |

### Binding to C

Given a C source implementation file, e.g. `add.h`:

```c
float addition(float x, float y) {
  return x + y;
}
```

Write a Web IDL interface describing how to interop with Node, e.g. `add.webidl`:

```webidl
[Bind="add.h"]
interface Add {
  [Bind="addition"]
  float add(float x, float y);
};
```

Generate bindings:

```sh
$ webidl-bind -o add.c add.webidl
```

## License

[BSD-3-Clause License](https://opensource.org/licenses/BSD-3-Clause)

Copyright &copy; 2020 Chance Snow. All rights reserved.

[npm-url]: https://npmjs.org/package/node-webidl
[npm-image]: https://badge.fury.io/js/node-webidl.svg
[ci-url]: https://github.com/chances/node-webidl/actions
[ci-image]: https://img.shields.io/github/workflow/status/chances/node-webidl/Node%20WebIDL%20CI/master?logo=github
[deps-url]: https://david-dm.org/chances/node-webidl
[deps-image]: https://img.shields.io/david/chances/node-webidl.svg
[deps-dev-url]: https://david-dm.org/chances/node-webidl#info=devDependencies
[deps-dev-image]: https://img.shields.io/david/dev/chances/node-webidl.svg
[maintain-image]: https://img.shields.io/maintenance/yes/2020.svg
