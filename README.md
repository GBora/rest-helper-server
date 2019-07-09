# rest-helper-server

This is a project that is intended to be an all batteries included REST-server which should be easy to setup (no configuration needed)
and allows front end developers to quickly prototype javascript applications that heavily rely on getting their data from an REST endpoint
via ajax.

It contains the following collections of endpoints:

* messages (to try and build out a messager type application) DONE WITH INCOMPLETE SWAGGER
* to-do's (a back-end for the classical learning example) DONE WITH INCOMPLETE SWAGGER
* statuses (if you need to receive a particular status code) DONE AS MIDDLEWARE
* delays (if you need to test what happens when the backend has delays) DONE AS MIDDLEWARE
* cars (to suply cars to try out building a products/product view) IN PROGRESS
* users (to allow to test out various login/logout/signup etc scenarios) IN PROGRESS

* Instalation and geting started

Just clone this and be sure you're on the `master` branch, then run `npm install` after everithing is completed run `npm start` to start the server and the typescript compilation.

You should see in the console that the API itself is up on <http://localhost:9010> and the swagger is on <http://localhost:9010/api-docs> .

The port mentioned is just the default it can be changed from the `.env` file.

The database is a SQLite database and can be found in the `db` folder.

## Built with

* Node
* Express
* Typescript
* SQLite
* Swagger (for documenting the end points)
* Jest (unit testing)

## License

MIT

## Custom commands

`npm start`:  begins both a compilation of the typescript sources to javascript and runs the compiled javascript
so that the server is up, once this command runs your code will recompile and the server will restart.

## Non swagger end-points

Until I can migrate to openapi version 3 the following end point will not appear in the swagger but is available to
be called.

The url is for example `http://localhost:9010/api/todos/new` with the new to do item to be sent as an object in the body
`{ "text": "Hello World" }`.

## To Do List

* update swagger to openapi 3 which involves changing all the configuarions
