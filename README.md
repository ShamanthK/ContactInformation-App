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

-> AddContact.html - HTML page for adding contact.
-> DeleteContact.html - HTML page for deleting contact.
-> EditDetails.html - HTML page for editing details.
-> index.html - HTML page for the main Contact Information App page.
-> ViewDetails.html - HTML page for viewing contact details.
 
d) app.js file

e) index.html file

3) api.js file - The file which implements all api operations like get, put, post and delete.

4) package.json file

5) server.js file - The main nodejs server file which runs the server.


Instructions on running the application:

