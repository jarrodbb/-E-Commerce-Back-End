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

- Product including the associated Category and Tag data

- Tag including the associated Product data

**Create a single**

- Category

- Product

- Tag

**Update a single**

- Category

- Product

- Tag

**Delete a single**

- Category

- Product

- Tag

## Table of Contents

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

### Video 

[YouTube](https://youtu.be/B63wQ-bN9x0)

[Mp4](https://github.com/jarrodbb/E-Commerce-Back-End/tree/main/assets/video)

[Google Drive](https://drive.google.com/file/d/1eOp6iWDAroweUDYNkfhl_PmlWDjC7Keu/view)


## Usage

## Open Insomnia

When the application is running on localhost:3001 open Insomnia to check the backend

### Category

#### Get all Categories (Get)

Include associated Products data

/api/categories

![Screenshot 2023-08-19 at 12 36 21 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/d5726937-7060-4ad6-a3a6-45da8f15427c)

#### Get a single Category by its id (Get)

Include associated Products data

/api/categories/:id

![Screenshot 2023-08-19 at 12 36 43 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/571b4081-0e33-41e2-b01b-cc5a8ebac0d5)

#### Create a Category (Post)

/api/categories

Include the category_name in the body

![Screenshot 2023-08-19 at 12 37 17 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/474d830b-5e5f-4c0c-bb56-8f8b88c0f18f)

#### Update a single Category by its id (Put)

/api/categories/:id

![Screenshot 2023-08-19 at 12 38 16 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/0ed3638e-de92-4f88-bc21-b1cc39ddc8f3)

#### Delete a single Category by its id (Delete)

/api/categories/:id

![Screenshot 2023-08-19 at 12 38 32 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/82d3b053-1cbd-4c87-abb7-00e5076751d4)

### Tag

#### Get all Tags (Get)

Include associated Products data

/api/tags

![Screenshot 2023-08-19 at 12 38 43 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/94223f5a-bdb3-4d87-a2f9-13d1aeb617df)

#### Get a single Tag by its id (Get)

Include associated Products data

/api/tags/:id

![Screenshot 2023-08-19 at 12 38 54 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/6128c5f2-d118-4a35-a224-c71d32f8bdbb)

#### Create a new Tag (Post)

/api/tags

Include the tag_name in the body

![Screenshot 2023-08-19 at 12 39 11 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/92cd4b99-01da-4b53-b489-53a3312b6205)

#### Update a single Tag by its id (Put)

/api/tags/:id

![Screenshot 2023-08-19 at 12 39 24 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/cb6286df-603e-4820-889d-1f6a71a688fd)

#### Delete a single Tag by its id (Delete)

/api/tags/:id

![Screenshot 2023-08-19 at 12 39 39 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/c49333c2-6892-4514-9c65-8588c9972352)

### Product

#### Get all Products (Get)

Include associated Products and Tag data

/api/products

![Screenshot 2023-08-19 at 12 39 49 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/12115c4b-04c6-4cc2-985e-04c10c35410f)

#### Get a single Product by its id (Get)

Include associated Products and Tag data

/api/products/:id

![Screenshot 2023-08-19 at 12 40 09 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/b31ef83d-c4d4-4539-90e9-88e03c597518)

#### Create a Product (Post)

/api/products

Include,
product_name:
price:
stock:
tagIds:

![Screenshot 2023-08-19 at 12 40 46 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/b2d9b543-dd40-48ea-937d-ed138ecd411a)

#### Update a single Product by its id (Put)

/api/products/:id

![Screenshot 2023-08-19 at 12 41 20 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/51cca605-a752-4522-8994-e368d6acfa17)

#### Delete a single Product by its id (Delete)
![Screenshot 2023-08-19 at 12 41 37 pm](https://github.com/jarrodbb/E-Commerce-Back-End/assets/132813348/e5e26e62-a4b1-42f7-9a6f-715723275ad5)

/api/products/:id

## License

Please refer to the licence in the repo.
