# E-Commerce-Back-End

E-Commerce Back End

## Description

Back end for an e-commerce

The application is a functional Express.js API utilising Sequelize to interact with MySql database

Fields and rules have been set with Sequelize to create associations between the tables

The user is able to,

**Get all**

- Categories including the associated Product data

- Products including the associated Category and Tag data

- Tags including the associated Product data

**Get a single**

- Category including the associated Product data

- Producy including the associated Category and Tag data

- Tag including the associated Product data

**Create a single**

- Category

- Producy

- Tag

**Update a single**

- Category

- Producy

- Tag

**Delete a single**

- Category

- Producy

- Tag

## Table of Contents

- Category

- Producy

- Tag

- [Installation](#installation)

- [Usage](#usage)

- [license](#license)

## Installation

### Ensure a package.json file exists

If there is no package.json install one by running npm init

### Note:

.gitignore added to include node_modules and .env

### Install

- express: ^4.17.1

- sequelize: ^5.21.7

- mysql2: ^2.1.0

- dotenv: ^8.2.0

#### Source Schema to ensure the correct db is being used

- In the terminal run **"mysql -u root -p"** and enter your password

- run **"SOURCE db/schema.sql"** this ensures the user is using the **ecommerce_db**

#### Seed

- Run "npm run seed" in the terminal to seed the database

#### Run

- Run "npm run start" in the terminal to start the application

[server.js](https://github.com/jarrodbb/E-Commerce-Back-End/blob/main/server.js)
[package.json](https://github.com/jarrodbb/E-Commerce-Back-End/blob/main/package.json)
[seeds](https://github.com/jarrodbb/E-Commerce-Back-End/tree/main/seeds)
[routes](https://github.com/jarrodbb/E-Commerce-Back-End/tree/main/routes)
[models](https://github.com/jarrodbb/E-Commerce-Back-End/tree/main/models)
[db](https://github.com/jarrodbb/E-Commerce-Back-End/tree/main/db)
[config](https://github.com/jarrodbb/E-Commerce-Back-End/tree/main/config)

## Usage

## Open Insomnia

When the application is running on localhost:3001 open Insomnia to check the backend

### Category

#### Get all Categories (Get)

Include assosiated Products data

/api/categories

#### Get a single Category by its id (Get)

Include assosiated Products data

/api/categories/:id

#### Create a Category (Post)

/api/categories

Include the category_name in the body

#### Update a single Category by its id (Put)

/api/categories/:id

#### Delete a single Category by its id (Delete)

/api/categories/:id

### Tag

#### Get all Tags (Get)

Include assosiated Products data

/api/tags

#### Get a single Tag by its id (Get)

Include assosiated Products data

/api/tags/:id

#### Create a new Tag (Post)

/api/tags

Include the tag_name in the body

#### Update a single Tag by its id (Put)

/api/tags/:id

#### Delete a single Tag by its id (Delete)

/api/tags/:id

### Product

#### Get all Products (Get)

Include assosiated Products and Tag data

/api/products

#### Get a single Product by its id (Get)

Include assosiated Products and Tag data

/api/products/:id

#### Create a Product (Post)

/api/products

Include,
product_name:
price:
stock:
tagIds:

#### Update a single Product by its id (Put)

/api/products/:id

#### Delete a single Product by its id (Delete)

/api/products/:id

## License

Please refer to the licence in the repo.
