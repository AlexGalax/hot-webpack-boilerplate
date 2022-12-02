# Hot Webpack Boilerplate
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Boilerplate for webpack projects with hot-reload dev server. Includes fonts, scss, js modules, html template and environment variables.

## Requirements
- node.js
- npm

## Installation
Clone this repo
```shell
$ git clone git@github.com:AlexGalax/hot-webpack-boilerplate.git
```
Install dependencies
```shell
$ npm install
```

## Usage

### Development server
```bash
$ npm run dev
```
Starts a webpack-dev-server with hot-reload functionality at `http://localhost:3001`. The Port can be changed in `.env`
A proxy is set on port `PORT_PROD`, so any controller requests will be redirected to that port. An express server ist running additionally, to serve those requests.

`hot=false` in entry points of `./server-dev.js` will cause a full page reload on file changes.

`hot=true` will only reload js modules in the background on file changes.

### Production mode
```bash
$ npm run build
```
Deploys the production build into the `dist` folder.

```bash
$ npm run start
```
Starts the express server.

```shell
$ npm run start > stdout.txt 2> stderr.txt &
```
Starts the express server and detaches the terminal.


## Author
[Alexander Schornberg](https://www.alexgalax.com)

## License
This project is open source and available under the [MIT License](LICENSE).