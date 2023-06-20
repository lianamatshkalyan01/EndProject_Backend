# E-commerce for Pharmacy

## Description

This project was meticulously developed to provide a comprehensive solution for starting an E-commerce platform specifically tailored for a pharmacy. It seamlessly combines a fully functional backend with an intuitive frontend/User interface. The backend boilerplate encompasses essential features such as authorization, authentication, email confirmation, and CRUD operations, while the frontend boilerplate is optimized for tasks like user authentication, product purchasing, and order placement. With this project, you can easily kickstart your pharmacy's E-commerce operations and efficiently manage all crucial aspects of the platform.

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
* React
* vite
* Redux Toolkit
* React-router-dom
* TypeScript
* Ant Design 
* CSS
* MUI

### Installing

```
git clone https://github.com/lianamatshkalyan01/EndProject_Backend.git
npm install
```
```
git clone https://github.com/lianamatshkalyan01/EndProjectUser.git
cd vite-project
npm install
```
```
git clone https://github.com/lianamatshkalyan01/EndProjectAdmin.git
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
```
npm run dev
```
```
npm start
```
Backend
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

Frontend-User
* Navigate to the registration page and fill in the required information, including your first name, last name, email, and password.
* Upon successful registration, you will receive a verification email.
* The verification email will contain a link in the following format: http://localhost:5000/user/verify/token.
* Clicking on the link will confirm your username by changing the "confirmed" field to true and display a confirmation message in the   response.
* Proceed to the login page and enter the same email and password used during registration.
* If the login details are correct, you will be redirected to the user interface.
* Browse through the available products and select the ones you prefer. Add them to your cart.
* Enter the payment card details to proceed with the purchase. 
* Once the payment is successfully processed, your order will be confirmed.

Frontend-Admin
* Navigate to the registration page and fill in the required information, including your first name, last name, email, and password.
* Upon successful registration, you will receive a verification email.
* The verification email will contain a link in the following format: http://localhost:5000/user/verify/token.
* Clicking on the link will confirm your username by changing the "confirmed" field to true and display a confirmation message in the   response.
* Proceed to the login page and enter the same email and password used during registration.
* If the login details are correct, you will be redirected to the admin interface.
* Once logged in, you can proceed with the CRUD operations to create, update, and delete categories, undercategories and products as needed
