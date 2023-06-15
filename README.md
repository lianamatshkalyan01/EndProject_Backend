# E-commerce for Pharmacy - backend

## Description

This project was built to help you start E-commerce for Pharmacy - backend with a boilerplate which is fully ready for most of the basic back end tasks such as authorization, authentication, email confirmation and CRUD

## Features

* User registration and login
* Authentication via JWT
* Email confirmation
* CRUD for users, categories, undercategories, products, cart, cartitems, payment
* PostgreSQL
* Seeding

## Technologies/libraries used

* NodeJs
* Express
* PostgreSQL
* Sequelize ORM
* JWT token
* Nodemailer
* Stripe
* Multer


### Installing

```
git clone https://github.com/lianamatshkalyan01/EndProject_Backend.git
npm install
```

## Getting Started

To test the application

* Install PostgreSQL from https://www.postgresql.org/download/
* Create your free shared database and choose a username and password for it
* Add your username, password and database to the config.json file
* Example 
    "username": "postgres",
    "password": "Register0111",
    "database": "databasedb"
* Make a temporary gmail account for testing purposes
* Enable 2 factor authentication and click on app passwords (article: https://mailtrap.io/blog/send-emails-with-nodejs/)
* Add your email and password for the app in the .env file
* Example
EMAIL_SENDER='yourchosenemail@gmail.com'
EMAIL_PASSWORD='password
* Choose a random string as JWT secret or generate it in your terminal
```
node
console.log(bcrypt.randomBytes(64).toString('hex'));
```
* Copy it and place in in your .env file
* Example
TOKEN_SECRET="yourrandomlygeneratedsecret"
* Start the application
```
nodemon server.js
```
* Register via http://localhost:5000/user/register with firstname, lastname, email and password in the body as JSON format via Postman or any alternatives
* If successful, you should get a verification email
* Email link should look like this -  http://localhost:5000/user/verify/token
* Opening the link will change your username confirmed field to true and show confirmed message in the response
* Login via http://localhost:5000/user/login with the same email and password
* Your response should have a JSON token
* Place it inside the Authentication tab Bearer Token
* Make a request to http://localhost:5000/user/users
* If you get 200 OK and {"users": []} as a result, everything was successul
* From there you can edit the app based on your needs
* If you want to seed your post database with some random information, run node post_seed.js in the seeds folder, click "y" to delete all previous recrods or anything else to just add data without deleting anything

