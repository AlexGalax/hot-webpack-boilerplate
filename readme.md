# Hot Webpack Boilerplate
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Boilerplate for webpack projects with hot-reload dev server.

## Installation
Clone this repo
```
git clone git@github.com:AlexGalax/hot-webpack-boilerplate.git
```
Install dependencies
```
npm install
```

## Usage

### Development server
```bash
npm run dev
```
Starts a webpack-dev-server with hot-reload functionality at `http://localhost:3000`. The Port can be changed in `server-dev.js`

### Production server
```bash
npm run start
```
Starts an express server with watcher functionality for small changes at `http://localhost:3000`. The Port can be changed in `server-prod.js`

### Production build
```bash
npm run build
```
Deploys the production build into the `dist` folder.

## Author
[Alexander Schornberg](https://www.alexgalax.com)

## License
This project is open source and available under the [MIT License](LICENSE).