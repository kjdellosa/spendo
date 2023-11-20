# Spendo - A barebones expense tracking app

## Implemented using the following tech stack:
* Backend
  * NodeJS
  * ExpressJS
  * PostgreSQL
  * Prisma
* Frontend
  * ReactJS
  * NextJS
  * Antd
  * React Query

## How to run:
### Install packages:
In the root directory:
```sh
npm run setup
```

### Migration and seeding your database:
We use Prisma for setting up and seeding the database.

First, provide the database credentials in the `.env`. Example:
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/spendo?schema=public"
```
Then run the following:
```sh
cd server
npm run migrate
npm run seed
```

### Running the server and client:
In the root directory:
```sh
npm start
```

TODO: Docker build currently have issues that need to be resolved.

<!-- ## Tests
### Frontend:
Run `npm test` in the `client` directory

### Backend:
Run `npm test` in the `server` directory -->