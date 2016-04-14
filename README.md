# flask-angular2-webpack-ts
A Simple boiler plate flask angular2 in typescript

##Introduction
This is a simple application using 
1) Flask for backend and static file
2) Typescript and Angular2 for front end
3) Webpack for module building

### Javascript dependencies
1. *npm* for package management
2. *webpack* from module builder

#### Installation (Frontend)
Lose the ```-g``` if you want only for the specific project

1. Install typescript globally using ```npm install typescript -g```
2. Install webpack globally using ```npm install webpack -g```
3. For compiling type script install ```npm install tsc -g```
4. Optionally you can install ```webpack-dev-server``` to test the client without using webpack te rebuild the module
5. Run ```npm install``` from the static directory
6. Run ```npm run build``` from the static directory

#### Installation (Backend)
There is requirements.txt to specify all the required packages for Flask
*This has beeen tested with *Python 3.5***
Setup virtual environemnt you can read it here ['Python Virtual env'](http://docs.python-guide.org/en/latest/dev/virtualenvs/)

To install all dependencies from the root execute ```pip install -r requirements.txt``` to intall all the required packages

###Testing
1. Start the flask server using the following command ```python manage.py runserver``` from the command line
2. Navigate to localhost:5000 and you can see
```Angular 2 Running in Flask
The is built using Flask, Angular2, with typescript and webpack```
