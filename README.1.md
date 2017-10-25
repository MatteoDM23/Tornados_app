# README

The earthquake app provides relevant real-time information of the earthquakes 
happening in the world. It retrieves data supplied by https://earthquake.usgs.gov
and parses them in a visual form using charts and live maps. Navigating from the
homepage, guests users can access the About and the Donate pages, while access 
to the graphic features requires the user to register and sign-in with an 
authentic email address. The application has been developed using the Rails 5.1.2 
framework and it embeds the MVC architecture. The charting features have been 
developed using JQuery and implemented into the framework using Rails-jquery.

Once the app is downloaded, in order to run the application on the rails server 
the PostgreSQL server must be installed and started. In your directory where this 
app is installed, enter the following commands into the console:

sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
 
Then,

sudo service postgresql start

Once started, please enter:

rails db:create
rails db:migrate

To stop the server, enter:

sudo service postgresql stop

The app can be accessed on Heroku at the following link:
https://morning-wave-97685.herokuapp.com/

Login: kristian.neal.16@aberdeen.ac.uk
Password: Pa55word

This app was created by:

Matteo De Michele: Responsible For - Authentication System, layout and Report Sections 1.0, 2.5, 2.7 & 3.
Martin Islitzer: Responsible For - Charts and Live Feed Map, Report Sections 2.3, 2.4 and 3.
Kristian Neal: Responsible For - PostgreSQL install, static pages, layout including bootstrap and Report Sections 2.1, 2.2, 2.6, 2.8 & 3.


#qqq