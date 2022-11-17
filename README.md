### Expenses Tracker Application
*Expenses Tracker is a web app that allows you to track your income and expenses so you can see where your money is going. It was created using the MERN STACK ( MongoDB, Express, React.js and Nodejs).*

## Key Features
This Expenses Tracker App will include:

* User registration and authentication
* Hashing password for security 
* CRUD operations (create, read, update and delete) 
  * Add Income
  * Add Expenses

## Technologies used
This project was created using the following technologies.

#### Front-end

- React JS
- Redux (for managing and centralizing application state)
- React-router-dom (To handle routing)
- Axios (for making api calls)
- Bootstrap (for User Interface)
- Formik 

#### Server

- Express
- Mongoose
- Mongoose paginate
- JWT (For authentication)
- bcryptjs (for data encryption)
- Cors
- dotenv

#### Database
MongoDB (MongoDB Atlas)

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the backend on one terminal and the frontend on the other terminal)

In the first terminal
- cd backend and create a .env file in the root of your client directory.
- Install backend side dependencies

```
$ cd client
$ npm install (to install client-side dependencies)

```
In the second terminal
- cd frontend and install frontend side dependencies

```
$ cd backend
$ npm install (to install client-side dependencies)

```
Finally cd back to the root file and install concurrently and run Both servers at the same time
```
$ cd ..
$ npm install or ipm install (to install dependencies)
$ npm run dev

```
## Future goals

* Finishing up the frontend side
* Adding a graph to help tracking and understand your finance clearly
* Deploy the website online
