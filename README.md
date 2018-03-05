# node-feature

Node application with feature-based architecture.

## Technologies
* [Docker](https://www.docker.com)
* [Docker Compose](https://docs.docker.com/compose)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Yarn](https://yarnpkg.com)
* [Nodemon](http://nodemon.io)
* [Node](https://nodejs.org)
* [Express](http://expressjs.com)
* [Pug](https://pugjs.org)
* [Mongo](https://www.mongodb.com)
* [Mongoose](http://mongoosejs.com)
* [Babel](https://babeljs.io)
* [Eslint](https://eslint.org)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Sass](http://sass-lang.com)
* [Imagemin](https://github.com/imagemin/imagemin)


## Requirements

* [Docker](https://docs.docker.com/engine/installation)
* [Docker Compose](https://docs.docker.com/compose/install)


## Structure

```
|-- node-feature
|   |-- bin
|   |   |-- www
|   |-- public <-- Compiled static files from assets
|   |   |-- images
|   |   |-- javascripts
|   |   |-- stylesheets
|   |-- src
|   |   |-- assets
|   |   |   |-- images
|   |   |   |-- javascripts
|   |   |   |-- scss
|   |   |-- config  <-- Configuration files
|   |   |   |-- database.js
|   |   |   |-- env.js
|   |   |   |-- routes.js
|   |   |   |-- views.js
|   |   |-- domain  <-- Domains/features files
|   |   |   |-- foo
|   |   |   |   |-- views
|   |   |   |   |   |-- foo-index.pug
|   |   |   |   |   |-- foo-list.pug
|   |   |   |   |-- controller.js
|   |   |   |   |-- model.js
|   |   |   |   |-- route.js
|   |   |   |   |-- service.js
|   |   |-- views
|   |   |   |-- includes <-- Include files - https://pugjs.org/language/includes.html
|   |   |   |-- error.pug
|   |   |   |-- layout.pug <-- Layout files - https://pugjs.org/language/extends.html
|   |-- .babelrc
|   |-- .dockerignore
|   |-- .editorconfig <-- Indentation  styles - http://editorconfig.org
|   |-- .env.example  <-- Example .env file
|   |-- .eslintignore
|   |-- .eslintrc.yml
|   |-- .gitignore
|   |-- Dockerfile
|   |-- README.md
|   |-- app.js
|   |-- docker-compose.yml
|   |-- nodemon.json
|   |-- package.json
|   |-- yarn.lock
```

## Quick Start

```bash
$ cd node-feature
$ docker-compose up
```

**Go to** [http://localhost:3000](http://localhost:3000)

**Be happy :)**

## Docker commands

**Check the versions**

Docker:
```bash
$ docker --version # Docker version 17.06.0-ce, build 02c1d87
```

Docker Compose:
```bash
$ docker-compose --version # docker-compose version 1.14.0, build c7bdf9e
```

**Build or rebuild services**

```bash
$ docker-compose build
```

**Create and start containers**

*Run containers in the background with **-d***

```bash
$ docker-compose up -d
```

### Extra commands

**Stop and remove containers, networks, images, and volumes**

```bash
$ docker-compose down
```

**List containers**

```bash
$ docker-compose ps
```

**View output from containers**

*Follow log output **-f***

```bash
$ docker-compose logs -f
```

## Licence
[MIT License](LICENSE)
