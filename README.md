# OurCookBookSite
Code repository to run ourcook.book (domain name pending) locally


# API Layer

## Start Flask

navigate into the ./Flask folder and run command `python3 RestService.py`, 

this can be directly accessed locally through `http://localhost:5000/`


# Front End Directions

## Development server

Make sure to be in the same directory as this Read Me.  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Testing and Prod environments can be run by adding `--configuration=testing` or `--configuration=production` to the `ng serve` command

## Debugging Tips

If angular server is still runnning after using ctrl + c to kill the thread (getting an error about the standard front end port being already in use is usually what this indicates) use these stackoverflow tips to find the process it and kill it: https://stackoverflow.com/questions/39074678/how-to-end-ng-serve-or-firebase-serve

## General Angular Help

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
