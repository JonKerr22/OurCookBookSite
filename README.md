# OurCookBookSite
Code repository to run ourcook.book (domain name pending) locally


# API Layer

## Start Flask

You need to have python3, pip3, and virutalenv all installed
Python3 official download:  https://www.python.org/downloads/
Python3 install guide: https://realpython.com/installing-python/ 
Pip3 install: https://www.activestate.com/resources/quick-reads/how-to-install-and-use-pip3/ 
Virutalenv install: https://learnpython.com/blog/how-to-use-virtualenv-python/

Navigate into the ./Flask folder and activate the virutal environment by running the command `virtualenv <env_name>` with <env_name> being the name of your choice.
Next, you need to activate the virutal environment, on mac or linux use the command `source <env_name>/bin/activate`, on windows the command is `.\<env_name>\Scripts\activate`
Then, to set up the virtual environment you need to install all the dependencies, use the command `pip3 install -r requirements.txt`
Finally, you can start up the Flask server, run the command command `python3 RestService.py`

This can be directly accessed locally through `http://localhost:5001/`

As note, the command string is currently hardcoded to the demo server while this gets built up. It should be changed to use Azure Key Vault with a new database server location, name, and password for security. Baby steps for now



# Front End Directions

You will need to install angular and the angular cli for this 
Angular + Angular CLI setup: https://angular.io/guide/setup-local

## Development server

Make sure to be in the same directory as this Read Me.  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Testing and Prod environments can be run by adding ` --configuration=testing` or ` --configuration=production` to the `ng serve` command

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
