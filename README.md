# THE TORNADO APP - README

The TORNADO APP provides relevant information of the tornadoes and hail storms occurred in USA in 2016.
It retrieves data supplied by https://noaa.gov/ and parses them in a visual form using charts. 
Furthermore, it also provides real time data of the severe storms happening in USA using a google heat map.

The app include different level of access: guest user, registered user and admin user.
Navigating from the homepage, guests users can access the About and the Learn pages. 
The access to the graphic features requires the user to register and sign-in with an authentic email address. 
An email authentication system is also provided.
Moreover, the administrator have access to the users list page, where he can view and delete users profiles.

The application has been developed using the Rails 5.1.2 framework and it does embed the MVC architecture. 
The charting features have been developed using JQuery and implemented into the framework using Rails-jquery and Chartkick.

Once the app is downloaded, in order to run the application on the rails server the PostgreSQL server must be installed and started. 
In your directory where this app is installed, enter the following commands into the console:

- sudo apt-get update
- sudo apt-get install postgresql postgresql-contrib
 
Then,

- sudo service postgresql start

Once started, please enter:

- rails db:create
- rails db:migrate

To stop the server, enter:

- sudo service postgresql stop

Admin credentials are:
- username: 'Admin User'
- email: 'admin@railstutorial.org'
- password: 'administrator'

Alternatively, the app can be accessed on a Heroku host at the following link: https://peaceful-peak-81480.herokuapp.com/ .
Feel free to sign up by providing a valid email and a password.

This app was created by: Matteo De Michele
