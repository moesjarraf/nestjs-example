[Nest.js](https://github.com/nestjs/nest) single page application using common libraries.

## Description

In this example project we display how easy it is to set up a RESTful single page application, complete with entity/service/repository layers and more. The `backend` folder is where all the magic happens using common libraries. The frontend is simply generated with `@angular/cli`, no tweaks are applied there. It should also be mentioned that angular can easily be swapped to any other framework, as long as it exposes an `index.html` file.

## Running the project

### Backend

```bash
$ cd backend
$ npm install
$ npm run start:dev
# backend is now running on localhost:3000
```

### Frontend

```bash
$ cd frontend
$ npm install
$ npm run start
# frontend is now running on localhost:4200
```

## Routes

### Default behavior

The following behavior is applied to these routes by default.

- `localhost:3000` OR `localhost:3000/api` - swagger documentation

### Single page app behavior

When the `FRONTEND_INDEX` env variable is set, and is correctly pointing to an `index.html` file, the backend will serve the frontend as a single page application. To get this behavior in this example project, all you have to do is `cd frontend && npm run build`, so that the `index.html` file is created.

- `localhost:3000` - serves frontend
- `localhost:3000/api` - swagger documentation

## Configuration

For all the default configuration options that can be applied to the backend, see [this](https://github.com/moesjarraf/nestjs-common#development) link.

## Contributing

Commit messages should be formatted according to semantic-release standards, see [this](https://github.com/semantic-release/semantic-release#commit-message-format) link for more information. A tool has been added to the project to make adhering to the standards easier.

```bash
# add source files
git add .

# format commit message
npm run commit

# push
git push -u origin master
```
