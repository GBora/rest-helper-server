# rest-helper-server

This is a project that is intended to be an all batteries included REST-server which should be easy to setup (no configuration needed)
and allows front end developers to quickly prototype javascript applications that heavily rely on getting their data from an REST endpoint 
via ajax.

It contains the following collections of endpoints:

* cars (to suply cars to try out building a products/product view) IN PROGRESS
* users (to allow to test out various login/logout/signup etc scenarios) IN PROGRESS
* messages (to try and build out a messager type application) NOT STARTED
* to-do's (a back-end for the classical learning example) NOT STARTED
* statuses (if you need to receive a particular status code) NOT STARTED
* delays (if you need to test what happens when the backend has delays or randomly crashes) NOT STARTED

* Instalation and geting started

Just clone this and be sure you're on the `master` branch, then run `npm install` after everithing is completed run `npm start` to start the server and the typescript compilation.

You should see in the console that the API itself is up on http://localhost:9010 and the swagger is on http://localhost:9010/api-docs .

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

## To Do List

* update swagger