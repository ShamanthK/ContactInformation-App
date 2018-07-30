Contact Information App

Technologies Used:

AngularJS
NodeJS
MongoDB
Express

Folder Structure:

A 'src' folder which contains the following folders and files:

1) Node_Modules - The folder which gets installed when node is installed with npm.

2) Public - Includes following folders and files:

a) Controller Folder - This folder contains the files for implementing controllers for different parts of the application and contains the following files:

i) AddContactController.js - Controller for AddContact Page.
ii) DeleteContactController.js - Controller for deleting the contact.
iii) EditContactController.js - Controller for editing/updating contact details.
iv) HomeController.js - Controller for main Contact Information App page.
v) ViewDetailsController.js - Controller for viewing contact details.

b) Services - Includes a file RepositoryService.js to implement different services.

c) Views/Contact Folder - Includes html files for implementing UI for different parts of the application.

i) AddContact.html - HTML page for adding contact.
ii) DeleteContact.html - HTML page for deleting contact.
iii) EditDetails.html - HTML page for editing details.
iv) index.html - HTML page for the main Contact Information App page.
v) ViewDetails.html - HTML page for viewing contact details.
 
d) app.js file - This file defines the AngularJS module and the route table.

e) index.html file

3) api.js file - The file which implements all api operations like get, put, post and delete.

4) package.json file

5) server.js file - The main nodejs server file which runs the server.


Instructions on running the application:

Install npm.
Install Node.
Install MongoDB.

Install Express - npm install express

Install Angular - npm install angular

Install mongojs - npm install mongojs

After cloning the project to a specific directory, open command prompt and move to the directory of the project.

Run the following command inside src folder in command prompt - node server.js

Once the server is running, open your browser and go to http://localhost:3000 to run the application.

Screenshots of the application have been attached.

Note:
If while running the application, if you get an error saying Proxy.create() is not a function, do the following:

a) Go to package.json file and under mongojs - change version to "*".

b) Run npm update.

c) Run node server.js again.

